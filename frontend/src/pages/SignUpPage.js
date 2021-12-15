import React, { Component } from 'react';
import axiosInstance from '../axios';
import { useState } from "react"
import "../css/SignUp.css"
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [user_name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isSuperUser, setisSuperUser] = useState('True');
    const [output, setOutput] = useState('');
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault()
        const userInfo = {
            user_name,
            password,
            email,
            isSuperUser
        }

        axiosInstance
            .post(`CreateUser/`, {
                user_name: userInfo.user_name,
                password: userInfo.password,
                email: userInfo.email,
                isSuperUser: userInfo.isSuperUser,
            })
            .then((res) => {
                navigate('/SignIn');
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => {
                setOutput("!!!!ERROR!!!!");
            }

            );
    }

    return (

        <div className="content">
            <h1>OneStock</h1>
            <div className="SignUp">
                <h2>Sign-Up</h2>
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

                    <label>Email: </label>
                    <input type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <label>Super-User: </label>
                    <select
                        required
                        value={isSuperUser}
                        onChange={(e) => setisSuperUser(e.target.value)}>
                        <option value="True">Yes</option>
                        <option value="False">No</option>
                    </select>

                    <button>Sign-Up</button>


                </form>

                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/";
                }
                }>Back To Sign-In</button>

                <div>{output}</div>


            </div>

        </div>


    );
}

export default SignUp;