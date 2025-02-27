import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>{/*{code here}*/}
  <NavBar />
          <Routes>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/directors"  element={<Directors/>}/>
            <Route path="/actors" element={<Actors/>}/>
            <Route path="/" element={<Home/>}/>
            </Routes>
  
  </div>;
}

export default App;
