import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"

const CreateRealEstateOrder = () => {

    const [valuation, setValuation] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');






    const handleSubmit = (e) => {
        e.preventDefault();
        const OrderInfo = {
            valuation,
            type,
            location,
            address
        }

        fetch('http://localhost:3000/CreateRealEstateOrder',
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