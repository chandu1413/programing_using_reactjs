import React from 'react';
import  {Title,Heading,Subheading} from'./C.Style.js';
import str from '../images/StructureOfCprogram.png';
import "./C.css";
const C = () => {
  return (
    <>
   
    <Title>C Language</Title>
    <div className='container'>
    <br/>
    <Heading>C Language Introduction</Heading>
    <h6>Difficulty Level : Easy</h6>
    <br/>
    <p>C is a procedural programming language. It was initially developed by Dennis Ritchie in the year 1972. It was mainly developed as a system programming language to write an operating system. The main features of the C language include low-level memory access, a simple set of keywords, and a clean style, these features make C language suitable for system programmings like an operating system or compiler development. </p>
    <p>Many later languages have borrowed syntax/features directly or indirectly from the C language. Like syntax of Java, PHP, JavaScript, and many other languages are mainly based on the C language. C++ is nearly a superset of C language (Few programs may compile in C, but not in C++). </p>
     <p>C programming is considered as the base for other programming languages, that is why it is known as mother language.</p>
     <p>It can be defined by the following ways:</p>
     <ol>
      <li>Mother language</li>
      <li>System programming language</li>
      <li>Procedure-oriented programming language</li>
      <li>Structured programming language</li>
      <li>Mid-level programming language</li>
     </ol>
     <ol>
      <li><Subheading>C as a mother language</Subheading>
          <p>C language is considered as the mother language of all the modern programming languages because most of the compilers, JVMs, Kernels, etc. are written in C language, and most of the programming languages follow C syntax, for example, C++, Java, C#, etc.</p>
          <p>t provides the core concepts like the array, strings, functions, file handling, etc. that are being used in many languages like C++, Java, C#, etc.</p>
      </li>
      <li>
        <Subheading>C as a system programming language</Subheading>
        <p>A system programming language is used to create system software. C language is a system programming language because it can be used to do low-level programming (for example driver and kernel). It is generally used to create hardware devices, OS, drivers, kernels, etc. For example, Linux kernel is written in C.</p>
        <p>It can't be used for internet programming like Java, .Net, PHP, etc.</p>
      </li>
      <li>
        <Subheading>C as a procedural language</Subheading>
        <p>A procedure is known as a function, method, routine, subroutine, etc. A procedural language specifies a series of steps for the program to solve the problem.</p>
        <p>A procedural language breaks the program into functions, data structures, etc.</p>
        <p>C is a procedural language. In C, variables and function prototypes must be declared before being used.</p>
      </li>
      <li>
        <Subheading>C as a structured programming language</Subheading>
        <p>A structured programming language is a subset of the procedural language. Structure means to break a program into parts or blocks so that it may be easy to understand.</p>
        <p>In the C language, we break the program into parts using functions. It makes the program easier to understand and modify.</p>
        
      </li><li>
        <Subheading>C as a mid-level programming language</Subheading>
        <p>C is considered as a middle-level language because it supports the feature of both low-level and high-level languages. C language program is converted into assembly code, it supports pointer arithmetic (low-level), but it is machine independent (a feature of high-level).</p>
        <p>A Low-level language is specific to one machine, i.e., machine dependent. It is machine dependent, fast to run. But it is not easy to understand.</p>
        <p>A High-Level language is not specific to one machine, i.e., machine independent. It is easy to understand.</p>
      </li>

     </ol>
     
     
      <h6>Beginning with C programming:</h6>
      <ol>
        <li>
          <Subheading>Structure of a C program </Subheading>
          <p>After the above discussion, we can formally assess the structure of a C program. By structure, it is meant that any program can be written in this structure only. Writing a C program in any other structure will hence lead to a Compilation Error.</p>
       <p>The structure of a C program is as follows:</p>
       <img className='structure' src={str} alt='structure'/>
        </li>
      </ol>
      <ol><li><Subheading>The components of the above structure are:</Subheading></li>
          <ol>
            <li>Header Files Inclusion: The first and foremost component is the inclusion of the Header files in a C program. 
                  A header file is a file with extension .h which contains C function declarations and macro definitions to be shared between several source files.
              <p>Some of C Header files: </p>
              <ul>
                <li>stddef.h – Defines several useful types and macros.</li>
                <li>stdint.h – Defines exact width integer types.</li>
                <li>stdio.h – Defines core input and output functions</li>
                <li>stdlib.h – Defines numeric conversion functions, pseudo-random network generator, memory allocation</li>
                <li>string.h – Defines string handling functions</li>
                <li>math.h – Defines common mathematical functions</li>
         

              </ul>
              </li>
              
            </ol>    
      </ol>
      </div>
    </>
  )
}

export default C
