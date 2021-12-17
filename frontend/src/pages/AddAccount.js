import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/AddBrokerage.css"
import axiosInstance from '../axios';
const AddAccount = () => {

    const [accountType, setType] = useState('');
    


    let userinfo = null;
    userinfo = parseJwt(localStorage.getItem('access_token'));

    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const accountInfo = {
            accountType
        }
        axiosInstance
        .post('AccountGetPost/', {
            user: userinfo.user_id,
            accountValue: 0,
            accountType: accountInfo.accountType,

        })
        .catch((err) => {
            alert("Error");
        }
        );
    
    }

    return (

        <div className="content">
            <NavBar/>
            <div className="AddAccount">
                <h2>Add Banking Account</h2>
                <form onSubmit={handleSubmit}>
                    <label>Type: </label>
                    <select
                        name = "abcc"
                        required
                        value={accountType}
                        onChange={(e) => setType(e.target.value)}>
                        <option value="TFSA">TFSA</option>
                        <option value="RRSP">RRSP</option>
                        <option value="Non-Registered">Non-Registered</option>
                    </select>
                    <button>Add Account</button>
                </form>


            </div>

        </div>


    );
}

export default AddAccount;