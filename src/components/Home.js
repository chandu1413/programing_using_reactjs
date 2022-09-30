import React from 'react';
import "./home.css";
import CardsList from "./CardsList";
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (<>
   <div className='first '>
    <div className='container glass'>
    <div className='container1'>
       <h1 className='sh1 text-light'>Learn to Code</h1>
       <div className='container2'>
       <h4 className='sh4 '>With the world's largest web developer site.</h4>
      </div>
      </div>
      </div>
    </div>

 <div className='About container-fluid'>        
  <h2 >About Programming language</h2>
  <hr/>
    <div className='row'>
      <div className='col-md-8 '>
      <p>A programming language is any set of rules that converts strings, or graphical program elements in the case of visual programming languages, to various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms.</p>
     <p>Most programming languages consist of instructions for computers. There are programmable machines that use a set of specific instructions, rather than general programming languages. Prior to the invention of computers, programs were used to direct the behavior of machines such as Jacquard looms, music boxes and player pianos.</p>
     <p>Thousands of different programming languages have been created, and more are being created every year. Many programming languages are written in an imperative form (i.e., as a sequence of operations to perform) while other languages use the declarative form (i.e. the desired result is specified, not how to achieve it).</p>
      </div>
      <div className='col-md-4'>
          <img className='programimg' src='Program.png' alt='img' title='program'/>
      </div>
      </div>
    <p>The description of a programming language is usually split into the two components of syntax (form) and semantics (meaning), which are usually defined by a formal language. Some languages are defined by a specification document (for example, the C programming language is specified by an ISO Standard) while other languages (such as Perl) have a dominant implementation that is treated as a reference. Some languages have both, with the basic language defined by a standard and extensions taken from the dominant implementation being common.</p>
    <p>Programming language theory is a subfield of computer science that deals with the design, implementation, analysis, characterization, and classification of programming languages.</p>
     <Link className='btn shadowBtn' to='./language' > Learn More </Link>
     <br>
     </br>
     <br/><br/><br/>
  </div>
     <CardsList/>
    </>
  )
}

export default Home
