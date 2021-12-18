import React, {useEffect, Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
const DeleteCryptoOrder = () => {

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
           
        }

        axiosInstance
        .delete('CrytpoGetPutPatchDelete/'+OrderInfo.orderID+'/', {
          
        
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
                <h2>Delete Crypto Order</h2>
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
                        
                   
                    <button>Delete Crypto Order</button>
                </form>

            </div>

        </div>


    );
}

export default DeleteCryptoOrder;