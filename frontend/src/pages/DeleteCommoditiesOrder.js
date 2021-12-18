import React, {useEffect, Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
const DeleteCommoditiesOrder = () => {

    const [orderID, setOrderID] = useState(null);
    const [valuation, setValuation] = useState(null);
    const [type, setType] = useState(null);
    const [price, setPrice] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const navigate = useNavigate();
    const [commods, setCommods] = useState(null);

    useEffect(() => {
       
        axiosInstance
        .get('CommodotiesGetPost/')
            .then(response => {
                setCommods(response.data)
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
            type
        }

        axiosInstance
        .delete('CommoditiesGetPutPatchDelete/'+OrderInfo.orderID+'/', {
        
        
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
                <h2>Delete Commodities Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>OrderID: </label>
                    <select 
                        required
                        value={orderID}
                        onChange={(e) => setOrderID(e.target.value)} >
                        {commods&&
                            commods.map((commod) => (
                                <option value={commod.id}>{commod.id}</option>    
                        ))
                        }
                        {!commods ?(
                            <option value="null">No existsing Commodoties, Please Add Commodities First</option>  
                            ):
                            (<option value="null">Please Select an Commodoties Id</option>
                            )
                        }
                    </select>
         
                    <button>Delete Commodities Order</button>
                </form>

            </div>

        </div>


    );
}

export default DeleteCommoditiesOrder;