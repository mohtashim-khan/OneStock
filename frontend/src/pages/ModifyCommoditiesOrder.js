import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
const ModifyCommoditiesOrder = () => {

    const [orderID, setOrderID] = useState('');
    const [valuation, setValuation] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');





    const handleSubmit = (e) => {
        e.preventDefault()
        const OrderInfo = {
            orderID,
            valuation,
            type
        }

        axiosInstance
        .patch('CommoditiesGetPutPatchDelete/'+OrderInfo.orderID, {
            valuation: OrderInfo.valuation,
            type: OrderInfo.type,
        
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
                <h2>Modify Commodities Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>OrderID: </label>
                    <input type="number"
                        required
                        value={orderID}
                        onChange={(e) => setOrderID(e.target.value)} />
                        
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

                    <button>Modify Commodities Order</button>
                </form>

            </div>

        </div>


    );
}

export default ModifyCommoditiesOrder;