/* global kakao */
import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Menu1 from "./pin";
import Menu2 from "./notice";
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

    const location = useLocation();
    console.log(location);


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
        return (
            <div id='map' style={{width:'100%', height:'980px'}}>
                {/* <Circle
                    center={{
                    lat: 33.450701,
                    lng: 126.570667,
                    }}
                    radius={50}
                    strokeWeight={5} // 선의 두께입니다
                    strokeColor={"#75B8FA"} // 선의 색깔입니다
                    strokeOpacity={2} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                    strokeStyle={"dash"} // 선의 스타일 입니다
                    fillColor={"#CFE7FF"} // 채우기 색깔입니다
                    fillOpacity={0.7} // 채우기 불투명도 입니다
                /> */}
            </div>    
        );
    }
    else if(location.pathname==="/danger/create"){
        return (
            <div id='map' style={{width:'100%', height:'980px'}}>
            </div>    
        );
    }
    



    
}

export default Map; 