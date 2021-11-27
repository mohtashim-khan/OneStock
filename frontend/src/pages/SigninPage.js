import React, { Component } from 'react';
import { useState } from "react"
import "../css/SignIn.css"

const SignIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const userInfo = {
            username,
            password
        }

        fetch('http://localhost:3000/signin',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userInfo)
            }).then(() => {
                console.log('User info Sent!');
            })
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
                        value={username}
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
                    window.location.href = "/CreateAccount";
                }
                }>Create Account</button>


            </div>

        </div>


    );
}

export default SignIn;