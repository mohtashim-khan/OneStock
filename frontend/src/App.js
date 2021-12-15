import './css/App.css';
import SignIn from './pages/SigninPage';
import SignUp from './pages/SignUpPage';
import AddBrokerage from './pages/AddBrokerage';
import React, {Component} from 'react';
import CreateOrder from './pages/CreateOrder';
import ModifyOrder from './pages/ModifyOrder';
import CreateCryptoOrder from './pages/CreateCryptoOrder';
import ModifyCryptoOrder from './pages/ModifyCryptoOrder';
import CreateCommoditiesOrder from './pages/CreateCommoditiesOrder';
import ModifyCommoditiesOrder from './pages/ModifyCommoditiesOrder';
import CreateCashOrder from './pages/CreateCashOrder';
import ModifyCashOrder from './pages/ModifyCashOrder';
import CreateRealEstateOrder from './pages/CreateRealEstateOrder';
import ModifyRealEstateOrder from './pages/ModifyRealEstateOrder';
import ModifyBondOrder from './pages/ModifyBondOrder';
import CreateBondOrder from './pages/CreateBondOrder';
import StockOrderHistory from './pages/StockOrderHistory';
import SpecificStockHistory from './pages/SpecificStockHistory'
import OtherAssetHistory from './pages/OtherAssetHistory'
import Home from './pages/Home'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
//npm update might be needed
function App() {
  

  return (
    <div className="App">
      <div className = "content">
        
      <Router> 
        <Routes>
          <Route path="/Home" element = {<Home />} />
          <Route path="/AddBrokerage" element = {<AddBrokerage />} /> 

          <Route path="/CreateOrder" element = {<CreateOrder />} />
          <Route path="/ModifyOrder" element = {<ModifyOrder />} />

          <Route path="/CreateCryptoOrder" element = {<CreateCryptoOrder />} />
          <Route path="/ModifyCryptoOrder" element = {<ModifyCryptoOrder />} />

          <Route path="/CreateCommoditiesOrder" element = {<CreateCommoditiesOrder />} />
          <Route path="/ModifyCommoditiesOrder" element = {<ModifyCommoditiesOrder />} />
          
          <Route path="/CreateCashOrder" element = {<CreateCashOrder />} />
          <Route path="/ModifyCashOrder" element = {<ModifyCashOrder />} />
          
          <Route path="/CreateRealEstateOrder" element = {<CreateRealEstateOrder />} />
          <Route path="/ModifyRealEstateOrder" element = {<ModifyRealEstateOrder />} />
          
          <Route path="/ModifyBondOrder" element = {<ModifyBondOrder />} />
          <Route path="/CreateBondOrder" element = {<CreateBondOrder />} />
   
          <Route path="/StockOrderHistory" element = {<StockOrderHistory />} /> 

          <Route path="/SpecificStockHistory" element = {<SpecificStockHistory />} />

          <Route path="/OtherAssetHistory" element = {<OtherAssetHistory />} />
  
          <Route path="/SignInPage" element = {<SignIn />} />
          <Route path="/SignUpPage" element = {<SignUp />} />
            
        </Routes>
        
      </Router>

      
      </div>
      
    </div>
  );
}

export default App;
