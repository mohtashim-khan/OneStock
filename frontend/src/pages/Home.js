import React from 'react'
import NavBar from '../components/Navbar';
import '../css/Home.css';
import { useEffect, useState } from 'react';
import axiosInstance from '../axios';
const Home = () => {

    const [largestValues, setLargestValues] = useState(null);
    const [smallestValues, setSmallestValues] = useState(null);
    const [totalStockHistory, setTotalStockHistory] = useState(null);


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

        axiosInstance
            .get('TotalStockOrderHistoryGetPost/')
            .then(response => {
                setTotalStockHistory(response.data);
            })
            .catch((err) => {
            }
            );


    }, []);



    return (
        <>
            <NavBar />
            <div9>
                <h2>Welcome Home</h2>
                <p2> Overall Portfolio Performance: </p2>
                {totalStockHistory &&
                    totalStockHistory.map((value) => (
                        <net_back>% {((parseFloat((totalStockHistory[0].netProfit) + parseFloat(totalStockHistory[0].totalInvested)) / (parseFloat(totalStockHistory[0].totalInvested)))*100-100).toFixed(2)}</net_back>

                    ))
                }
                <p3>Overall Net Profit:</p3>
                {totalStockHistory &&
                    totalStockHistory.map((value) => (
                        <over_back>$ {totalStockHistory[0].netProfit}</over_back>

                    ))
                }
                <group id="hometables">
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
                </group>
            </div9>
        </>
    );
}

export default Home;