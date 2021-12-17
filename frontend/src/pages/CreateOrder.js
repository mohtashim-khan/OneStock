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
    const [specificStockOrderHistory, setSpecificStockOrderHistory] = useState(null);
    const [totalStockHistory, setTotalStockHistory] = useState(null);
    let userinfo = null;

    userinfo = parseJwt(localStorage.getItem('access_token'));

    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
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
            .post('OrderFormGetPost/', {
                typeofFile: "Custom Order",
                numOfOrders: 1,
                dateRequested: OrderInfo.date,
                account: OrderInfo.account,
            })
            .then(

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
                        alert("Error in Orders");
                    }
                    )
            )
            .catch((err) => {
                alert("Problem with OrderForm");
            }
            );

        axiosInstance
            .get('SpecificStockOrderHistoryGetPost/')
            .then(response => {
                setSpecificStockOrderHistory(response.data)
            })
            .catch((err) => {
                alert("ERROR GETTING SPECFIC STOCK");
            }
            );

        axiosInstance
            .get('TotalStockOrderHistoryGetPost/')
            .then(response => {
                setTotalStockHistory(response.data)
            })
            .catch((err) => {
                alert("Error Getting Total Stock history");
            }
            );

        if (specificStockOrderHistory.length == 0) {
            let exchange = prompt("Please Specify Which Exchange This Stock Belongs To: ");
            let industry = prompt("Please Specify Which Industry This Stock Belongs To: ")

            axiosInstance
                .post('SpecificStockOrderHistoryGetPost/', {
                    ticker: OrderInfo.ticker,
                    industry: industry,
                    netProfit: 0,
                    exchange: exchange,
                    amountInvested: 0,
                    currentHoldingAvgValue: 0,
                    sharesOwned: 0,
                    stockHistoryID: totalStockHistory.id,
                })
                .catch((err) => {
                    alert("Error Creating SpecificStockOrderHistory");
                });

            setSpecificStockOrderHistory({
                ticker: OrderInfo.ticker,
                industry: industry,
                netProfit: 0,
                exchange: exchange,
                amountInvested: 0,
                currentHoldingAvgValue: 0,
                sharesOwned: 0,
                stockHistoryID: totalStockHistory.id
            });


            totalStockHistory.uniqueTickers++;

        }

        if (OrderInfo.buyOrSell == "SELL") {

            let gainPerShare = OrderInfo.price - specificStockOrderHistory.currentHoldingAvgValue;
            let net_gain = gainPerShare * quantity;
            specificStockOrderHistory.netProfit += net_gain;
            specificStockOrderHistory.sharesOwned -= quantity;
            totalStockHistory.quantityOfTrades++;
            totalStockHistory.netProfit += net_gain;
        }

        else {

            let net = price * quantity;
            specificStockOrderHistory.amountInvested += net
            let avgValue = specificStockOrderHistory.currentHoldingAvgValue;
            let sharesOwned = specificStockOrderHistory.sharesOwned;
            specificStockOrderHistory.currentHoldingAvgValue = ((avgValue * sharesOwned) + net) / (sharesOwned + quantity);
            specificStockOrderHistory.sharesOwned += quantity;
            totalStockHistory.totalInvested += net;
        }


        let specificStockEndPoint = "SpecificStockOrderHistoryPutPatchDelete/" + specificStockOrderHistory.id + "/";
        let totalStockHistoryEndPoint = "TotalStockOrderHistoryPutPatchDelete/" + totalStockHistory.id + "/";

        axiosInstance
            .put(specificStockEndPoint, {
                ticker: specificStockOrderHistory,ticker,
                industry: specificStockOrderHistory.industry,
                netProfit: specificStockOrderHistory.netProfit,
                exchange: specificStockOrderHistory.exchange,
                amountInvested: specificStockOrderHistory.amountInvested,
                currentHoldingAvgValue: specificStockOrderHistory.currentHoldingAvgValue,
                sharesOwned: specificStockOrderHistory.sharesOwned,
                stockHistoryID: totalStockHistory.id,
            })
            .catch((err) => {
                alert("Error Creating SpecificStockOrderHistoryPut");
            });

        axiosInstance
            .patch(totalStockHistoryEndPoint, {
                quantityOfTrades : totalStockHistory.quantityOfTrades,
                netProfit : totalStockHistory.netProfit,
                totalInvested : totalStockHistory.totalInvested,
            })
            .catch((err) => {
                alert("Error Creating TotalStockHistory Patch");
            });






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