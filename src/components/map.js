/* global kakao */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu1 from "./pin";
import Hidden from "./hidden";
import Menu2 from "./notice";
import Menu3 from "../danger";
// import Title from "./title";
import { markerdata } from "../markerData";
const { kakao } = window;

var lat;
var lng;

function Title(){

    return(
        <div id='add-back'>
           <div id="add-container">
                <div id="add-content">
                    <h2>위치 이름 설정</h2>
                    <div id="mini-line"></div>            
                    <p>추가할 위치의 이름을 입력해주세요</p>
                       <input id="add-input" type="text" name="location" autoComplete="off"></input> 
                       <Link to="pin">
                       <button id="add-button">위치 추가</button>
                       </Link>
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

    const [Lat, setLat] = useState(null);
    const [Lng, setLng] = useState(null);

    function onGeoOk(position){
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
    }

    function onGeoError(){
        alert("Can't find you");
    }

    const option = {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: Infinity,
    };

    navigator.geolocation.watchPosition(onGeoOk, onGeoError, option);

    useEffect(()=>{
        const container = document.getElementById('map');
        const options ={
            center: new kakao.maps.LatLng(35.143196004191104, 126.80069991541106),
            level:3
        };
        const map = new kakao.maps.Map(container, options); /* 맵 생성 */ 
        
        new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(35.143196004191104, 126.80069991541106),
            title: "현재 위치"
        });

        markerdata.forEach((data) => {
            new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(data.lat, data.lng),
                title: data.title,
            });
        });

        if(location.pathname==="/danger"){
            kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
                lat = mouseEvent.latLng.getLat();
                lng = mouseEvent.latLng.getLng();
                console.log(lat, lng);
            });
        }

        new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(lat, lng),
            title: "KDN 앞 사거리"
        });
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
    else if(location.pathname==="/danger"){
            return(
                <div id='map' onClick={()=>{showModal();}} style={{width:'100%', height:'980px'}}>
                    <Menu3/>
                    {modalOpen && <Title/>}
                </div>  
            );
    }
    else if(location.pathname==="/pin"){
        return(
            <div id='map' onClick={()=>{showModal();}} style={{width:'100%', height:'980px'}}>
                <Hidden/>
            </div>  
        );
    }
    
}
    


export default Map; 