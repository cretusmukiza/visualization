import React from 'react';
import Routes from'./routes.js';
import './App.css';
import {NavLink} from 'react-router-dom';
import Nav from '../src/component/nav/nav';


function App() {
  return (
    <div className="app">  
        <Routes />
    </div>
    
    
  );
}

export default App;
