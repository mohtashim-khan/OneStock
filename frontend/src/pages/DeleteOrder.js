import React, { useEffect,Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
const DeleteOrder = () => {

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
        .delete('StockOrdersGetPutPatchDelete/'+OrderInfo.orderID+'/', {
        

        })
        .catch((err) => {
            alert("No existing Order, please add the Order first");
        }
        );
        navigate('/StockOrderHistory');
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
                        
                        {orders&&
                            orders.map((order) => (
                                <option value={order.id}>{order.id}</option>    
                        ))
                        }
                        {!orders ?(
                            <option value="null">No existsing Orders, Please Add Orders First</option>  
                            ):
                            (<option value="null">Please Select an OrderID</option>
                            )
                        }
                        
                    </select>
                    

                    <button>Delete Order</button>
                </form>


            </div>

        </div>


    );
}

export default DeleteOrder;