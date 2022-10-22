import React, { useState } from "react";

import { useForm } from "../hooks";

function Login() {
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
    }

    return (
        <div className="d-flex vh-100 align-middle justify-content-center align-items-center">
            <form onSubmit={onSubmit} className="col-lg-4 col-md-offset-6">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">E-mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check mt-3">
                    <input name="name" type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                <div className="d-flex flex-column align-items-end">
                    <button type="submit" className="btn btn-primary mt-5 float-right">Login</button>
                </div>
            {/* <div>
                <input
                    name='email'
                    id='email'
                    type='email'
                    placeholder='Email'
                    onChange={onChange}
                    required
                    />

                <input
                    name='password'
                    id='password'
                    type='password'
                    placeholder='Password'
                    onChange={onChange}
                    required
                    />
                <button type='submit'>Login</button>
            </div> */}
            </form>
        </div>
    );
}

export default Login;