import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
const CreateOrder = () => {

    const [ticker, setTicker] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [date, setDate] = useState('');
    const [account, setAccount] = useState('TFSA');
    const [brokerage, setBrokerage] = useState('WealthSimple');
    const [buyOrSell, setbuyOrSell] = useState('BUY');





    const handleSubmit = (e) => {
        e.preventDefault()
        const OrderInfo = {
            ticker,
            price,
            quantity,
            date,
            account,
            brokerage,
            buyOrSell
        }
    
        axiosInstance
        .post('StockOrdersGetPost/', {
            ticker: OrderInfo.ticker,
            price: OrderInfo.price,
            quantity: OrderInfo.quantity,
            date: OrderInfo.date,
            account: OrderInfo.account,
            brokerage: OrderInfo.brokerage,
            buyOrSell: OrderInfo.buyOrSell,
        
            
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
                <h2>Create Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>Ticker: </label>
                    <input type="text"
                        required
                        value={ticker}
                        onChange={(e) => setTicker(e.target.value)} />

                    <label>Price: </label>
                    <input type="number"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />

                    <label>Quantity: </label>
                    <input type="number"
                        required
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)} />

                    <label>Date: </label>
                    <input type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)} />

                    <label>Account </label>
                    <select
                        required
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}>
                        <option value="TFSA">TFSA</option>
                        <option value="RRSP">RRSP</option>
                        <option value="Non-Registered">Non-Registered</option>
                    </select>

                    <label>Brokerage </label>
                    <select
                        required
                        value={brokerage}
                        onChange={(e) => setBrokerage(e.target.value)}>
                        <option value="WealthSimple">WealthSimple</option>
                        <option value="RBC">RBC</option>
                    </select>

                    <label>BUY/SELL: </label>
                    <select
                        required
                        value={buyOrSell}
                        onChange={(e) => setbuyOrSell(e.target.value)}>
                        <option value="BUY">BUY</option>
                        <option value="SELL">SELL</option>
                    </select>


                    <button>Add Order</button>
                </form>

                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/AddBrokerage";
                }
                }>Add New Brokerage</button>


            </div>

        </div>


    );
}

export default CreateOrder;