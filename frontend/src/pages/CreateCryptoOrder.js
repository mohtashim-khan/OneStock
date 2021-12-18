import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
const CreateCryptoOrder = () => {

    const [valuation, setValuation] = useState('');
    const [name, setName] = useState('');
    const [purchasePrice, setPrice] = useState('');
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
            name,
            purchasePrice,
            quantity
        }

        axiosInstance
        .post('CryptoGetPost/', {
            user: userinfo.user_id,
            valuation: OrderInfo.valuation,
            name: OrderInfo.name,
            purchasePrice: OrderInfo.purchasePrice,
            quantity: OrderInfo.quantity,
            
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
                <h2>Create Crypto Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>Current Valuation: </label>
                    <input type="number"
                        required
                        value={valuation}
                        onChange={(e) => setValuation(e.target.value)} />

                    <label>Name: </label>
                    <input type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)} />

                    <label>Purchase Price: </label>
                    <input type="number"
                        required
                        value={purchasePrice}
                        onChange={(e) => setPrice(e.target.value)} />

                    <label>Quantity: </label>
                    <input type="number"
                        required
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)} />

                    <button>Add Crypto Order</button>
                </form>

            </div>

        </div>


    );
}

export default CreateCryptoOrder;