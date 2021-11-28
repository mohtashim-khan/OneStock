import React, { Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"

const ModifyOrder = () => {

    const [orderId, setOrderID] = useState('ID Value');
    const [ticker, setTicker] = useState('previousValue');
    const [price, setPrice] = useState('previousValue');
    const [quantity, setQuantity] = useState('previousValue');
    const [date, setDate] = useState('previousValue');
    const [account, setAccount] = useState("TFSA");
    const [brokerage, setBrokerage] = useState("Wealthsimple");
    const [buyOrSell, setbuyOrSell] = useState("BUY");





    const handleSubmit = (e) => {
        e.preventDefault()
        const OrderInfo = {
            orderId,
            ticker,
            price,
            quantity,
            date,
            account,
            brokerage,
            buyOrSell
        }

        fetch('http://localhost:3000/ModifyOrderID',
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
                <h2>Modify Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>OrderID: </label>
                    <input type="number"
                        required
                        value={orderId}
                        onChange={(e) => setOrderID(e.target.value)} />

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

                    <label>Account: </label>
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


                    <button>Modify Order</button>
                </form>


            </div>

        </div>


    );
}

export default ModifyOrder;