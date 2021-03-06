import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/AddBrokerage.css"
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';



const AddBrokerage = () => {

    const [name, setName] = useState('');
    const [fees, setFees] = useState('');
    const [perOrderFees, setperOrderFees] = useState('');
    const [currencyConversionRate, setcurrencyConverstionRate] = useState('');
    const[output, setoutput] = useState('');
    const navigate = useNavigate();




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
        .then((res)=>{
            alert("BROKERAGE ADDED!");
            navigate("/StockOrderHistory");
        }
        )
        .catch((err) => {
            alert("Error");
        }
        );
      
    
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