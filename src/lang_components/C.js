import React from 'react';
import  {Title,Heading,Heading2,Subheading,Subheading2,UnderHeading,P} from'./C.Style.js';
// import str from "../images/StructureOfCprogram.png"
import "./C.css";
const C = () => {
  const openbrace = "{"
  const closebrace ='}'
  const headfile = "#include <stdio.h>"

  return (
    <>
    <img className='c-img'  src='https://www.geeksforgeeks.org/wp-content/uploads/Clanguage-1024x341.png' alt='c' />
    <Title>C Language</Title>
    <hr/>
    <div className='c container-fluid'>
    <br/>
    <Heading>C Language Introduction</Heading>
    <UnderHeading>Difficulty Level : Easy</UnderHeading>
    <br/>
    <P>C is a procedural programming language. It was initially developed by Dennis Ritchie in the year 1972. It was mainly developed as a system programming language to write an operating system. The main features of the C language include low-level memory access, a simple set of keywords, and a clean style, these features make C language suitable for system programmings like an operating system or compiler development. </P>
    <P>Many later languages have borrowed syntax/features directly or indirectly from the C language. Like syntax of Java, PHP, JavaScript, and many other languages are mainly based on the C language. C++ is nearly a superset of C language (Few programs may compile in C, but not in C++). </P>
     <P>C programming is considered as the base for other programming languages, that is why it is known as mother language.</P>
     <P>It can be defined by the following ways:</P>
     <ol className='list'>
      <li>Mother language</li>
      <li>System programming language</li>
      <li>Procedure-oriented programming language</li>
      <li>Structured programming language</li>
      <li>Mid-level programming language</li>
     </ol>
     <ol>
      <li><Subheading>C as a mother language</Subheading>
          <P>C language is considered as the mother language of all the modern programming languages because most of the compilers, JVMs, Kernels, etc. are written in C language, and most of the programming languages follow C syntax, for example, C++, Java, C#, etc.</P>
          <P>t provides the core concepts like the array, strings, functions, file handling, etc. that are being used in many languages like C++, Java, C#, etc.</P>
      </li>
      <li>
        <Subheading>C as a system programming language</Subheading>
        <P>A system programming language is used to create system software. C language is a system programming language because it can be used to do low-level programming (for example driver and kernel). It is generally used to create hardware devices, OS, drivers, kernels, etc. For example, Linux kernel is written in C.</P>
        <P>It can't be used for internet programming like Java, .Net, PHP, etc.</P>
      </li>
      <li>
        <Subheading>C as a procedural language</Subheading>
        <P>A procedure is known as a function, method, routine, subroutine, etc. A procedural language specifies a series of steps for the program to solve the problem.</P>
        <P>A procedural language breaks the program into functions, data structures, etc.</P>
        <P>C is a procedural language. In C, variables and function prototypes must be declared before being used.</P>
      </li>
      <li>
        <Subheading>C as a structured programming language</Subheading>
        <P>A structured programming language is a subset of the procedural language. Structure means to break a program into parts or blocks so that it may be easy to understand.</P>
        <P>In the C language, we break the program into parts using functions. It makes the program easier to understand and modify.</P>
        
      </li><li>
        <Subheading>C as a mid-level programming language</Subheading>
        <P>C is considered as a middle-level language because it supports the feature of both low-level and high-level languages. C language program is converted into assembly code, it supports pointer arithmetic (low-level), but it is machine independent (a feature of high-level).</P>
        <P>A Low-level language is specific to one machine, i.e., machine dependent. It is machine dependent, fast to run. But it is not easy to understand.</P>
        <P>A High-Level language is not specific to one machine, i.e., machine independent. It is easy to understand.</P>
      </li>

     </ol>
      <br/>

        <Heading>History of C Language</Heading>
        <P>History of C language is interesting to know. Here we are going to discuss a brief history of the c language.</P>
        <P>C programming language was developed in 1972 by Dennis Ritchie at bell laboratories of AT&T (American Telephone & Telegraph), located in the U.S.A.</P>
        <P>Dennis Ritchie is known as the founder of the c language.</P>
        <P>Initially, C language was developed to be used in UNIX operating system. It inherits many features of previous languages such as B and BCPL.</P>
        <br/>
       <Subheading2>Let's see the programming languages that were developed before C language.</Subheading2>
        
        <div className='container'>
        <table className='table  table-bordered'>
          <thead >
        <tr  >
          <th scope='col' >Language</th>
          <th scope='col' >	Year</th>
          <th scope='col' >Developed By</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td> Algol</td>
            <td> 1960</td>
            <td>International Group</td>
          </tr>
          <tr  >
            <td>BCPL</td>
            <td>1967</td>
            <td>	Martin Richard</td>
          </tr>
          <tr >
            <td>B</td>
            <td>	1970</td>
            <td>Ken Thompson</td>
          </tr>
          <tr >
            <td>Traditional C</td>
            <td>1972</td>
            <td>Dennis Ritchie</td>
          </tr>
          <tr>
            <td>K & R C</td>
            <td>1978</td>
            <td>Kernighan & Dennis Ritchie</td>
          </tr>
          <tr >
            <td>ANSI C</td>
            <td>1989</td>
            <td>ANSI Committee</td>
          </tr>
          <tr >
            <td>ANSI/ISO C</td>
            <td>	1990</td>
            <td>	ISO Committee</td>
          </tr>
          <tr >
            <td>	C99</td>
            <td>1999</td>
            <td>Standardization Committee</td>
          </tr>
        </tbody>
        </table>
        </div>
      </div>
      <br/>
      <Heading>Beginning with C programming:</Heading>
      <ol>
        <li>
          <Subheading>Structure of a C program </Subheading>
          <P>After the above discussion, we can formally assess the structure of a C program. By structure, it is meant that any program can be written in this structure only. Writing a C program in any other structure will hence lead to a Compilation Error.</P>
       <P>The structure of a C program is as follows:</P>
       <img className='structure' src='images/StructureOfCprogram.png' alt='structure'/>
        </li>
      </ol>
      <ol><li><Subheading>The components of the above structure are:</Subheading></li>
          <ol>
            <li>Header Files Inclusion: The first and foremost component is the inclusion of the Header files in a C program. 
                  A header file is a file with extension .h which contains C function declarations and macro definitions to be shared between several source files.
              <P>Some of C Header files: </P>
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

      <Heading2>"Hello, world" example</Heading2>
      <hr/>
      <P>The "hello, world" example, which appeared in the first edition of K&R, has become the model for an introductory program in most programming textbooks. The program prints "hello, world" to the standard output, which is usually a terminal or screen display.</P>
      <P>To write the first c program, open the C console and write the following code:</P>
      
      <div className='col-md-3 spam'>
      <pre>
        <span></span>
        <span>{headfile}</span>
        <br/>
        <span >main</span>
        <span >()</span>
        <br/>
       <span ></span>
       <span ></span>
       <span ></span>
       <span >{ openbrace}</span>
       <br/>
      <span >  printf</span>
      <span >(</span>
      <span >"hello, world</span>
      <span >\n</span>
      <span >"</span>
      <span >);</span>
      <span ></span>
      <br/><span >{closebrace}</span>
      <span ></span>
      </pre>
      </div>
      <P><strong>#include &lt;stdio.h&gt;</strong> includes the <strong>standard input output</strong> library functions. The printf() function is defined in stdio.h .</P>
      <P><strong>int main()</strong> The <strong>main() function is the entry point of every program</strong> in c language. </P>
      <P><strong>printf()</strong> The printf() function is <strong>used to print data</strong> on the console.</P>
      <P><strong>return 0</strong> The return 0 statement, returns execution status to the OS. The 0 value is used for successful execution and 1 for unsuccessful execution.</P>
   
     
    </>
  )
}

export default C
