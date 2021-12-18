import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
const CreateCommoditiesOrder = () => {

    const [valuation, setValuation] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    let userinfo = null;
    const navigate = useNavigate();
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
            type
        }

        axiosInstance
        .post('CommodotiesGetPost/', {
            user: userinfo.user_id,
            valuation: OrderInfo.valuation,
            type: OrderInfo.type,
            
        })
        .catch((err) => {
            alert("Error");
        }
        );
        navigate('/OtherAssetHistory');
    }

    return (

        <div className="content">
            <NavBar />
            <div className="CreateOrder">
                <h2>Create Commodities Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>Current Valuation: </label>
                    <input type="number"
                        required
                        value={valuation}
                        onChange={(e) => setValuation(e.target.value)} />

                    <label>Type: </label>
                    <input type="text"
                        required
                        value={type}
                        onChange={(e) => setType(e.target.value)} />


                    <button>Add Commoditiy Order</button>
                </form>

            </div>

        </div>


    );
}

export default CreateCommoditiesOrder;