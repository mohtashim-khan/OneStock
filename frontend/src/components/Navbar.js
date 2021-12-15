import React, {Component} from 'react';


import "../css/navbar.css"
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        axiosInstance
        .post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		navigate('/SignIn');
    }
    
    return (
        <>
            <nav className="navbar">

                <h1>OneStock</h1>
                <div className="links">
                <a href="/Home">Home</a>
                <a href="/SpecificStockHistory">Specific Stock History</a>
                <a href="/StockOrderHistory">Stock Order History</a>
                <a href="/OtherAssetHistory">Other Asset History</a>
                <button onClick = {handleLogout}>Log Out</button>
                </div>
            </nav>
            
        
        </>

      );
}
 
export default NavBar;