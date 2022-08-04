import React from 'react';
import "./home.css";
import pogo from '../programming-logo.webp'
import Card from './Card.jsx';
import { Link } from 'react-router-dom';

import img1 from '../images/c.png';
import img2 from '../images/java.png';
import img3 from '../images/python.jpg';
import img4 from '../images/js.png';
import img5 from '../images/c++.png';


const Home = () => {
  return (<>
    <div className='first bg-secondary'>
      <div className='row'>
      <div className="col-lg-6 col-sm-12 col-md-6 col-xl-6">
       <h1 className='h1 text-light' >Learn to Code</h1>
       <br/>
       <h4>With the world's largest web developer site.</h4>
       <br/>
       <Link className='btn btn-primary' to='/About'>AboutUs</Link> 
      </div>
      <br/>
      <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
        <br/>
       <img className='logo'alt="programming logo" src={pogo}/>
      </div>
      </div>
    </div>
    <br/>
    <h2>Languages </h2>
    <div className='card-group '>
    <Card img={img1}
          title="c Language"
          text="C is a general-purpose programming language, developed in 1972, and still quite popular. C is very powerful; it has been used   to develop operating systems, databases, applications, etc."
          />
    <Card
          img={img2}
          title="java Language"
          text="Java is an object-oriented programming language that produces software for multiple platforms. When a programmer writes a Java application, the compiled code runs on most operating systems (OS), including Windows, Linux and Mac OS."
    />
    <Card
          img={img3}
          title="python Language"
          text="Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation."
    
    />

    <Card img={img4}
          title="Java script"
        
          text="JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web. JavaScript is easy to learn."
         
         />
    <Card
          img={img5}
          title="java Language"
          text="Jav  systems (OS), including Windows, Linux and Mac OS."
    />
    
    </div>
    
    
    </>
  )
}

export default Home
