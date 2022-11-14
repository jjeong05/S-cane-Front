import React, { useEffect } from "react";
import { Link } from "react-router-dom";


function Warning(props) {
    return(
        <div id='warn-back'>
           <div id="warning-container">
            <div id="warning-content">
                <img src="img/Error outline.png" alt="warn_icon"/>
                <h2>지팡이 추락</h2>
                {/* <div id="mini-line"></div>             */}
                <p>지팡이가 바닥에 떨어졌습니다.</p>
                <button>위치 확인</button>  
            </div>  
        </div> 
        </div>
        
    )
}

export default Warning;