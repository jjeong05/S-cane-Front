import './css/App.css';
import './css/warning.css'
import './css/notice.css'
import './css/danger.css'
import './css/title.css';
import Login from "./login";
import Header from './header';
import Map from "./map";
import React, {useEffect, useState} from 'react';
import { BrowserRouter, BrowserRouter as Router, Link, Route } from "react-router-dom";
import Pin from './pin';
import Notification from './notice';
import Warning from './warning';
import Danger from './danger';
import Title from './title';


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
            <Route exact path='danger' component={Danger}></Route>
            <Route exact path='danger' component={Title}></Route>
          </Router>
        </Map>

        {false && <Warning setShock={setShock}/>}

    </BrowserRouter>
    </div>
  );
}

export default App;
