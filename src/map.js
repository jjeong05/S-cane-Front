/* global kakao */
import React, {useEffect} from "react";
import Menu from "./pin";
const { kakao } = window;


function Map(){
    
    useEffect(()=>{
        const container = document.getElementById('map');
        const options ={
            center: new kakao.maps.LatLng(35.1427227828933,126.80069558224491),
            level:3
        };
        const map = new kakao.maps.Map(container, options); /* 맵 생성 */ 
        const markerPosition = new kakao.maps.LatLng(35.1427227828933,126.80069558224491);
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    });
    return (
            <div id='map' style={{width:'100%', height:'980px'}}>
                <Menu/>
            </div>
        
    );
}

export default Map; 