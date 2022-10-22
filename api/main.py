import requests
import pandas as pd
from fastapi import FastAPI
import matplotlib.pyplot as plt, mpld3

headers = {
  'Accept': 'application/json'
}

app = FastAPI()
@app.get("/my-first-api")
def hello():
  return {"Hello world!"}

@app.get("/get-iris")
def get_iris():

    import pandas as pd
    url ='https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv'
    iris = pd.read_csv(url)

    return iris

"""This endpoint returns a JSON dictionary with the top three slots for a given date and duration up to 24 hours in advance."""
@app.get("/top-three-slots")
def top_three_slots(date = "2022-10-22T12:35Z", duration = 0.5):
    url = 'https://api.carbonintensity.org.uk/intensity/' + date + '/fw24h'
    r = requests.get(url, headers = headers)
    r = r.json()
    data = pd.json_normalize(r['data'], max_level=1)
    data = data.drop(['to', 'intensity.actual', 'intensity.index'], axis = 1)
    data = data.set_index('from')
    smallest = data.nsmallest(3,"intensity.forecast")
    return smallest.to_dict()

"""This endpoint returns a JSON dictionary with a graph of the carbon intensity over the next 24 hours."""
@app.get("/graph")
def graph(date = "2022-10-22T12:35Z"):
    url = 'https://api.carbonintensity.org.uk/intensity/' + date + '/fw24h'
    r = requests.get(url, headers = headers)
    r = r.json()
    data = pd.json_normalize(r['data'], max_level=1)
    data = data.drop(['to', 'intensity.actual', 'intensity.index'], axis = 1)
    data = data.set_index('from')
    data = data.reset_index()
    data['from'] = pd.to_datetime(data['from'], format = '%Y-%m-%dT%H:%MZ')
    fig = plt.figure(figsize =(4, 4))
    plt.plot(data["from"], data["intensity.forecast"])
    return mpld3.fig_to_dict(fig)
