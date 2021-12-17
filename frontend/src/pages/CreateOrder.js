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
    const [account, setAccount] = useState(null);
    const [buyOrSell, setbuyOrSell] = useState('B');
    const [accounts, setAccounts] = useState(null);

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
            .get('AccountGetPost/')
            .then(response => {
                setAccounts(response.data)
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
            buyOrSell
        }



        let brokerage = null;
        for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].id == account) {
                brokerage = accounts[i].brokerage;
                break;
            }
        }


        axiosInstance
            .post('OrderFormGetPost/', {
                typeofFile: "Custom Order",
                numOfOrders: 1,
                dateRequested: OrderInfo.date,
                account: OrderInfo.account,
            })
            .then((res) => {



                axiosInstance
                    .post('StockOrdersGetPost/', {
                        user: userinfo.user_id,
                        ticker: OrderInfo.ticker,
                        purchasePrice: OrderInfo.price,
                        quantity: OrderInfo.quantity,
                        purchaseTime: OrderInfo.date,
                        account: OrderInfo.account,
                        brokerage: brokerage,
                        buysell: OrderInfo.buyOrSell,
                        orderReqID: res.data.id

                    })
                    .catch((err) => {
                        alert("Error in Orders");
                    }
                    )
            }
            )
            .catch((err) => {
                alert("Problem with OrderForm");
            }
            );


        axiosInstance
            .get('SpecificStockOrderHistoryGetPost/')
            .then(specificStockHistory => {


                axiosInstance
                    .get('TotalStockOrderHistoryGetPost/')
                    .then(totalStockHistory => {

                        console.log("GO INTO IF");
                        console.log(specificStockHistory.data);

                        let index = null;
                        for (var i = 0; i < specificStockHistory.length; i++) {
                            if (specificStockHistory[i].data.ticker == OrderInfo.ticker) {
                                index = i;
                                break;
                            }
                        }

                        if (index == null || specificStockHistory.data[index] == null || specificStockHistory.data[index].length == 0) {
                            console.log("ASK FOR PROMPTS");
                            let exchange = prompt("Please Specify Which Exchange This Stock Belongs To: ");
                            let industry = prompt("Please Specify Which Industry This Stock Belongs To: ");

                            axiosInstance
                                .post('SpecificStockOrderHistoryGetPost/', {
                                    ticker: OrderInfo.ticker,
                                    industry: industry,
                                    netProfit: 0,
                                    exchange: exchange,
                                    amountInvested: 0,
                                    currentHoldingAvgValue: 0,
                                    sharesOwned: 0,
                                    stockHistoryID: totalStockHistory.data[0].id,
                                })
                                .then(specificStockHistoryResponse => {
                                    console.log(totalStockHistory.data[0].id);


                                    console.log(specificStockHistoryResponse.data);

                                    if (OrderInfo.buyOrSell == "S") {

                                        let gainPerShare = OrderInfo.price - specificStockHistoryResponse.data.currentHoldingAvgValue;
                                        let net_gain = gainPerShare * quantity;
                                        specificStockHistoryResponse.data.netProfit += net_gain;
                                        specificStockHistoryResponse.data.sharesOwned -= quantity;
                                        totalStockHistory.data[0].quantityOfTrades++;
                                        totalStockHistory.data[0].netProfit += net_gain;
                                    }

                                    else {

                                        let net = price * quantity;
                                        specificStockHistoryResponse.data.amountInvested += net
                                        let avgValue = specificStockHistoryResponse.data.currentHoldingAvgValue;
                                        let sharesOwned = specificStockHistoryResponse.data.sharesOwned;
                                        specificStockHistoryResponse.data.currentHoldingAvgValue = ((avgValue * sharesOwned) + net) / (sharesOwned + quantity);
                                        specificStockHistoryResponse.data.sharesOwned += quantity;
                                        totalStockHistory.data[0].totalInvested += net;
                                    }



                                    let specificStockEndPoint = "SpecificStockOrderHistoryPutPatchDelete/" + specificStockHistoryResponse.data.id + "/";
                                    console.log(totalStockHistory.data[0].id);
                                    let totalStockHistoryEndPoint = "TotalStockOrderHistoryPutPatchDelete/" + totalStockHistory.data[0].id + "/";

                                    axiosInstance
                                        .put(specificStockEndPoint, {
                                            ticker: specificStockHistoryResponse.data.ticker,
                                            industry: specificStockHistoryResponse.data.industry,
                                            netProfit: specificStockHistoryResponse.data.netProfit,
                                            exchange: specificStockHistoryResponse.data.exchange,
                                            amountInvested: specificStockHistoryResponse.data.amountInvested,
                                            currentHoldingAvgValue: specificStockHistoryResponse.data.currentHoldingAvgValue,
                                            sharesOwned: specificStockHistoryResponse.data.sharesOwned,
                                            stockHistoryID: totalStockHistory.data[0].id,
                                        })
                                        .then()
                                        .catch((err) => {
                                            alert("Error Creating SpecificStockOrderHistoryPut");
                                        });

                                    axiosInstance
                                        .patch(totalStockHistoryEndPoint, {
                                            quantityOfTrades: totalStockHistory.data[0].quantityOfTrades,
                                            netProfit: totalStockHistory.data[0].netProfit,
                                            totalInvested: totalStockHistory.data[0].totalInvested,
                                        })
                                        .catch((err) => {
                                            alert("Error Creating TotalStockHistory Patch");
                                        });


                                })
                                .catch((err) => { console.log("ERROR IN SPECIFIC STOCK HISTORY 2") });
                        }
                        else {

                            let index = null;
                            for (var i = 0; i < specificStockHistory.length; i++) {
                                if (specificStockHistory[i].data.ticker == OrderInfo.ticker) {
                                    index = i;
                                    break;
                                }
                            }

                            if (OrderInfo.buyOrSell == "S") {

                                let gainPerShare = OrderInfo.price - specificStockHistory.data[index].currentHoldingAvgValue;
                                let net_gain = gainPerShare * quantity;
                                specificStockHistory.data[index].netProfit += net_gain;
                                specificStockHistory.data[index].sharesOwned -= quantity;
                                totalStockHistory.data[0].quantityOfTrades++;
                                totalStockHistory.data[0].netProfit += net_gain;
                            }

                            else {

                                let net = price * quantity;
                                specificStockHistory.data[index].amountInvested += net
                                let avgValue = specificStockHistory.data[index].currentHoldingAvgValue;
                                let sharesOwned = specificStockHistory.data[index].sharesOwned;
                                specificStockHistory.data[index].currentHoldingAvgValue = ((avgValue * sharesOwned) + net) / (sharesOwned + quantity);
                                specificStockHistory.data[index].sharesOwned += quantity;
                                totalStockHistory.data[0].totalInvested += net;
                            }



                            let specificStockEndPoint = "SpecificStockOrderHistoryPutPatchDelete/" + specificStockHistory.data[index].id + "/";
                            let totalStockHistoryEndPoint = "TotalStockOrderHistoryPutPatchDelete/" + totalStockHistory.data[0].id + "/";

                            axiosInstance
                                .put(specificStockEndPoint, {
                                    ticker: specificStockHistory.data[index].ticker,
                                    industry: specificStockHistory.data[index].industry,
                                    netProfit: specificStockHistory.data[index].netProfit,
                                    exchange: specificStockHistory.data[index].exchange,
                                    amountInvested: specificStockHistory.data[index].amountInvested,
                                    currentHoldingAvgValue: specificStockHistory.data[index].currentHoldingAvgValue,
                                    sharesOwned: specificStockHistory.data[index].sharesOwned,
                                    stockHistoryID: totalStockHistory.data[0].id,
                                })
                                .then()
                                .catch((err) => {
                                    alert("Error Creating SpecificStockOrderHistoryPut");
                                });

                            axiosInstance
                                .patch(totalStockHistoryEndPoint, {
                                    quantityOfTrades: totalStockHistory.data[0].quantityOfTrades,
                                    netProfit: totalStockHistory.data[0].netProfit,
                                    totalInvested: totalStockHistory.data[0].totalInvested,
                                })
                                .catch((err) => {
                                    alert("Error Creating TotalStockHistory Patch");
                                });
                        }














                    })
                    .catch((err) => {
                        alert("Error Getting Total Stock history");
                    }
                    );



            })
            .catch((err) => {
                alert("ERROR GETTING SPECFIC STOCK");
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
                        {accounts &&
                            accounts.map((singleaccount) => (
                                <option value={singleaccount.id}>{singleaccount.accountType}</option>
                            ))
                        }
                        {!accounts ? (
                            <option value="No existing account">Please Select Account</option>
                        ) :
                            (<option value="null">Please Select Account</option>
                            )
                        }
                    </select>

                    <label>BUY/SELL: </label>
                    <select
                        required
                        value={buyOrSell}
                        onChange={(e) => setbuyOrSell(e.target.value)}>
                        <option value="B">BUY</option>
                        <option value="S">SELL</option>
                    </select>


                    <button>Add Order</button>
                </form>

                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/AddAccount";
                }
                }>Add New Account</button>


            </div>

        </div>


    );
}

export default CreateOrder;