/* eslint-disable no-cond-assign */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Notification(props){
    const[menuOpen, setMenuOpen] = useState(true);

    let key = props.key;

    let notices =[
        {time: '00:00:00', msg:'‘User’이(가) 위험 지정 구역 A에 접근했습니다.', case: 'access'},
        {time: '11:11:11', msg:'‘User’의 지팡이가 떨어졌습니다.', case: 'fall'},
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
        console.log(key);
        return result;
    };

    useEffect(()=>{
        notice_list();
    });

    return (
        <div id={menuOpen ? 'menu' : 'menu-close'}>
            <div id="menu-section">
            <div id="setting-pin">
            {/* 모드 전환 버튼 */}
            <div className="switch-button">
                <Link to='/'>
                <button id='pin-off-color'>
                    <img src="img/pin_gray.png" alt='pin-img'/>
                </button>
                </Link>
                <Link to='/notice'>
                <button id='notice-on-color'>
                      <img src="img/notification.png" alt='pin-img'/>
                </button>
                </Link>
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
            </div>
            <div id='menu-mini-button' onClick={()=>{setMenuOpen(menuOpen => !menuOpen)}}>
                <img src="img/mini-button.png" alt="mini-button" />
            </div>
        </div>
    )
}

export default Notification;