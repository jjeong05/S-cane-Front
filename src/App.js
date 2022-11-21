import './css/App.css';
import './css/warning.css'
import './css/notice.css'
import Login from "./login";
import Header from './header';
import Map from "./map";
import React, {useEffect, useState} from 'react';
import { BrowserRouter, BrowserRouter as Router, Link, Route } from "react-router-dom";
import Pin from './pin';
import Notification from './notice';
import Warning from './warning';





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
          </Router>
        </Map>

    </BrowserRouter>
    </div>
  );
}

export default App;
