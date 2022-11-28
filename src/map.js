/* global kakao */
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu1 from "./pin";
import Menu2 from "./notice";
import Menu3 from "./danger";
import Title from "./title";
import { markerdata } from "./markerData";
const { kakao } = window;




function Map(){
    const location = useLocation();
    let onoff = false;

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
                onoff = true;
                console.log(lat, lng, onoff);
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
        console.log(onoff);
        if(onoff === false){
            return(
                <div id='map' style={{width:'100%', height:'980px'}}>
                    <Menu3/>
                </div>  
            );
        }
        if(onoff === true){
            return(
                <div id='map' style={{width:'100%', height:'980px'}}>
                    <Title/>
                </div>  
            );
        }
    }
}

export default Map; 