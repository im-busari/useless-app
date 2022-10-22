import requests
import pandas as pd
from fastapi import FastAPI

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

@app.get("/3besttimes")
def get_iris():

    r = requests.get('https://api.carbonintensity.org.uk/intensity/2022-10-22T12:35Z/fw24h', headers = headers)
    r = r.json()
    data = pd.json_normalize(r['data'], max_level=1)
    data = data.drop(['to', 'intensity.actual', 'intensity.index'], axis = 1)
    data = data.set_index('from')
    smallest = data.nsmallest(3,"intensity.forecast")
    return smallest.to_dict()
