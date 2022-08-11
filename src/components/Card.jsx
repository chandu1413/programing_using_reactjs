
import React from 'react'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import './Card.css';
const Card =(props)=>{
  return (
    
    <div className=' col-xl-2.4 col-xxl-2 col-lg-3 col-md-5 col-sm-4' data-aos="zoom-in">
    <div className="card p-0 overflow-hidden h-100 container-fluid">
    <img className="card-img-top" src={props.img} alt="Card cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <Link className='btn btn-primary' to='/About'>AboutUs</Link> 
      
    </div>
  </div> 
  </div>
  )
}

export default Card
