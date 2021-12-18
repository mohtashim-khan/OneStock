import React, {useEffect, Component } from 'react';
import { useState } from "react"
import NavBar from '../components/Navbar';
import "../css/CreateOrder.css"
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
const DeleteBondOrder = () => {

    const [orderID, setOrderID] = useState(null);
    
    const [bonds, setBonds] = useState(null);

    const navigate = useNavigate();


    useEffect(() => {
       
        axiosInstance
        .get('BondsGetPost/')
            .then(response => {
                setBonds(response.data)
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
        .delete('BondsGetPutPatchDelete/'+OrderInfo.orderID+'/', {
          
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
                <h2>Delete Bond Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>OrderID: </label>
                    <select 
                        required
                        value={orderID}
                        onChange={(e) => setOrderID(e.target.value)} >
                        {bonds&&
                            bonds.map((bond) => (
                                <option value={bond.id}>{bond.id}</option>    
                        ))
                        }
                        {!bonds ?(
                            <option value="null">No existsing Bonds, Please Add Bonds First</option>  
                            ):
                            (<option value="null">Please Select an Bond</option>
                            )
                        }
                    </select>


                    <button>Delete Bond Order</button>
                </form>

            </div>

        </div>


    );
}

export default DeleteBondOrder;