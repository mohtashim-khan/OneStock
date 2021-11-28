import './css/App.css';
import SignIn from './pages/SigninPage';
import SignUp from './pages/SignUpPage';
import AddBrokerage from './pages/AddBrokerage';
import React, {Component} from 'react';
import CreateOrder from './pages/CreateOrder';
import ModifyOrder from './pages/ModifyOrder';
import CreateCryptoOrder from './pages/CreateCryptoOrder';
import CreateCommoditiesOrder from './pages/CreateCommoditiesOrder';
import ModifyCommoditiesOrder from './pages/ModifyCommoditiesOrder';
import CreateCashOrder from './pages/CreateCashOrder';
import ModifyCashOrder from './pages/ModifyCashOrder';
import CreateRealEstateOrder from './pages/CreateRealEstateOrder';
import ModifyRealEstateOrder from './pages/ModifyRealEstateOrder';
import ModifyBondOrder from './pages/ModifyBondOrder';
import CreateBondOrder from './pages/CreateBondOrder';

function App() {
  

  return (
    <div className="App">
      <div className = "content">
        
        <CreateBondOrder/>

      
      </div>
      
    </div>
  );
}

export default App;
