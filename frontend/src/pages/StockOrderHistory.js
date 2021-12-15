//import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import "../css/StockOrderHistory.css"
import React, { useEffect,useState } from 'react';

const StockOrderHistory = () => {

    const value = 'hello';
    const [entry,setentry] = useState(null);
    const query = '?userID=1';
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://localhost:4000/api/GetStockOrderHistory'+query)
            .then(response => response.json())
            .then(data => setentry(data.total));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="content">
            <NavBar />
            <h2>Stock Order History</h2>
            <div1>{entry}</div1>
            <div className="StockOrderHistory">
                <div className="buttonsContainer">
                    <button>Import From PC</button>
                    <button> Create Custom Order</button>
                    <button>Modify Order By ID</button>
                    <button>Delete Order By ID</button>
                    <button>Delete Order by OrderReqID</button>
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
                </table>
            </div>


        </div>



    );
}

export default StockOrderHistory;