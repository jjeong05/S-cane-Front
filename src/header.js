import React from "react";
import {useState} from "react";
import Warning
 from "./warning";

 const msgList = [
    {title: '지팡이 충격 감지', script: '지팡이에 큰 충격이 감지되었습니다.', img:'img/Error outline.png'},
    {title: '위험 지정 구역 접근', script: '지팡이 이용자가 지정된 위험 구역에 접근했습니다.', img:'img/Not_Ins.png' },
  ]
  
 
export default function Header(props){

    const [modalOpen, setModalOpen]= useState(false);

    const showModal = () =>{
        setModalOpen(true);
    };

    return (
        <header id="header">
            <h1><img id='header-logo'alt='logo' src='img/S-cane.png' onClick={()=>{showModal()}}/></h1>
            {modalOpen && <Warning msg={msgList} setModalOpen={setModalOpen}/>}
        </header>
        
    );
}
