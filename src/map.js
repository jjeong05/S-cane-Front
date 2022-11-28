/* global kakao */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu1 from "./pin";
import Menu2 from "./notice";
import Menu3 from "./danger";
// import Title from "./title";
import { markerdata } from "./markerData";
const { kakao } = window;



function Title(){
    

    return(
        <div id='add-back'>
           <div id="add-container">
                <div id="add-content">
                    <h2>위치 이름 설정</h2>
                    <div id="mini-line"></div>            
                    <p>추가할 위치의 이름을 입력해주세요</p>
                    <input id="add-input" type="text" name="location"></input>
                    <button onClick={()=>{


                    }}>위치 추가</button>
                </div>  
            </div> 
        </div>
    )
}

function Map(){
    const location = useLocation();
    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () =>{
        setModalOpen(true);
    }

    useEffect(()=>{
        const container = document.getElementById('map');
        const options ={
            center: new kakao.maps.LatLng(35.1427227828933,126.80069558224491),
            level:3
        };
        const map = new kakao.maps.Map(container, options); /* 맵 생성 */ 
        markerdata.forEach((data) => {
            new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(data.lat, data.lng),
                title: data.title,
            });
        });
        if(location.pathname==="/danger"){
            kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
                var lat = mouseEvent.latLng.getLat();
                var lng = mouseEvent.latLng.getLng();
                console.log(lat, lng);
                console.log("뿡")
            });
        }
    });
    if(location.pathname==="/"){
        return (
                <div id='map' style={{width:'100%', height:'980px'}}>
                    <Menu1/>
                </div>    
        );
    }
    else if(location.pathname==="/notice"){
        return (
            <div id='map' style={{width:'100%', height:'980px'}}>
                <Menu2/>
            </div>    
        );
    }
    if(location.pathname==="/danger"){
        return(
            <div id='map' onClick={()=>{showModal();}} style={{width:'100%', height:'980px'}}>
                <Menu3/>
                {modalOpen && <Title/>}
            </div>  
            
        );
    }
}

export default Map; 