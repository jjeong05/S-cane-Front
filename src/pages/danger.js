import './css/App.css';
import './css/warning.css'
import './css/notice.css'
import Header from './components/header';
import Map from "./components/map";
import React, {useEffect, useState} from 'react';
import { BrowserRouter, BrowserRouter as Router, Link, Route } from "react-router-dom";


function Danger() {
  return (      
    <div className="Danger">
        <Header/>
        <Map/>
    </div>
  );
}

export default Danger;
