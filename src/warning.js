import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Warning(props) {
    
    
    const tracking_location = () =>{
        props.setShock(false); 
    }
    useEffect(()=>{
    }, []);
    return(
        <div id='warn-back'>
           <div id="warning-container">
            <div id="warning-content">
                <img src="img/Error outline.png" alt="warn_icon"/>
                <h2>지팡이 충격 감지</h2>
                {/* <div id="mini-line"></div>             */}
                <p>지팡이에 큰 충격이 감지되었습니다.</p>
                <button onClick={()=>tracking_location()}>위치 확인</button>  
            </div>  
        </div> 
        </div>
        
    )
}

export default Warning;