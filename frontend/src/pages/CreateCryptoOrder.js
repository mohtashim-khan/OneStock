import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"

const CreateCryptoOrder = () => {

    const [valuation, setValuation] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');





    const handleSubmit = (e) => {
        e.preventDefault()
        const OrderInfo = {
            valuation,
            type,
            price,
            quantity
        }

        fetch('http://localhost:3000/CreateCryptoOrder',
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
                <h2>Create Crypto Order</h2>
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

                    <label>Purchase Price: </label>
                    <input type="number"
                        required
                        value={price}
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