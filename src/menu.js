import React, {useEffect} from "react";

function Menu(props){
    let mode = 'setting-pin';
    let code ='';
    const pins =[
        {title:'GSM'},
        {title:'A'}
    ]
    const pin_list = () =>{
        const result = [];
        for(let i = 0 ; pins.length < i++ ; i++){
            result.push(<div key={i}>
               {pins[i].title} 
            </div>)
        console.log(pins[i].title);    
        
        }
        
        return result
    };

    // eslint-disable-next-line no-cond-assign
    if(mode = 'setting-pin'){
        code = 
        <div>
            {/* 위험구역 모드 */}
                    {/* 모드 전환 버튼 */}
                    <button>
                        <img src="img/pin.png" alt='pin-img'/>
                    </button>
                    <button>
                        <img src="img/notification_gray.png" alt='pin-img'/>
                    </button>
                    {/* 목록 */}
                    <h2>위험구역 목록</h2>
                       {pin_list} 
        </div>
    }   
    else{
        console.log('else');
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