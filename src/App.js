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

const msgList = [
  {title: '지팡이 충격 감지', script: '지팡이에 큰 충격이 감지되었습니다.', img:'img/Error outline.png'},
  {title: '위험 지정 구역 접근', script: '지팡이 이용자가 지정된 위험 구역에 접근했습니다.', img:'img/Not_Ins.png' },
]




function App() {

  const [shock, setShock] = useState(false);
  console.log('으어'+setShock)

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

        {setShock && <Warning msg={msgList} setShock={setShock}/>}

    </BrowserRouter>
    </div>
  );
}

export default App;
