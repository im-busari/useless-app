import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActivityOptions from "../components/Activity/ActivityOptions";
import activitiesData from "../components/Activity/activities_db";
import { useForm } from "../hooks";
import { IActivity } from "../interfaces/IActivity";

export function Activity () {
    const navigate = useNavigate();
    const [points, setPoints] = useState(0);
    const [visible, setVisible] = useState(false);
    // const [startDate, setStartDate] = useState([]);
    // const [startTime, setStartTime] = useState([]);
    // const [duration, setDuration] = useState([]);
    // const [activityName, setActivityName] = useState([]);

    const initialState = {
        activityStartDate: "",
        activityStartTime: "",
        activityDuration: "",
        activityName: ""
    };

    const { onChange, onSubmit, values } = useForm(
        submitActivityCallback,
        initialState
    );

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

    return (
        <>
        <div className="d-flex vh-100 align-middle justify-content-center align-items-center">
            <form onSubmit={onSubmit} className="col-lg-4 col-md-offset-6">
                <div className="form-group">
                    <label htmlFor="activityName" className="my-2">Appliance</label>
                    <select name="activityName" className="form-select" aria-label="Default select example" defaultValue={activitiesData[0].appliance_name}>
                        {
                            activitiesData.map((data: IActivity) => {
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
                            <strong>Oops! </strong>Seems like you didn't pick the best time. Go back to the dashboard to check when should you do your activities.
                        </div>
                }
                
            </form>
            
        </div>
        </>
    )
}