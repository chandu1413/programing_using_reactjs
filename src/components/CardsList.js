import React from 'react'
import Card from './Card.jsx';
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

export default function CardsList() {
  return (
    <>
    <div className='bg-info Cardc container-fluid'> 
    <h2 className='head'>Languages </h2>
    <hr/>
    <br/>
    <div className=' container Ccontainer row row-cols-1 row-cols-md-3 g-4' data-aos="fade-right"
         data-aos-offset="300"
         data-aos-easing="ease-in-sine">
        <Card img={img1}
             title="C Language"
             text= "C is a general-purpose programming language, developed in 1972, and still quite popular. C is very powerful; it has been used   to develop operating systems, databases, applications, etc."
            Link='/C'
         /> 
        <Card
          img={img2}
          title="Java Language"
          text="Java is an object-oriented programming language that produces software for multiple platforms. When a programmer writes a Java application, the compiled code runs on most operating systems(OS), including Windows,Linux and MacOS."
          Link='/java'
         />

        <Card
          img={img3}
          title="Python Language"
          text="Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation."
          Link='/python'
         />
   
        <Card img={img4}
          title="Java script"
          text="JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web. JavaScript is easy to learn."
          Link='/javascript'
         />
       
         <Card
          img={img5}
          title="C++ Language"
          text="C++ is a popular programming language. C++ is used to create computer programs, and is one of the most used language in game development."
          Link='/cpp'
          /> 
     </div>
    </div>
    </>
  )
}
