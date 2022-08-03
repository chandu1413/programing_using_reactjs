import React from 'react'

import './Card.css';
const Card =(props)=>{
  return (
    <div className="card">
    <img className="card-img-top" src={props.img} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
     
    </div>
  </div>
  )
}

export default Card
