/* eslint-disable no-cond-assign */
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Pin(props){
    const[menuOpen, setMenuOpen] = useState(true);

    fetch('/').then((res)=>res.json()).then((data)=>console.log("뽕: "+data));

    const pins =[
        {title:'GSM'},
        {title:'광주소프트웨어마이스터고등학교'},
        {title:'송정공원역'},
        {title:'광주공항'},
        {title:'광주소프트웨어마이스터고등학교'},
        {title:'뽀뽀통닭'}
    ]
    const pin_list = ()=>{
        const result = [];
        for(let i = 0 ; i<pins.length ; i++){
            result.push(
            <div key={i}>
               {pins[i].title} 
            </div>
            );  
        }
        console.log("this is pin")
        return result;
    }; 

    return (
        <div id={menuOpen ? 'menu' : 'menu-close'}>
            <div id='menu-section'>
            <div id="setting-pin">
            {/* 위험구역 모드 */}
                    {/* 모드 전환 버튼 */}
                    <div className="switch-button">
                        <Link to='/'>
                            <button id='pin-on-color'>
                                <img id="pin" src="img/pin.png" alt='pin-img'/>
                            </button>
                        </Link>
                        <Link to='notice'>
                        <button id='notice-off-color'>
                            <img id="notification" src="img/notification_gray.png" alt='pin-img'/>
                        </button>
                        </Link>
                    </div> 
                    <div id="line"/>
                    {/* 목록 */}
                    <div className="pin-list">
                        <h2>위험구역 목록</h2>
                        <div id="pin-list-section">
                            {pin_list()}
                        </div>
                    </div>
                    <div className="pin-set-button">
                        <Link to='danger'>
                            <button id="add-pin">위치 추가</button>
                        </Link>
                        <button id='delete-pin' onClick={()=>{}}>위치 삭제</button>
                    </div>  
                </div>
                </div>
                <div id='menu-mini-button' onClick={()=>{setMenuOpen(menuOpen => !menuOpen)}}>
                <img src="img/mini-button.png" alt="mini-button" />
                </div>
        </div>
    )
}

export default Pin;