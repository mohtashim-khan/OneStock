import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
const CreateRealEstateOrder = () => {

    const [valuation, setValuation] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');
    let userinfo = null;
    userinfo = parseJwt(localStorage.getItem('access_token'));

    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        const OrderInfo = {
            valuation,
            type,
            location,
            address
        }
        
        axiosInstance
        .post('RealEstateGetPost/', {
            user: userinfo.user_id,
            valuation: OrderInfo.valuation,
            type: OrderInfo.type,
            location: OrderInfo.location,
            address: OrderInfo.address,
    
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
                <h2>Create Real Estate Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>Valuation: </label>
                    <input type="number"
                        required
                        value={valuation}
                        onChange={(e) => setValuation(e.target.value)} />

                    <label>Type of Real Estate: </label>
                    <input type="text"
                        required
                        value={type}
                        onChange={(e) => setType(e.target.value)} />

                    <label>Location </label>
                    <input type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)} />

                    <label>Address: </label>
                    <input type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />



                    <button>Add Real Estate Order</button>
                </form>

            </div>

        </div>


    );
}

export default CreateRealEstateOrder;