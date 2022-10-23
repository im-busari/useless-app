import React, { useEffect, useState } from "react";
import logo from '../logo.png';
import { useForm } from "../hooks";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    // defining the initial state for the form
    const initialState = {
        email: "",
        password: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // send "values" to database
        localStorage.setItem('token', "valueToken");

        return navigate("/dashboard");
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
          return navigate("/dashboard");
        }
      }, []);

    return (
        <div className="d-flex vh-100 align-middle justify-content-center align-items-center">
            <img src={logo} alt={"logo"} className="w-25" /> 
            <form onSubmit={onSubmit} className="col-lg-4 col-md-offset-6">
                <h1 className="mb-5 text-right">Our smashing slogan here! </h1>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">E-mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@gmail.com" />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="**********" />
                </div>
                <div className="d-flex flex-column align-items-end">
                    
                    <button type="submit" className="btn btn-success px-4 py-2 mt-5 float-right">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;