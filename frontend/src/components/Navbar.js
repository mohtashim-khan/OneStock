import React, {Component} from 'react';

import "../css/navbar.css"

const NavBar = () => {
    
    return (

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



      );
}
 
export default NavBar;