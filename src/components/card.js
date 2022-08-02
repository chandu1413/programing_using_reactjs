import React from 'react'
import img1 from '../images/c.png';

const Card =(props)=>{
  return (
    <div className='card text-center'>
        <div className='overflow'>
           <img src={img1} className='card-img-top' alt=''/> 
        </div>
        <div className='card-body text-dark'>
            <h4 className='card-title'>card title</h4>
            <p className='card-text text-secondary'>fjkdgdgkdgkgksgksg</p>
            <a href='#' className='btn bt-outline-sucess'>
                go 
            </a>
        </div>
    </div>
  )
}

export default Card
