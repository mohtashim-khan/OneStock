import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"

const ModifyBondOrder = () => {

    const [orderID, setOrderID] = useState('');
    const [valuation, setValuation] = useState('');
    const [faceValue, setFaceValue] = useState('');
    const [maturityDate, setMaturityDate] = useState('');
    const [interest, setInterest] = useState('');






    const handleSubmit = (e) => {
        e.preventDefault()
        const OrderInfo = {
            orderID,
            valuation,
            faceValue,
            maturityDate,
            interest
        }

        fetch('http://localhost:3000/ModifyBondOrder',
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
                <h2>Modify Bond Order</h2>
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

                    <label>Face Value: </label>
                    <input type="number"
                        required
                        value={faceValue}
                        onChange={(e) => setFaceValue(e.target.value)} />

                    <label>Maturity Date: </label>
                    <input type="date"
                        required
                        value={maturityDate}
                        onChange={(e) => setMaturityDate(e.target.value)} />

                    <label>Interest: </label>
                    <input type="number"
                        required
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)} />



                    <button>Modify Bond Order</button>
                </form>

            </div>

        </div>


    );
}

export default ModifyBondOrder;