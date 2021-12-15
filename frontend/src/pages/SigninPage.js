import React, { Component } from 'react';
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import "../css/SignIn.css"
import axiosInstance from '../axios';


const SignIn = () => {

    const [user_name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [output, setOutput] = useState('');
    const navigate = useNavigate();


    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const userInfo = {
            user_name,
            password
        }

        axiosInstance
        .post(`token/`, {
            user_name: userInfo.user_name,
            password: userInfo.password,

        })
        .then((res) => {
            localStorage.setItem('access_token', res.data.access);
			localStorage.setItem('refresh_token', res.data.refresh);
			axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
			navigate('/Home');
        })
        .catch((err) => {
            setOutput("INCORRECT USERNAME/PASSWORD");
        }

        );
    }



    return (

        <div className="content">
            <h1>OneStock</h1>
            <div className="signin">
                <h2>Sign-In</h2>
                <form onSubmit={handleSubmit}>
                    <label>Username: </label>
                    <input type="text"
                        required
                        value={user_name}
                        onChange={(e) => setUsername(e.target.value)} />

                    <label>Password: </label>
                    <input type="text"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <button>Sign-In</button>
                </form>


                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/SignUp";
                }
                }>Create Account</button>

                <div>{output}</div>

            </div>

        </div>


    );
}

export default SignIn;