import './css/App.css';
import NavBar from './components/Navbar';
import SignIn from './SigninPage';
import React, {Component} from 'react';

function App() {
  const title = "OneStock";
  const likes = 50;
  const link = "www.google.com";

  return (
    <div className="App">
      <NavBar />
      <div className = "content">
        <h1>{title}</h1>
        <SignIn/>

      
      </div>
      
    </div>
  );
}

export default App;
