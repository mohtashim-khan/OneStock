import './css/App.css';
import SignIn from './pages/SigninPage';
import SignUp from './pages/SignUpPage';
import AddBrokerage from './pages/AddBrokerage';
import React, {Component} from 'react';
import CreateOrder from './pages/CreateOrder';
import ModifyOrder from './pages/ModifyOrder';

function App() {
  

  return (
    <div className="App">
      <div className = "content">
        
        <ModifyOrder/>

      
      </div>
      
    </div>
  );
}

export default App;
