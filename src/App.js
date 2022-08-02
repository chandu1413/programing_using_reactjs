import React from "react";

import About from "./components/About";
import Home from "./components/Home";
import NavbarComp from "./components/NavbarComp";
import { BrowserRouter,Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </BrowserRouter>
      
  );
}