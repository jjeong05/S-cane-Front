/* eslint-disable no-cond-assign */
import React, { useEffect } from "react";

function Menu(){
    
    let mode = 'notification';
    let code ='';
    const pins =[
        {title:'GSM'},
        {title:'A'},
        {title:'B'}
    ]

    let name = '지다민';

    const pin_list = ()=>{
        const result = [];
        for(let i = 0 ; i<pins.length ; i++){
            result.push(
            <div key={i}>
               {pins[i].title} 
            </div>
            );  
        }
        return result;
    };

    
    let notices =[
        {time: '00:00:00', msg:'‘지다민’이(가) 위험 지정 구역 A에 접근했습니다.'},
        {time: '11:11:11', msg:'‘지다민’의 지팡이가 떨어졌습니다.', case: 'fall'},
    ]
    
    const notice_list= ()=>{
        const result=[];
        for(let i = 0 ; i<notices.length ; i++){
            result.push(
            <div id = 'msg-section' key={i}>
               <h3>{notices[i].time}</h3>
               <p>{notices[i].msg}</p>
            </div>
            );  
        }
        return result;
    };


    if(mode = 'setting-pin'){
        code = 
        <div id={mode}>
            {/* 위험구역 모드 */}
                    {/* 모드 전환 버튼 */}
                    <div className="switch-button">
                        <button id='on-color'>
                            <img src="img/pin.png" alt='pin-img'/>
                        </button>
                        <button id='off-color'>
                            <img src="img/notification_gray.png" alt='pin-img'/>
                        </button>
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
                        <button id="add-pin">위치 추가</button>
                        <button id='delete-pin'>위치 삭제</button>
                    </div>
                    
        </div>
    }   
    if(mode = 'notification'){
        code=
        <div id={mode}>
            {/* 알림창 */}
                {/* 모드 전환 버튼 */}
                <div className="switch-button">
                        <button id='off-color'>
                            <img src="img/pin_gray.png" alt='pin-img'/>
                        </button>
                        <button id='on-color'>
                            <img src="img/notification.png" alt='pin-img'/>
                        </button>
                </div> 
                <div id="line"/>
                {/* 목록 */}
                <div className="notification-list" >
                <h2>알림 내역</h2>
                    <div id="notification-list-inner">
                    {notice_list()}
                    </div>
                </div>
                

        </div>
    }
    else{
        console.log('잘못된 요청')
    }
    
    
    return (
        <div id="menu">

            <section id="menu-section">
                <div id={mode}>
                    {code}
                </div>
            </section>
            <div id="menu-mini-button">
                <img alt='mini-button' src="img/mini-button.png"/>
            </div>
        </div>
    )
}

export default Menu;