import React from 'react';
import "./home.css";

import Card from './card.js';
import plogo from '../programming-logo.webp'


const Home = () => {
  return (<>
    <div className='first bg-secondary'>
      <div className='row'>
      <div className="col-lg-6 col-sm-12 col-md-6 col-xl-6">
       <h1 className='h1 text-light' >Learn to Code</h1>
       <br/>
       <h4>With the world's largest web developer site.</h4>
      </div>
      <br/>
      <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
        <br/>
       <img className='logo' src={plogo}/>
      </div>
      </div>
    </div>
    <Card/>
    
    
    </>
  )
}

export default Home
