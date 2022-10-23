import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActivityOptions from "../components/Activity/ActivityOptions";
import activitiesData from "../components/Activity/activities_db";
import { useForm } from "../hooks";
import { IActivity } from "../interfaces/IActivity";

export function Activity () {
    const navigate = useNavigate();

    // defining the initial state for the form
    const initialState = {
        email: "",
        password: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        submitActivityCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function submitActivityCallback() {
        // send "values" to database
        // send request

        return navigate("/dashboard");
    }

    return (
        <>
        <div className="d-flex vh-100 align-middle justify-content-center align-items-center">
            <form onSubmit={onSubmit} className="col-lg-4 col-md-offset-6">
                <div className="form-group">
                    <label htmlFor="applianceName">Appliance</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        {
                            activitiesData.map((data: IActivity) => {
                                return <option value={data.id}>{data.appliance_name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                    </select>
                </div>
                <div className="d-flex flex-column align-items-end">
                    
                    <button type="submit" className="btn btn-success px-4 py-2 mt-5 float-right">Log Activity</button>
                </div>
            </form>
        </div>
        </>
    )
}