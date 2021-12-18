import React, {useEffect, Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
const DeleteRealEstateOrder = () => {

    const [orderID, setOrderID] = useState(null);
    const [valuation, setValuation] = useState(null);
    const [type, setType] = useState(null);
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);
    const navigate = useNavigate();
    const [reales, setReales] = useState(null);
    useEffect(() => {
       
        axiosInstance
        .get('RealEstateGetPost/')
            .then(response => {
                setReales(response.data)
            })
            .catch((err) => {
                console.log(err)
                alert("permission denied");
            }
            

            );
        
      
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();
        const OrderInfo = {
            orderID,
            
           
        }

        axiosInstance
        .delete('RealEstatePutPatchDelete/'+OrderInfo.orderID+'/', {
            
        
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
                <h2>Delete Real Estate Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>OrderID: </label>
                    <select
                        required
                        value={orderID}
                        onChange={(e) => setOrderID(e.target.value)} >
                        {reales&&
                            reales.map((real) => (
                                <option value={real.id}>{real.id}</option>    
                        ))
                        }
                        {!reales ?(
                            <option value="null">No existsing reales, Please Add Crypto First</option>  
                            ):
                            (<option value="null">Please Select an Crypto Id</option>
                            )
                        }
                    </select> 
                    
                    <button>Delete Real Estate Order</button>
                </form>

            </div>

        </div>


    );
}

export default DeleteRealEstateOrder;