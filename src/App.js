import './App.css';
import Login from "./login";
import Header from './header';
import Map from "./map";
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Menu from './menu';




function App() {
  return (
    <Route>
      <div className="App">
      {/* <Login/> */}
        <Header/>
        <Map>
          <Menu/>
        </Map>
      </div>
    </Route>
    
  );
}

export default App;
