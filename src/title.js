import React from "react";

function Title(){

    return(
        <div id='add-back'>
           <div id="add-container">
                <div id="add-content">
                    <h2>위치 이름 설정</h2>
                    <div id="mini-line"></div>            
                    <p>추가할 위치의 이름을 입력해주세요</p>
                    <input id="add-input" type="text" name="location"></input>
                    <button onClick={()=>{}}>위치 추가</button>
                </div>  
            </div> 
        </div>
    )
}

export default Title;