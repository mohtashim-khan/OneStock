import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
const ModifyRealEstateOrder = () => {

    const [orderID, setOrderID] = useState('');
    const [valuation, setValuation] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');






    const handleSubmit = (e) => {
        e.preventDefault();
        const OrderInfo = {
            orderID,
            valuation,
            type,
            location,
            address
        }

        axiosInstance
        .patch('RealEstatePutPatchDelete/'+OrderInfo.orderID, {
            valuation: OrderInfo.valuation,
            type: OrderInfo.type,
            location: OrderInfo.location,
            address: OrderInfo.address,
        
        })
        .catch((err) => {
            alert("No existing asset, please create the asset first");
        }
        );
    }

    return (

        <div className="content">
            <NavBar />
            <div className="CreateOrder">
                <h2>Modify Real Estate Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>OrderID: </label>
                    <input type="number"
                        required
                        value={orderID}
                        onChange={(e) => setOrderID(e.target.value)} />
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



                    <button>Modify Real Estate Order</button>
                </form>

            </div>

        </div>


    );
}

export default ModifyRealEstateOrder;