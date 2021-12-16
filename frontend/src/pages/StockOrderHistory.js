//import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import "../css/StockOrderHistory.css"
import React, { useEffect,useState } from 'react';
import axiosInstance from '../axios';


const StockOrderHistory = () => {
    
    const [entrys,setentrys] = useState(null);
    useEffect(() => {
        
        axiosInstance
            .get(`StockOrdersGetPost/`)
            .then(response => {
                setentrys(response.data);
            })
            .catch((err) => {
                alert("NOT LOGGED IN");
            }

            );
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    
    
    
        
    return (
        <div className="content">
            <NavBar />
            <h2>Stock Order History</h2>
            
            <div className="StockOrderHistory">
                <div className="buttonsContainer">
                    <button>Import From PC</button>

                    <button onClick={(e) => {window.location.href="/CreateOrder";}}>Create Custom Order</button>
                    
                    <button onClick={(e) => {window.location.href="/ModifyOrder";}}>Modify Order By ID</button>
                    <button onClick={(e) => {window.location.href="/AddBrokerage";}}>Add Brokerage</button>
                  
                </div>
                


                <table val="11">
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
                    {entrys&&
                        entrys.map((entry) => (
                            <tr>
                                <th>{entry.id}</th>
                                <th>{entry.ticker}</th>
                                <th>{entry.purchasePrice}</th>
                                <th>{entry.quantity}</th>
                                <th>{entry.purchaseTime}</th>
                                <th>{entry.purchasePrice*entry.quantity}</th>
                                <th>{entry.orderReqID}</th>
                                
                            </tr>
                        ))
                    }
                    
                </table>
            </div>
        </div>
    );
}

export default StockOrderHistory;