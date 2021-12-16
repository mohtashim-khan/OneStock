import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
const CreateBondOrder = () => {

    const [valuation, setValuation] = useState('');
    const [faceValue, setFaceValue] = useState('');
    const [maturityDate, setMaturityDate] = useState('');
    const [interest, setInterest] = useState('');

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
        const OrderInfo = {
            valuation,
            faceValue,
            maturityDate,
            interest
        }
        axiosInstance
        .post('BondsGetPost/', {
            user: userinfo.user_id,
            valuation: OrderInfo.valuation,
            principal: OrderInfo.faceValue,
            maturityDate: OrderInfo.maturityDate,
            interest: OrderInfo.interest,
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
                <h2>Create Bond Order</h2>
                <form onSubmit={handleSubmit}>

                    <label>Valuation: </label>
                    <input type="number"
                        required
                        value={valuation}
                        onChange={(e) => setValuation(e.target.value)} />

                    <label>Face Value: </label>
                    <input type="number"
                        required
                        value={faceValue}
                        onChange={(e) => setFaceValue(e.target.value)} />

                    <label>Maturity Date: </label>
                    <input type="number"
                        required
                        value={maturityDate}
                        onChange={(e) => setMaturityDate(e.target.value)} />

                    <label>Interest: </label>
                    <input type="number"
                        required
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)} />



                    <button>Create Bond Order</button>
                </form>

            </div>

        </div>


    );
}

export default CreateBondOrder;