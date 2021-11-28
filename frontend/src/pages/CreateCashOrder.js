import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"

const CreateCashOrder = () => {

    const [valuation, setValuation] = useState('');
    const [bank, setBank] = useState('');
    const [currencyType, setCurrencyType] = useState('');





    const handleSubmit = (e) => {
        e.preventDefault()
        const OrderInfo = {
            valuation,
            bank,
            currencyType
        }

        fetch('http://localhost:3000/CreateCashOrder',
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