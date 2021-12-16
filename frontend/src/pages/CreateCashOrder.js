import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
const CreateCashOrder = () => {

    const [valuation, setValuation] = useState('');
    const [bank, setBank] = useState('');
    const [currencyType, setCurrencyType] = useState('');
    let userinfo = null;
    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    userinfo = parseJwt(localStorage.getItem('access_token'));


    const handleSubmit = (e) => {
        e.preventDefault()
        const OrderInfo = {
            valuation,
            bank,
            currencyType
        }

        axiosInstance
        .post('CashGetPost/', {
            user: userinfo.user_id,
            valuation: OrderInfo.valuation,
            bank: OrderInfo.bank,
            currency: OrderInfo.currencyType,
        })
        .catch((err) => {
            alert("Error");
        }
        );
    }

    return (

        <div className="content">
            <NavBar />
            <div className="CreateOrder">
                <h2>Create Cash Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>Valuation: </label>
                    <input type="number"
                        required
                        value={valuation}
                        onChange={(e) => setValuation(e.target.value)} />

                    <label>Bank: </label>
                    <input type="text"
                        required
                        value={bank}
                        onChange={(e) => setBank(e.target.value)} />

                    <label>Type of Currency: </label>
                    <input type="text"
                        required
                        value={currencyType}
                        onChange={(e) => setCurrencyType(e.target.value)} />



                    <button>Add Cash Order</button>
                </form>

            </div>

        </div>


    );
}

export default CreateCashOrder;