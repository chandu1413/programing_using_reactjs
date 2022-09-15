import React from 'react';
import "./home.css";
// import pogo from '../programming-logo.webp'
import Card from './Card.jsx';
import { Link } from 'react-router-dom';

import img1 from '../images/c.png';
import img2 from '../images/java.png';
import img3 from '../images/python.jpg';
import img4 from '../images/js.png';
import img5 from '../images/c++.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init({
  delay: 20,
  duration: 500,
  throttleDelay: 99,
  animatedClassName: 'aos-animate', 
});

const Home = () => {
  return (<>
 
   <div className='first '>
    <div className='container glass'>
    <div className='container1'>
       <h1 className='sh1'>Learn to Code</h1>
       <div className='container2'>
       <h4 className='sh4'>With the world's largest web developer site.</h4>
       {/* <div className='container3'> */}
       <Link style={{margin:'30px',marginLeft:'45%'}} className='btn btn-primary  ' to='/About'>AboutUs</Link> 
      {/* </div> */}
      </div>
      </div>
      </div>
    </div>
    
   <div className='bg-info container-fluid'> 
    <h2 className='head'>Languages </h2>
    <div className=' container row row-cols-1 row-cols-md-3 g-4' data-aos="fade-right"
         data-aos-offset="300"
         data-aos-easing="ease-in-sine">
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
    </div>
  <div className='About container-fluid'>
  <h2 >About Programming language</h2>
    <div className='row'>
      <div className='col-md-8 '>
      <p>A programming language is any set of rules that converts strings, or graphical program elements in the case of visual programming languages, to various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms.</p>
     <p>Most programming languages consist of instructions for computers. There are programmable machines that use a set of specific instructions, rather than general programming languages. Prior to the invention of computers, programs were used to direct the behavior of machines such as Jacquard looms, music boxes and player pianos.</p>
     <p>Thousands of different programming languages have been created, and more are being created every year. Many programming languages are written in an imperative form (i.e., as a sequence of operations to perform) while other languages use the declarative form (i.e. the desired result is specified, not how to achieve it).</p>
      </div>
      <div className='col-md-4'>

      </div>
      </div>
      
    <div >
    
   
    <p>The description of a programming language is usually split into the two components of syntax (form) and semantics (meaning), which are usually defined by a formal language. Some languages are defined by a specification document (for example, the C programming language is specified by an ISO Standard) while other languages (such as Perl) have a dominant implementation that is treated as a reference. Some languages have both, with the basic language defined by a standard and extensions taken from the dominant implementation being common.</p>
    <p>Programming language theory is a subfield of computer science that deals with the design, implementation, analysis, characterization, and classification of programming languages.</p>
    
     </div>   
  </div>

    </>
  )
}

export default Home
