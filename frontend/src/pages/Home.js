import React from 'react'
import NavBar from '../components/Navbar';
import '../css/Home.css';


function Home() {
    return (
        <>
            <NavBar />
            <div>
                <h2>Welcome Home</h2>
                <p2> Overall Portfolio Performance: </p2>
                <net_back>%10.9</net_back>
                <p3>Overall Net Value:</p3>
                <over_back>$120,021.02</over_back>
                <table val="1">
                    <caption>Top 5 Largest Gains</caption>
                    <tr>
                        <th scope="col">Ticker</th>
                        <th>Purchase Price(%)</th>
                        <th>Current Price($)</th>
                        <th>Price Change($)</th>
                        <th>Gain/Loss(%)</th>
                        <th>Order</th>
                    </tr>
                </table>
                <table val="2">
                    <caption>Top 5 Largest Losses</caption>
                    <tr>
                        <th scope="col">Ticker</th>
                        <th>Purchase Price(%)</th>
                        <th>Current Price($)</th>
                        <th>Price Change($)</th>
                        <th>Gain/Loss(%)</th>
                        <th>Order</th>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Home;