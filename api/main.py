import requests
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import matplotlib.pyplot as plt, mpld3
import matplotlib.dates as mdates
import datetime
import numpy as np
from fastapi.responses import Response

headers = {
  'Accept': 'application/json'
}

origins = [
    "http://localhost:3000",
]

def floor_dt(dt, delta):
    return dt - (dt-datetime.min) % delta

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


"""This endpoint returns a JSON dictionary with the top three slots for a given date and duration up to 24 hours in advance."""
"""@app.get("/top-three-slots")
def top_three_slots(date = "2022-10-22T12:35Z", duration = 0.5):
    url = 'https://api.carbonintensity.org.uk/intensity/' + date + '/fw24h'
    r = requests.get(url, headers = headers)
    r = r.json()
    data = pd.json_normalize(r['data'], max_level=1)
    data = data.drop(['to', 'intensity.actual', 'intensity.index'], axis = 1)
    data = data.set_index('from')
    smallest = data.nsmallest(3,"intensity.forecast")
    return smallest.to_dict()"""

"""This endpoint returns a JSON dictionary with a graph of the carbon intensity over the next 24 hours."""
@app.get("/graph")
# , responses = {200: {"content": {"image/png": {}}}}, response_class=Response,
def graph():
    today = datetime.date.today()
    today_string = today.strftime('%Y-%m-%dT%H:%MZ')
    url = 'https://api.carbonintensity.org.uk/intensity/' + today_string + '/fw24h'
    r = requests.get(url, headers = headers)
    r = r.json()
    data = pd.json_normalize(r['data'], max_level=1)
    data = data.drop(['to', 'intensity.actual', 'intensity.index'], axis = 1)
    data = data.set_index('from')
    data = data.reset_index()
    data['from'] = pd.to_datetime(data['from'], format = '%Y-%m-%dT%H:%MZ')
    fig = plt.figure(figsize =(4, 4))
    plt.plot(data["from"], data["intensity.forecast"])
    content = plt.savefig("graph.png")
    #return Response(content=content, media_type="image/png")
    return mpld3.fig_to_dict(fig)

"""Pass in a date and time and a duration in hours (can have .5's), get a graph of the rolling average over the next (almost) 24 hours and the points you'll get for various start times."""
@app.get("/when-should-i")
def graph(duration = 1):
    today = datetime.date.today()
    today_string = today.strftime('%Y-%m-%dT%H:%MZ')
    duration = int(duration)
    url = 'https://api.carbonintensity.org.uk/intensity/' + today_string? + '/fw24h'
    r = requests.get(url, headers = headers)
    r = r.json()
    data = pd.json_normalize(r['data'], max_level=1)
    data = data.drop(['to', 'intensity.actual', 'intensity.index'], axis = 1)
    data = data.set_index('from')
    data.index = pd.to_datetime(data.index, format = '%Y-%m-%dT%H:%MZ')
    rolling = data.rolling(int(duration/0.5) )
    rolling_mean = rolling.mean()
    shifted = rolling_mean.shift(-duration*2, freq=datetime.timedelta(seconds=1800))
    without = pd.DataFrame(shifted.iloc[duration*2:])
    without["intensity.forecast"] = without["intensity.forecast"].round(0).astype(int)

    fig = plt.figure(figsize =(12, 10))
    without = without.reset_index()
    plt.plot(without["from"], without["intensity.forecast"])
    min_value = without['intensity.forecast'].min()
    max_value = without['intensity.forecast'].max()
    for step, value in without[['from','intensity.forecast']].values:
        steppy = step.to_pydatetime()
        if value < min_value + (max_value-min_value)*0.125:
            color = (0.46, 0.53, 0.24) # dark green
        elif value < min_value + (max_value-min_value)*0.25:
            color = (0.77, 0.91, 0.4) # light green
        else:
            color = (1,1,1)
        plt.fill_betweenx(np.array([140,240]),steppy, steppy+datetime.timedelta(seconds=1800),facecolor=color,alpha=1)
    plt.gca().xaxis.set_major_formatter(mdates.DateFormatter('%H:%M'))
    plt.xlabel("Time")
    plt.ylabel("Carbon Intensity g/kWh")
    return mpld3.fig_to_dict(fig)

@app.get("/points-for-logging")
def pointsForLogging(date = "2022-10-22T12:35Z", duration = 1):
    duration = int(duration)
    url = 'https://api.carbonintensity.org.uk/intensity/' + date + '/fw24h'
    r = requests.get(url, headers = headers)
    r = r.json()
    data = pd.json_normalize(r['data'], max_level=1)
    data = data.drop(['to', 'intensity.actual', 'intensity.index'], axis = 1)
    data = data.set_index('from')
    data.index = pd.to_datetime(data.index, format = '%Y-%m-%dT%H:%MZ')
    rolling = data.rolling(int(duration/0.5) )
    rolling_mean = rolling.mean()
    shifted = rolling_mean.shift(-duration*2, freq=datetime.timedelta(seconds=1800))
    without = pd.DataFrame(shifted.iloc[duration*2:])
    without["intensity.forecast"] = without["intensity.forecast"].round(0).astype(int)
    without = without.reset_index()
    min_value = without['intensity.forecast'].min()
    max_value = without['intensity.forecast'].max()
    points = 0

    for step, value in without[['from','intensity.forecast']].values:
        steppy = step.to_pydatetime()
        if value < min_value + (max_value-min_value)*0.125:
            color = (0.46, 0.53, 0.24) # dark green
        elif value < min_value + (max_value-min_value)*0.25:
            color = (0.77, 0.91, 0.4) # light green
        else:
            color = (1,1,1)

