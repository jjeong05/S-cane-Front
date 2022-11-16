/* eslint-disable no-cond-assign */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Pin(props){

    const pins =[
        {title:'GSM'},
        {title:'A'},
        {title:'B'},
        {title:'B'},
        {title:'c'}
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
        <div id="menu">
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
                        <Link to='/notice'>
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
                            {()=>pin_list()}
                        </div>
                    </div>
                    <div className="pin-set-button">
                        <button id="add-pin">위치 추가</button>
                        <button id='delete-pin'>위치 삭제</button>
                    </div>  
                </div>
                </div>
                <div id='menu-mini-button'>
                <img src="img/mini-button.png" alt="mini-button"/>
                </div>
        </div>
    )
}

export default Pin;