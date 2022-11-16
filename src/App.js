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
  const [shock, setShock] = useState(false);
  // const [warnAnimation, setWarnAnimation] = useState("warn-alert");

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
            <Route exact path='/' component={Pin} key='1'></Route>
            <Route exact path='notice' component={Notification}></Route>
          </Router>
        </Map>

        {false && <Warning setShock={setShock}/>}

    </BrowserRouter>
    </div>
  );
}

export default App;
