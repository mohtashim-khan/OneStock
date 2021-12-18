import React, { useEffect, Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
const ModifyOrder = () => {

    const [orderID, setOrderID] = useState(null);
    //const [ticker, setTicker] = useState('previousValue');
    const [price, setPrice] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [date, setDate] = useState(null);
    const [account, setAccount] = useState(null);
    //const [brokerage, setBrokerage] = useState(null);
    const [buyOrSell, setbuyOrSell] = useState('B');

    const [accounts, setAccounts] = useState(null);
    const [orders, setOrders] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {

        axiosInstance
            .get('StockOrdersGetPost/')
            .then(response => {
                setOrders(response.data)
            })
            .catch((err) => {
                console.log(err)
                alert("permission denied");
            }


            );
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
            orderID,
            price,
            quantity,
            date,
            account,
            buyOrSell
        }
        let ticker = null;
        for (var i = 0; i < orders.length; i++) {
            if (orders[i].id == orderID) {
                ticker = orders[i].ticker;
                console.log(ticker)
                break;
            }
        }
        let brokerage = null;
        for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].accountType == account) {
                brokerage = accounts[i].brokerage;
                console.log(brokerage)
                break;
            }
        }

        axiosInstance
            .patch('StockOrdersGetPutPatchDelete/' + OrderInfo.orderID + '/', {
                ticker: ticker,
                purchasePrice: OrderInfo.price,
                quantity: OrderInfo.quantity,
                purchaseTime: OrderInfo.date,
                account: OrderInfo.account,
                brokerage: brokerage,
                buysell: OrderInfo.buyOrSell,

            }).then(resp => {
                axiosInstance
                    .get('SpecificStockOrderHistoryPutPatchDeleteByTicker/' + ticker + '/')
                    .then(specificStockHistory => {

                        console.log("Specific Stock History Already Created");
                        axiosInstance
                            .get('TotalStockOrderHistoryGetPost/')
                            .then(totalStockHistory => {

                                if (OrderInfo.buyOrSell == "S") {

                                    let gainPerShare = OrderInfo.price - specificStockHistory.data.currentHoldingAvgValue;
                                    let net_gain = gainPerShare * quantity;
                                    specificStockHistory.data.netProfit += parseFloat(net_gain);
                                    specificStockHistory.data.sharesOwned -= quantity;
                                    totalStockHistory.data[0].quantityOfTrades++;
                                    totalStockHistory.data[0].netProfit += parseFloat(net_gain);
                                }

                                else {

                                    let net = price * quantity;
                                    specificStockHistory.data.amountInvested += parseFloat(net);
                                    let avgValue = specificStockHistory.data.currentHoldingAvgValue;
                                    let sharesOwned = specificStockHistory.data.sharesOwned;
                                    specificStockHistory.data.currentHoldingAvgValue = ((avgValue * sharesOwned) + parseFloat(net)) / (parseFloat(sharesOwned) + parseFloat(quantity));
                                    specificStockHistory.data.sharesOwned += parseFloat(quantity);
                                    totalStockHistory.data[0].totalInvested += parseFloat(net);
                                }



                                let specificStockEndPoint = "SpecificStockOrderHistoryPutPatchDelete/" + specificStockHistory.data.id + "/";
                                let totalStockHistoryEndPoint = "TotalStockOrderHistoryPutPatchDelete/" + totalStockHistory.data[0].id + "/";

                                axiosInstance
                                    .patch(specificStockEndPoint, {
                                        ticker: specificStockHistory.data.ticker,
                                        industry: specificStockHistory.data.industry,
                                        netProfit: specificStockHistory.data.netProfit,
                                        exchange: specificStockHistory.data.exchange,
                                        amountInvested: specificStockHistory.data.amountInvested,
                                        currentHoldingAvgValue: specificStockHistory.data.currentHoldingAvgValue,
                                        sharesOwned: specificStockHistory.data.sharesOwned,
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

                                alert("Order Modified!");
                                navigate('/StockOrderHistory');

                            })
                            .catch((err) => {
                                alert("Error Getting Total Stock history");
                            }
                            );

                    })
                    .catch((err) => {

                        console.log("Creating Specifc Stock History");
                        axiosInstance
                            .get('TotalStockOrderHistoryGetPost/')
                            .then(totalStockHistory => {


                                let exchange = prompt("Please Specify Which Exchange This Stock Belongs To: ");
                                let industry = prompt("Please Specify Which Industry This Stock Belongs To: ");

                                axiosInstance
                                    .post('SpecificStockOrderHistoryGetPost/', {
                                        ticker: ticker,
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
                                            specificStockHistoryResponse.data.netProfit += parseFloat(net_gain);
                                            specificStockHistoryResponse.data.sharesOwned -= quantity;
                                            totalStockHistory.data[0].quantityOfTrades++;
                                            totalStockHistory.data[0].netProfit += parseFloat(net_gain);
                                        }

                                        else {

                                            let net = price * quantity;
                                            specificStockHistoryResponse.data.amountInvested += parseFloat(net);
                                            let avgValue = specificStockHistoryResponse.data.currentHoldingAvgValue;
                                            let sharesOwned = specificStockHistoryResponse.data.sharesOwned;
                                            specificStockHistoryResponse.data.currentHoldingAvgValue = ((avgValue * sharesOwned) + parseFloat(net)) / (parseFloat(sharesOwned) + parseFloat(quantity));
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

                                        alert("Order Modified!");
                                        navigate('/StockOrderHistory');

                                    })
                                    .catch((err) => { console.log("ERROR IN SPECIFIC STOCK HISTORY 2") });

                            })
                            .catch((err) => {
                                alert("Error Getting Total Stock history");
                            }
                            );

                    }
                    );

            })
            .catch((err) => {
                alert("No existing Order, please add the Order first");
            }
            );


    }

    return (

        <div className="content">
            <NavBar />
            <div className="CreateOrder">
                <h2>Modify Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>OrderID: </label>
                    <select
                        required
                        value={orderID}
                        onChange={(e) => setOrderID(e.target.value)} >

                        {orders &&
                            orders.map((order) => (
                                <option value={order.id}>{order.id}</option>
                            ))
                        }
                        {!orders ? (
                            <option value="null">No existsing Orders, Please Add Orders First</option>
                        ) :
                            (<option value="null">Please Select an OrderID</option>
                            )
                        }

                    </select>

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
                        {accounts &&
                            accounts.map((account) => (
                                <option value={account.accountType}>{account.accountType}</option>
                            ))
                        }
                        {!account ? (
                            <option value="null">No existsing Tickers, Please Add an Account First</option>
                        ) :
                            (<option value="null">Please Select an Account</option>
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


                    <button>Modify Order</button>
                </form>


            </div>

        </div>


    );
}

export default ModifyOrder;