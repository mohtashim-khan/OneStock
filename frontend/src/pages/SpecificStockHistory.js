import React from 'react'

import "../css/SearchBar.css"
import NavBar from '../components/Navbar';
function SpecificStockHistory(){
    return(
        <>

        <div>
            <NavBar />
            <h2>Specific Stock Information</h2>
            <p2> Specific Stock Performance: </p2>
            <net_back>%3.9</net_back>
            <p3>Stock Net Value:</p3>
            <over_back>$1,221.02</over_back>
            <table val = "1">
                <caption>Dividend Information</caption>
                <tr>
                    <th scope="col">Ticker</th>
                    <th>Dividend Yield(%)</th>
                    <th>Dividend Last Paid($)</th>
                    <th>Total Accumulated($)</th>
                    <th>Account</th>
                </tr>
            </table>
            <table val = "3">
                <caption>Shares Information</caption>
                <tr>
                    <th scope="col">Ticker</th>
                    <th>Average Purchase Price($)</th>
                    <th>Current Price($)</th>
                    <th>Shares Owned</th>
                    <th>Account</th>
                </tr>
            </table>
            <table val = "4">
                <caption>Order History</caption>
                <tr>
                    <th scope="col">Buy/Sell</th>
                    <th>Order ID</th>
                    <th>Amount</th>
                    <th>Purchase/Sell Price($)</th>
                    <th>Date</th>
                    <th>Account</th>
                </tr>
            </table>
           

            <form class="form-wrapper">
                <input type="text" id="search" placeholder="Search by Stock Ticker eg. XYZ ..." required/>
                <input type="submit" value="Search" id="submit"/>
            </form>



        </div>
    </>
    );
}

export default SpecificStockHistory;