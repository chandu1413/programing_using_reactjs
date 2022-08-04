import { Button } from 'bootstrap';
import React from 'react'
import { Link } from 'react-router-dom';

import './Card.css';
const Card =(props)=>{
  return (
    <div className="card">
    <img className="card-img-top" src={props.img} alt="Card cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      
      <p className="card-text">{props.text}</p>
     
      <Link className='btn btn-primary' to='/About'>AboutUs</Link> 
     
    </div>
  </div>
  )
}

export default Card
