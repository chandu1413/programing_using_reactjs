import React from "react";
import "./App.css"
import ContactUS from "./components/ContactUs";
import Home from "./components/Home";
import Footer from "./components/Footer";
import C from "./components/lang_components/C.js";
import Cpp from "./components/lang_components/cpp.js";
import Java from "./components/lang_components/java.js";
import Javascript from './components/lang_components/javascript.js';
import Python from './components/lang_components/python.js';
import NavBar from '../src/components/Navbar.js';
import ProgramLanguage from "./components/ProgramLanguage";
import '../node_modules/react-bootstrap/dist/react-bootstrap.js'

import { BrowserRouter,Routes, Route } from "react-router-dom";

export default function App() {
  return (
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contactus" element={<ContactUS/>}/>
        <Route path="/C" element={<C/>}/>
        <Route path="/cpp" element={<Cpp/>}/>
        <Route path="/java" element={<Java/>}/>
        <Route path="/python" element={<Python/>}/>
        <Route path="/javascript" element={<Javascript/>}/>
        <Route path="/language" element={<ProgramLanguage/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
      
  );
}