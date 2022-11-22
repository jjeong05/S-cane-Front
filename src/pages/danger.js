import './css/App.css';
import './css/warning.css'
import './css/notice.css'
import Header from './components/header';
import Map from "./components/map";
import React, {useEffect, useState} from 'react';
import { BrowserRouter, BrowserRouter as Router, Link, Route } from "react-router-dom";
import Pin from './components/pin';
import Notification from './components/notice';





function Danger() {
  return (      
    <div className="Danger">
    <BrowserRouter>
    
        <Header/>
        <Map/>

    </BrowserRouter>
    </div>
  );
}

export default Danger;
