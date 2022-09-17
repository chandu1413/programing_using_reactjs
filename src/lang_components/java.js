import React from 'react'
import './Java.css'
import { UnderHeading } from './Java.Style'

const Java = () => {
  const openbrace = "{"
  const closebrace ='}'
  return (
    <>
    
    <img className='javaimg'  src='images/javaimg.png' alt='java' />
  <div className='container-fluid'>
    <h2>Java (programming language)</h2>
    <p> <strong>Java</strong> is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub, particularly for client–server web applications, with a reported 9 million developers.</p>
    <p>Java was originally developed by James Gosling at Sun Microsystems. It was released in May 1995 as a core component of Sun Microsystems' Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses. As of May 2007, in compliance with the specifications of the Java Community Process, Sun had relicensed most of its Java technologies under the GPL-2.0-only license. Oracle offers its own HotSpot Java Virtual Machine, however the official reference implementation is the OpenJDK JVM which is free open-source software and used by most developers and is the default JVM for almost all Linux distributions.</p>
 
    <h3>History of Java</h3>
    <p>The history of Java is very interesting. Java was originally designed for interactive television, but it was too advanced technology for the digital cable television industry at the time. The history of Java starts with the Green Team. Java team members (also known as Green Team), initiated this project to develop a language for digital devices such as set-top boxes, televisions, etc. However, it was best suited for internet programming. Later, Java technology was incorporated by Netscape.</p>
    <p>The principles for creating Java programming were "Simple, Robust, Portable, Platform-independent, Secured, High Performance, Multithreaded, Architecture Neutral, Object-Oriented, Interpreted, and Dynamic". Java was developed by James Gosling, who is known as the father of Java, in 1995. James Gosling and his team members started the project in the early '90s.</p>
    <div className='row'>
      <div className='col-md-9'>
        <p>Currently, Java is used in internet programming, mobile devices, games, e-business solutions, etc. Following are given significant points that describe the history of Java.</p>
        <ul>
          <li> <strong>James Gosling</strong>,<strong> Mike Sheridan</strong>, and <strong>Patrick Naughton </strong>initiated the Java language project in June 1991. The small team of sun engineers called <strong>Green Team.</strong></li>
          <li>Initially it was designed for small, embedded systems in electronic appliances like set-top boxes.</li>
          <li>Firstly, it was called <strong>"Greentalk"</strong> by James Gosling, and the file extension was .gt.</li>
          <li>After that, it was called<strong>Oak</strong>and was developed as a part of the Green project.</li>
          <UnderHeading>Why Java was named as "Oak"?Why Java was named as "Oak"?</UnderHeading>
          <li> Why Oak? Oak is a symbol of strength and chosen as a national tree of many countries like the U.S.A., France, Germany, Romania, etc.</li>
          <li>In 1995, Oak was renamed as "Java" because it was already a trademark by Oak Technologies.</li>
        </ul>
        </div>
      <div className='col-md-3 '>
      <img className='jamesimg '  src='images/j1.jpg' alt='java' />
      </div>
    </div>
    <UnderHeading>Why Java Programming named "Java"?</UnderHeading>
         <ul>
           <li> Why had they chose the name Java for Java language?</li>
           <p>The team gathered to choose a new name. The suggested words were "dynamic", "revolutionary", "Silk", "jolt", "DNA", etc. They wanted something that reflected the essence of the technology: revolutionary, dynamic, lively, cool, unique, and easy to spell, and fun to say.</p>
           <p>According to James Gosling, "Java was one of the top choices along with Silk". Since Java was so unique, most of the team members preferred Java than other names.</p>
           <li>Java is an island in Indonesia where the first coffee was produced (called Java coffee). It is a kind of espresso bean. Java name was chosen by James Gosling while having a cup of coffee nearby his office.</li>
           <li>Notice that Java is just a name, not an acronym.</li>
           <li> Initially developed by James Gosling at Sun Microsystems (which is now a subsidiary of Oracle Corporation) and released in 1995.</li>
           <li>In 1995, Time magazine called Java one of the Ten Best Products of 1995.</li>
           <li>JDK 1.0 was released on January 23, 1996. After the first release of Java, there have been many additional features added to the language. Now Java is being used in Windows applications, Web applications, enterprise applications, mobile applications, cards, etc. Each new version adds new features in Java.</li>
         </ul>
    <h3>Features of Java</h3> 
      <p>The primary objective of Java programming language creation was to make it portable, simple and secure programming language. Apart from this, there are also some excellent features which play an important role in the popularity of this language. The features of Java are also known as Java buzzwords.</p>
      <p>A list of the most important features of the Java language is given below.</p>
        <ol>  
          <li>Simple</li>
          <li>Object-Oriented</li>
          <li>Portable</li>
          <li>Platform independent</li>
          <li>Secured</li>
          <li>Robust</li>
          <li>Architecture neutral</li>
          <li>Interpreted</li>
          <li>High Performance</li>
          <li>Multithreaded</li>
          <li>Distributed</li>
          <li>Dynamic</li>
        </ol>  
    <h3>Syntax</h3>
      <p>The syntax of Java is largely influenced by C++ and C. Unlike C++, which combines the syntax for structured, generic, and object-oriented programming, Java was built almost exclusively as an object-oriented language.[18] All code is written inside classes, and every data item is an object, with the exception of the primitive data types, (i.e. integers, floating-point numbers, boolean values, and characters), which are not objects for performance reasons. Java reuses some popular aspects of C++ (such as the printf method).</p>
      <p>Unlike C++, Java does not support operator overloading[56] or multiple inheritance for classes, though multiple inheritance is supported for interfaces.[</p>
      <p>Java uses comments similar to those of C++. There are three different styles of comments: a single line style marked with two slashes (//), a multiple line style opened with /* and closed with */, and the Javadoc commenting style opened with /** and closed with */. The Javadoc style of commenting allows the user to run the Javadoc executable to create documentation for the program and can be read by some integrated development environments (IDEs) such as Eclipse to allow developers to access documentation within the IDE.</p>
    <h3>First Java Program | Hello World Example</h3>
      <p>In this section, we will learn how to write the simple program of Java. We can write a simple hello Java program easily after installing the JDK.</p>
      <p>To create a simple Java program, you need to create a class that contains the main method. Let's understand the requirement first.</p>
    <UnderHeading>The requirement for Java Hello World Example</UnderHeading>
    <p>For executing any Java program, the following software or application must be properly installed.</p>
      <ul>
        <li>Install the JDK if you don't have installed it, download the JDK and install it.</li>
        <li>Set path of the jdk/bin directory. http://www.javatpoint.com/how-to-set-path-in-java</li>
        <li>Create the Java program</li>
        <li>Compile and run the Java program</li>
      </ul>
    <UnderHeading>Creating Hello World Example</UnderHeading>
    <p>Let's create the hello java program:</p>
    
    <div className='col-md-6 container'>
      <pre>
        
      <span >class Simple { openbrace}</span>
      <br/>
      <span > public static void main(String args[]) {openbrace}</span>
      <br/>
      <span>  System.out.println("Hello Java");  </span>
      <br/>
      <span >  {closebrace}</span>
      <br/>
      <span >{closebrace}</span>
      </pre>
    </div>
    <p>Save the above file as Simple.java.</p>
    <p><strong>To compile:</strong>  javac Simple.java</p>
    <p><strong>To execute:</strong>  java Simple</p>
    <br/>
    <p><strong>Output:</strong> Hello Java</p>
  </div>
    
  </>
 )
}

export default Java
