import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import "../css/StockOrderHistory.css"

const StockOrderHistory = () => {

    const value = 'hello';
    return (
        <div className="content">
            <NavBar />
            <h2>Stock Order History</h2>
            <div className="StockOrderHistory">
                <div className="buttonsContainer">
                    <button>Import From PC</button>
                    <button> Create Custom Order</button>
                    <button>Modify Order By ID</button>
                    <button>Delete Order By ID</button>
                    <button>Delete Order by OrderReqID</button>
                </div>



                <table val="5">
                    <caption>Order History</caption>

                    <tr>
                        <th>Order ID</th>
                        <th>Ticker</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Date</th>
                        <th>Value</th>
                        <th>OrderReqID</th>
                        <th>Account</th>
                    </tr>
                </table>
            </div>


        </div>



    );
}

export default StockOrderHistory;