import React from "react";
import "./App.css"
import About from "./components/About";
import Home from "./components/Home";
// import Nav from "./components/NavbarComp";
import Footer from "./components/Footer";
import C from "./lang_components/C.js";
import Cpp from "./lang_components/cpp.js";
import Java from "./lang_components/java.js";
import Javascript from './lang_components/javascript.js';
import Python from './lang_components/python.js';
import NavBar from '../src/components/Navbar.js';
import '../node_modules/react-bootstrap/dist/react-bootstrap.js'

import { BrowserRouter,Routes, Route } from "react-router-dom";

export default function App() {
  return (
    
    <BrowserRouter>
    {/* <Nav/> */}
    <NavBar/>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/C" element={<C/>}/>
        <Route path="/cpp" element={<Cpp/>}/>
        <Route path="/java" element={<Java/>}/>
        <Route path="/python" element={<Python/>}/>
        <Route path="/javascript" element={<Javascript/>}/>
        
        
        
      </Routes>
    <Footer/>
    </BrowserRouter>
      
  );
}