import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/AddBrokerage.css"
import axiosInstance from '../axios';
const AddBrokerage = () => {

    const [name, setName] = useState('');
    const [fees, setFees] = useState('');
    const [perOrderFees, setperOrderFees] = useState('');
    const [currencyConversionRate, setcurrencyConverstionRate] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault()
        const brokerageInfo = {
            name,
            fees,
            perOrderFees,
            currencyConversionRate
        }
        axiosInstance
        .post('BrokeragesGetPost/', {
            name: brokerageInfo.name,
            fees: brokerageInfo.fees,
            perOrderFees: brokerageInfo.perOrderFees,
            currencyConversionRate: brokerageInfo.currencyConversionRate,

        })
        .catch((err) => {
            alert("Error");
        }
        );
        // fetch('http://localhost:3000/AddBrokerage',
        //     {
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(brokerageInfo)
        //     }).then(() => {
        //         console.log(brokerageInfo);
        //     })
    }

    return (

        <div className="content">
            <NavBar/>
            <div className="AddBrokerage">
                <h2>Add Brokerage</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name: </label>
                    <input type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)} />

                    <label>Fees: </label>
                    <input type="number"
                        required
                        value={fees}
                        onChange={(e) => setFees(e.target.value)} />

                    <label>Per Order Fees: </label>
                    <input type="number"
                        required
                        value={perOrderFees}
                        onChange={(e) => setperOrderFees(e.target.value)} />

                    <label>Currency Conversion: </label>
                    <input type="number"
                        required
                        value={currencyConversionRate}
                        onChange={(e) => setcurrencyConverstionRate(e.target.value)} />

                    <button>Add Brokerage</button>
                </form>


            </div>

        </div>


    );
}

export default AddBrokerage;