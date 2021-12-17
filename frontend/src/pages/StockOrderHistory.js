//import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import "../css/StockOrderHistory.css"
import React, { useEffect,useState } from 'react';
import axiosInstance from '../axios';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
const StockOrderHistory = () => {
    
    const [entrys,setentrys] = useState(null);
    
    
    // useEffect(() => {
    //     // GET request using fetch inside useEffect React hook
    //     fetch('http://localhost:8000/api/StockOrdersGetPost/?format=json')
    //         .then(response => response.json())
    //         .then(data => setentrys(data));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
        
    useEffect(() => {
        axiosInstance
        .get('StockOrdersGetPost/')
            .then(response => {
                setentrys(response.data)
            })
            .catch((err) => {
                console.log(err)
                alert("permission denied");
            }
           

            );
   
    }, []);
   
    
        
    return (
        <div className="content">
            <NavBar />
            <h2>Stock Order History</h2>
            
            <div className="StockOrderHistory">
                <div className="buttonsContainer">
                   
                    <ButtonGroup 
                        style={{
                            fontSize:12
                            
                        }}
                        variant = "contained" 
                        color = "primary">
                        <Button>Import From PC</Button>
                        <Button 
                            href="/CreateOrder" 
                            >Create Custom Order
                        </Button>

                        <Button  href="/ModifyOrder" >Modify Order By ID</Button>
                        <Button  href="/AddBrokerage" >Add Brokerage</Button>
                        <Button  href="/AddAccount" >Add Account</Button>
                    </ButtonGroup>
                  
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