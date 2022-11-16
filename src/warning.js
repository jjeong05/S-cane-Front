import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Warning(props) {

    useEffect(()=>{
    }, []);

    const tracking_location = () =>{
        console.log(props.setShock);
        return props.setShock(false); 
    } 

    console.log(props)
    return(
        <div id='warn-back'>
           <div id="warning-container">
            <div id="warning-content">
                <img src={props.msg[0].img} alt="warn_icon"/>
                <h2>{props.msg[0].title}</h2>
                {/* <div id="mini-line"></div>             */}
                <p>{props.msg[0].script}</p>
                <button onClick={()=>tracking_location()}>위치 확인</button>  
            </div>  
        </div> 
        </div>
    )
}

export default Warning;