import './css/App.css';
import './css/warning.css'
import './css/notice.css'
import Login from "./components/login";
import Header from './components/header';
import Map from "./components/map";
import React, {useEffect, useState} from 'react';
import { BrowserRouter, BrowserRouter as Router, Link, Route } from "react-router-dom";
import Pin from './components/pin';
import Notification from './components/notice';
import Danger from './pages/create_pin';





function App() {


  // useEffect(()=>{
  //   if(shock){
  //   setShock(true);
  //   console.log("충격감지");
  //   shock(false);
  //   }
  // },[])
  

  return (      
    <div className="App">
    <BrowserRouter>
    
        <Header/>
        <Map>
          <Router>
            <Route exact path='/' component={Pin}></Route>
            <Route exact path='notice' component={Notification}></Route>
            <Route exact path='danger' component={Danger}></Route>
            
          </Router>
        </Map>

    </BrowserRouter>
    </div>
  );
}

export default App;
