/* eslint-disable no-cond-assign */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Notification(props){
    const[menuOpen, setMenuOpen] = useState(true);

    let key = props.key;

    let notices =[
        
        {time: '11/29    오후 7:13', msg:'‘User’의 지팡이에 큰 충격이 감지되었습니다.', case: 'fall'},
        {time: '11/27    오후 4:03', msg:'‘User’의 지팡이에 큰 충격이 감지되었습니다.', case: 'fall'},
        {time: '11/6     오전 9:00', msg:'‘User’이(가) 위험 지정 구역 송정공원역에 접근했습니다.', case: 'access'},
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