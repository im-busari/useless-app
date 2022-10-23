import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import activitiesData from "../components/Activity/activities_db";
import { useForm } from "../hooks";
import mpld3_load_lib from "../components/Dashboard/mpld3_load_lib ";
import mpld3 from 'mpld3';

export function Activity () {
    const navigate = useNavigate();
    const [points, setPoints] = useState(0);
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/when-should-i')
         .then((response) => response.json())
         .then((data) => {
            setData(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
    }, []);

    const initialState = {
        activityStartDate: "",
        activityStartTime: "",
        activityDuration: "",
        activityName: ""
    };

    const { onChange, onSubmit : onTaskSubmit, values } = useForm(
        submitActivityCallback,
        initialState
    );
    const { onChange: onGraphChange, onSubmit : onGraphSubmit, values : graphValues } = useForm(
        submitGraphCallback,
        { graphDuration: "" }
    );
    
    async function submitGraphCallback() {
        fetch(`http://127.0.0.1:8000/when-should-i?duration=${graphValues.graphDuration}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
            console.log(err.message);
            });
    }

    async function submitActivityCallback() {
        console.log(values)
        fetch(`http://127.0.0.1:8000/points-for-logging?date=${values.activityStartDate}T${values.activityStartTime}Z&duration=${values.activityDuration}`)
            .then((response) => response.json())
            .then((data) => {
              setPoints(data);
            })
            .catch((err) => {
            console.log(err.message);
            });
    }
    const fig_name = "fig_el427345810798888193429725";
    return (
        <>
        <div className="row d-flex vh-100 align-middle justify-content-center align-items-center">
            <div className="col-6 text-center align-items-center">
            <form onSubmit={onGraphSubmit}>
                <div className="form-group mt-1">
                    <label htmlFor="graphDuration" className="my-2">Duration</label>
                    <input type="text" className="form-control" onChange={onGraphChange} name="graphDuration" id="graphDuration" placeholder="1" />
                </div>
                <div className="d-flex flex-column align-items-end">
                    
                    <button type="submit" className="btn btn-success px-4 py-2 mt-5 float-right">Update</button>
                </div>
            </form>
                {
                    mpld3_load_lib("https://d3js.org/d3.v5.js", function () {
                        mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.8.js", function () {
                        mpld3.remove_figure(fig_name)
                        mpld3.draw_figure(fig_name, data);
                        })
                    })
                }   
                <div id={fig_name}></div>
            </div>
            <div className="offset-1 col-4">

            <form onSubmit={onTaskSubmit}>
                <div className="form-group">
                    <label htmlFor="activityName" className="my-2">Appliance</label>
                    <select name="activityName" className="form-select" aria-label="Default select example" defaultValue={activitiesData[0].appliance_name}>
                        {
                            activitiesData.map((data) => {
                                return <option key={data.id} value={data.appliance_name}>{data.appliance_name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group mt-1">
                    <label htmlFor="selectDatetime" className="my-2">Datetime</label>
                    <div className="d-flex justify-content-between">
                        <input name="activityStartDate" type="date" onChange={onChange} className="form-control" id="selectDatetime" />
                        <input name="activityStartTime" type="time" onChange={onChange} className="form-control ml-2" id="selectDatetime" />
                    </div>
                </div>
                <div className="form-group mt-1">
                    <label htmlFor="activityDuration" className="my-2">Duration</label>
                    <input type="text" className="form-control" onChange={onChange} name="activityDuration" id="activityDuration" placeholder="1" />
                </div>
                <div className="d-flex flex-column align-items-end">
                    
                    <button type="submit" className="btn btn-success px-4 py-2 mt-5 float-right">Log Activity</button>
                </div>
                {
                        points > 0 
                        ? <div className="mt-5 alert alert-success">
                            <strong>Well done! </strong> You earned {points} points!
                        </div>
                        : <div className="mt-5 alert alert-danger">
                            <strong>Oops! </strong>Seems like you didn't pick the best time.
                        </div>
                }
                
            </form>
            </div>
            
        </div>
        </>
    )
}