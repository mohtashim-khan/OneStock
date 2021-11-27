import React, { Component } from 'react';
import { useState } from "react"
import "../css/SignUp.css"

const SignUp = () => {

    const [username, setUsername] = useState('username');
    const [password, setPassword] = useState('password');
    const [email, setEmail] = useState('email');
    const [isSuperUser, setisSuperUser] = useState('Yes');



    const handleSubmit = (e) => {
        e.preventDefault()
        const userInfo = {
            username,
            password,
            email,
            isSuperUser
        }

        fetch('http://localhost:3000/SignUp',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userInfo)
            }).then(() => {
                console.log(userInfo);
            })
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
                        value={username}
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
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>

                    <button>Sign-Up</button>
                </form>

                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/";
                }
                }>Back To Sign-In</button>


            </div>

        </div>


    );
}

export default SignUp;