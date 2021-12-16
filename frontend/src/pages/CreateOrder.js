import React, { useEffect, Component } from 'react';
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
    const [brokers, setBrokers] = useState(null);
    let userinfo = null;

    userinfo = parseJwt(localStorage.getItem('access_token'));

    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }


    useEffect(() => {
        axiosInstance
        .get('BrokeragesGetPost/')
            .then(response => {
                setBrokers(response.data)
            })
            .catch((err) => {
                console.log(err)
                alert("permission denied");
            }
            

            );
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);



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
            user: userinfo.user_id,
            ticker: OrderInfo.ticker,
            purchasePrice: OrderInfo.price,
            quantity: OrderInfo.quantity,
            purchaseTime: OrderInfo.date,
            account: OrderInfo.account,
            brokerage: OrderInfo.brokerage,
            buysell: OrderInfo.buyOrSell,
        
            
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
                    
                        {brokers&&
                            brokers.map((broker) => (
                                <option value={broker.name}>{broker.name}</option>    
                        ))
                        }
                        {!brokers ?(
                            <option value="No existing broker">No existsing Brokers, Use Add Brokerage Below</option>  
                            ):
                            (<option value="null">Add Additional Brokers Using Add Brokerage Below</option>
                            )
                        }
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