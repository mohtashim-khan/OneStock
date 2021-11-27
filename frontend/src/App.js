import './css/App.css';
import NavBar from './components/Navbar';
import SignIn from './pages/SigninPage';
import SignUp from './pages/SignUpPage';
import React, {Component} from 'react';

function App() {
  

  return (
    <div className="App">
      <div className = "content">
        
        <SignUp/>

      
      </div>
      
    </div>
  );
}

export default App;
