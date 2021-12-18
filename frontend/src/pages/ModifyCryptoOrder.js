import React, {useEffect, Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
const ModifyCryptoOrder = () => {

    const [orderID, setOrderID] = useState(null);
    const [valuation, setValuation] = useState(null);
    const [type, setType] = useState(null);
    const [price, setPrice] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [cryptos, setCryptos] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
       
        axiosInstance
        .get('CryptoGetPost/')
            .then(response => {
                setCryptos(response.data)
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
            valuation,
            type,
            price,
            quantity
        }

        axiosInstance
        .patch('CrytpoGetPutPatchDelete/'+OrderInfo.orderID+'/', {
            valuation: OrderInfo.valuation,
            name: OrderInfo.type,
            purchasePrice: OrderInfo.price,
            quantity: OrderInfo.quantity,
        
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
                <h2>Modify Crypto Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>OrderID: </label>
                    <select
                        required
                        value={orderID}
                        onChange={(e) => setOrderID(e.target.value)} >
                        {cryptos&&
                            cryptos.map((crypto) => (
                                <option value={crypto.id}>{crypto.id}</option>    
                        ))
                        }
                        {!cryptos ?(
                            <option value="null">No existsing Cryptos, Please Add Crypto First</option>  
                            ):
                            (<option value="null">Please Select an Crypto Id</option>
                            )
                        }
                    </select>    
                        
                    <label>Modify Valuation: </label>
                    <input type="number"
                        required
                        value={valuation}
                        onChange={(e) => setValuation(e.target.value)} />

                    <label>Type: </label>
                    <input type="text"
                        required
                        value={type}
                        onChange={(e) => setType(e.target.value)} />

                    <label>Modify Purchse Price: </label>
                    <input type="number"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />

                    <label>Quantity: </label>
                    <input type="number"
                        required
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)} />

                    <button>Modify Crypto Order</button>
                </form>

            </div>

        </div>


    );
}

export default ModifyCryptoOrder;