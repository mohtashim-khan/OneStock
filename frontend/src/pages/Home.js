import React from 'react'
import NavBar from '../components/Navbar';
import '../css/Home.css';
import React, { useEffect, useState } from 'react';

const [largestValues, setLargestValues] = useState(null);
const [smallestValues, setSmallestValues] = useState(null);


useEffect(() => {
    axiosInstance
        .get('LargestGainsSpecificStockHistory/')
        .then(response => {
            setLargestValues(response.data);
        })
        .catch((err) => {
            alert("NOT LOGGED IN");
        }
        );


    axiosInstance
        .get('SmallestGainsSpecificStockHistory/')
        .then(response => {
            setSmallestValues(response.data);
        })
        .catch((err) => {
        }
        );

}, []);



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
                        <th>Industry</th>
                        <th>Exchange</th>
                        <th>Total Amount Invested($)</th>
                        <th>Average Value per Share($)</th>
                        <th>Shares Owned Currently</th>
                        <th>Net Profit($)</th>
                    </tr>
                    {largestValues &&
                        largestValues.map((value) => (
                            <tr>
                                <th>{value.ticker}</th>
                                <th>{value.industry}</th>
                                <th>{value.exchange}</th>
                                <th>{value.amountInvested}</th>
                                <th>{value.currentHoldingAvgValue}</th>
                                <th>{value.sharesOwned}</th>
                                <th>{value.netProfit}</th>
                            </tr>
                        ))
                    }
                </table>
                <table val="2">
                    <caption>Top 5 Smallest Gains</caption>
                    <tr>
                        <th scope="col">Ticker</th>
                        <th>Industry</th>
                        <th>Exchange</th>
                        <th>Total Amount Invested($)</th>
                        <th>Average Value per Share($)</th>
                        <th>Shares Owned Currently</th>
                        <th>Net Profit($)</th>
                    </tr>
                    {smallestValues &&
                        smallestValues.map((value) => (
                            <tr>
                                <th>{value.ticker}</th>
                                <th>{value.industry}</th>
                                <th>{value.exchange}</th>
                                <th>{value.amountInvested}</th>
                                <th>{value.currentHoldingAvgValue}</th>
                                <th>{value.sharesOwned}</th>
                                <th>{value.netProfit}</th>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </>
    );
}

export default Home;