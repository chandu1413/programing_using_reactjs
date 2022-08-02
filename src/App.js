import React from "react";
import "./App.css"
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/NavbarComp";
import { BrowserRouter,Routes, Route,Link } from "react-router-dom";

export default function App() {
  return (
    
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </BrowserRouter>
      
  );
}