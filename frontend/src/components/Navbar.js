import React, {Component} from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import "../css/navbar.css"
import StockOrderHistory from '../Pages/StockOrderHistory'
import SpecificStockHistory from '../Pages/SpecificStockHistory'
import OtherAssetHistory from '../Pages/OtherAssetHistory'
import Home from '../Pages/Home'
import SignIn from '../SigninPage';

const NavBar = () => {
    
    return (
        <>
            <nav className="navbar">

                <h1>OneStock</h1>
                <div className="links">
                <a href="/UserPage">Home</a>
                <a href="/SpecificStockHistory">Specific Stock History</a>
                <a href="/StockOrderHistory">Stock Order History</a>
                <a href="/OtherAssetHistory">Other Asset History</a>
                <a href="/SignInPage">Log Out</a>   
                </div>
            </nav>
            
            <Router> 
                <Routes>
                    <Route path="/UserPage" element = {<Home />} />

                    <Route path="/StockOrderHistory" element = {<StockOrderHistory />} />

                    <Route path="/SpecificStockHistory" element = {<SpecificStockHistory />} />

                    <Route path="/OtherAssetHistory" element = {<OtherAssetHistory />} />
            
                    <Route path="/SignInPage" element = {<SignIn />} />
            
                </Routes>
        
            </Router>
        
        </>

      );
}
 
export default NavBar;