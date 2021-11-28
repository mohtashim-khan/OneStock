import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"

const ModifyCashOrder = () => {

    const [orderID, setOrderID] = useState('');
    const [valuation, setValuation] = useState('');
    const [bank, setBank] = useState('');
    const [currencyType, setCurrencyType] = useState('');





    const handleSubmit = (e) => {
        e.preventDefault()
        const OrderInfo = {
            orderID,
            valuation,
            bank,
            currencyType
        }

        fetch('http://localhost:3000/ModifyCashOrder',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(OrderInfo)
            }).then(() => {
                console.log(OrderInfo);
            })
    }

    return (

        <div className="content">
            <NavBar />
            <div className="CreateOrder">
                <h2>Modify Cash Order</h2>
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



                    <button>Modify Cash Order</button>
                </form>

            </div>

        </div>


    );
}

export default ModifyCashOrder;