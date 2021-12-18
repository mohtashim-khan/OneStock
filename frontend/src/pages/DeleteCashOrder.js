import React, { useEffect, Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
const DeleteCashOrder = () => {

    const [orderID, setOrderID] = useState(null);
    const [valuation, setValuation] = useState(null);
    const [bank, setBank] = useState(null);
    const [currencyType, setCurrencyType] = useState(null);
    const [cashs, setCashs] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
       
        axiosInstance
        .get('CashGetPost/')
            .then(response => {
                setCashs(response.data)
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
           
        }

        axiosInstance
        .delete('CashGetPutPatchDelete/'+OrderInfo.orderID+'/', {
         
    
        })
        .catch((err) => {
            alert("No existing asset, please create the asset first");
        }
        );
        navigate('/OtherAssetHistory');
    }

    return (

        <div className="content">
            <NavBar />
            <div className="CreateOrder">
                <h2>Delete Cash Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>OrderID: </label>
                    <select
                        required
                        value={orderID}
                        onChange={(e) => setOrderID(e.target.value)} >
                        {cashs&&
                            cashs.map((cash) => (
                                <option value={cash.id}>{cash.id}</option>    
                        ))
                        }
                        {!cashs ?(
                            <option value="null">No existsing Cash Orders, Please Add Cash First</option>  
                            ):
                            (<option value="null">Please Select an Cash Id</option>
                            )
                        }
                    </select>

                   

                    <button>Delete Cash Order</button>
                </form>

            </div>

        </div>


    );
}

export default DeleteCashOrder;