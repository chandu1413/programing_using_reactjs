import React from 'react'
import "./Javascript.css"

const Javascript = () => {
   const open="<"
   const close=">"
  return (
    
    <>
        <img className='jsimg'  src='images/jslogo.webp' alt='js' />
        <div>
          <h1>JavaScript</h1>
          <hr/>
          <p><strong>JavaScript</strong> , often abbreviated to JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.</p>
          <p>JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).</p>
          <p>The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.</p>
          <p>JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js.</p>
          
          <h3>History</h3>
          <hr/>
          <h4>Creation at Netscape</h4>
          <p>The first web browser with a graphical user interface, Mosaic, was released in 1993. Accessible to non-technical people, it played a prominent role in the rapid growth of the nascent World Wide Web. The lead developers of Mosaic then founded the Netscape corporation, which released a more polished browser, Netscape Navigator, in 1994. This quickly became the most-used.</p>
          <p>During these formative years of the Web, web pages could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. There was a desire in the flourishing web development scene to remove this limitation, so in 1995, Netscape decided to add a scripting language to Navigator. They pursued two routes to achieve this: collaborating with Sun Microsystems to embed the Java programming language, while also hiring Brendan Eich to embed the Scheme language.</p>
          <p>Netscape management soon decided that the best option was for Eich to devise a new language, with syntax similar to Java and less like Scheme or other extant scripting languages. Although the new language and its interpreter implementation were called LiveScript when first shipped as part of a Navigator beta in September 1995, the name was changed to JavaScript for the official release in December.</p>
          <p>The choice of the JavaScript name has caused confusion, implying that it is directly related to Java. At the time, the dot-com boom had begun and Java was the hot new language, so Eich considered the JavaScript name a marketing ploy by Netscape.</p>
          <h4>Adoption by Microsoft</h4>
          <p>Microsoft debuted Internet Explorer in 1995, leading to a browser war with Netscape. On the JavaScript front, Microsoft reverse-engineered the Navigator interpreter to create its own, called JScript.</p>
          <p>JScript was first released in 1996, alongside initial support for CSS and extensions to HTML. Each of these implementations was noticeably different from their counterparts in Navigator. These differences made it difficult for developers to make their websites work well in both browsers, leading to widespread use of "best viewed in Netscape" and "best viewed in Internet Explorer" logos for several years</p>  
          <h4>The rise of JScript</h4>
          <p>In November 1996, Netscape submitted JavaScript to Ecma International, as the starting point for a standard specification that all browser vendors could conform to. This led to the official release of the first ECMAScript language specification in June 1997.</p>
          <p>The standards process continued for a few years, with the release of ECMAScript 2 in June 1998 and ECMAScript 3 in December 1999. Work on ECMAScript 4 began in 2000.</p>
          <p>Meanwhile, Microsoft gained an increasingly dominant position in the browser market. By the early 2000s, Internet Explorer's market share reached 95%. This meant that JScript became the de facto standard for client-side scripting on the Web.</p>
          <p>Microsoft initially participated in the standards process and implemented some proposals in its JScript language, but eventually it stopped collaborating on Ecma work. Thus ECMAScript 4 was mothballed.</p>

          <h4>Hello World using Javascript</h4>
          <p>Just to give you a little excitement about Javascript programming, I'm going to give you a small conventional Javascript Hello World program, You can try it using Demo link</p>
            <div className='container-fluid'>
              <pre>
               <span>{open}html{close}</span>
               <br/>
               <span>   {open}body{close}   </span>
               <br/>
               <span>      {open}script language = "javascript" type = "text/javascript"{close}</span>
               <br/>
               <span>            document.write("Hello World!")</span>
               <br/>
               <span>      {open}/script{close} </span>
               <br/>
               <span>   {open}/body{close}</span>
               <br/>
               <span>{open}/html{close}</span>
              </pre>
            </div> 
            <p>There are many useful Javascript frameworks and libraries available:</p>
              <ul>
                <li>Angular</li>
                <li>React</li>
                <li>jQuery</li>
                <li>Vue.js</li>
                <li>Ext.js</li>
                <li>Ember.js</li>
                <li>Meteor</li>
                <li>Mithril</li>
                <li>Node.js</li>
                <li>Polymer</li>
                <li>Aurelia</li>
                <li>Backbone.js</li>
              </ul>
            <p>It is really impossible to give a complete list of all the available Javascript frameworks and libraries. The Javascript world is just too large and too much new is happening.</p>


        </div>
    
    </>
  )
}

export default Javascript
