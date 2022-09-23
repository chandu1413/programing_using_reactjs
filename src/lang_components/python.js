import React from 'react'
import './Python.css'
const Python = () => {
  return (
    <>
    <img className='py-img'  src='images/Python-01.jpg' alt='java' />
    <div className='container container-fluid'>
        <h2 className='heading2'>Python (programming language)</h2>
        <hr className='hr'/>
        <p>Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.</p>
        <p>Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.</p>
        <p>Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991 as Python 0.9.0. Python 2.0 was released in 2000 and introduced new features such as list comprehensions, cycle-detecting garbage collection, reference counting, and Unicode support. Python 3.0, released in 2008, was a major revision that is not completely backward-compatible with earlier versions. Python 2 was discontinued with version 2.7.18 in 2020.</p>

        <h3 className='heading3'>History</h3>
        <div className='row'>
      <div className='col-md-9'>
        <p>Python was conceived in the late 1980s by Guido van Rossum at Centrum Wiskunde & Informatica (CWI) in the Netherlands as a successor to the ABC programming language, which was inspired by SETL, capable of exception handling and interfacing with the Amoeba operating system. Its implementation began in December 1989. Van Rossum shouldered sole responsibility for the project, as the lead developer, until 12 July 2018, when he announced his "permanent vacation" from his responsibilities as Python's "benevolent dictator for life", a title the Python community bestowed upon him to reflect his long-term commitment as the project's chief decision-maker. In January 2019, active Python core developers elected a five-member Steering Council to lead the project</p>
        <p>Python 2.0 was released on 16 October 2000, with many major new features. Python 3.0, released on 3 December 2008, with many of its major features backported to Python 2.6.x and 2.7.x. Releases of Python 3 include the 2to3 utility, which automates the translation of Python 2 code to Python 3.</p>
        <p>Python 2.7's end-of-life was initially set for 2015, then postponed to 2020 out of concern that a large body of existing code could not easily be forward-ported to Python 3. No further security patches or other improvements will be released for it. With Python 2's end-of-life, only Python 3.6.x and later were supported. Later, support for 3.6 was also discontinued. In 2021, Python 3.9.2 and 3.8.8 were expedited as all versions of Python (including 2.7) had security issues leading to possible remote code execution and web cache poisoning.</p>
      </div>
      <div className='col-md-3 '>
      <img className='gudioimg '  src='images/Guido.png' alt='java' />
      </div>
      </div>
      <p>In 2022, Python 3.10.4 and 3.9.12 were expedited and so were older releases including 3.8.13, and 3.7.13 because of many security issues. When Python 3.9.13 was released in May 2022, it was announced that the 3.9 series (joining the older series 3.8 and 3.7) will only receive security fixes going forward. On September 7, 2022, four new releases were made due to a potential denial-of-service attack: 3.10.7, 3.9.14, 3.8.14, and 3.7.14.</p>
      <h3 className='heading3'>What is Python?</h3>
      <p>Python is a very popular general-purpose interpreted, interactive, object-oriented, and high-level programming language. Python is dynamically-typed and garbage-collected programming language. It was created by Guido van Rossum during 1985- 1990. Like Perl, Python source code is also available under the GNU General Public License (GPL).</p>
      <p>Python supports multiple programming paradigms, including Procedural, Object Oriented and Functional programming language. Python design philosophy emphasizes code readability with the use of significant indentation.</p>
      <h3 className='heading3'>Why to Learn Python?</h3>
      <p>Python is consistently rated as one of the world's most popular programming languages. Python is fairly easy to learn, so if you are starting to learn any programming language then Python could be your great choice. Today various Schools, Colleges and Universities are teaching Python as their primary programming language. There are many other good reasons which makes Python as the top choice of any programmer:</p>
      <ul>
        <li>Python is Open Source which means its available free of cost.</li>
        <li>Python is simple and so easy to learn</li>
        <li>Python is versatile and can be used to create many different things.</li>
        <li>Python has powerful development libraries include AI, ML etc.</li>
        <li>Python is much in demand and ensures high salary</li>
      </ul>
      <br/>
      <p>Python is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Web Development Domain. I will list down some of the key advantages of learning Python:</p>
      <ul>
        <li>Python is Interpreted − Python is processed at runtime by the interpreter. You do not need to compile your program before executing it. This is similar to PERL and PHP.</li>
        <li>Python is Interactive − You can actually sit at a Python prompt and interact with the interpreter directly to write your programs.</li>
        <li>Python is Object-Oriented − Python supports Object-Oriented style or technique of programming that encapsulates code within objects.</li>
        <li>Python is a Beginner's Language − Python is a great language for the beginner-level programmers and supports the development of a wide range of applications from simple text processing to WWW browsers to games.</li>
      </ul>

      <h3 className='heading3'>Programming examples</h3>
      <div className='py-6 col-md-8 container'>
        <p>Hello world program:</p>
        <p className='program'>print('Hello, world!')</p>
      </div>
    </div>
      
    </>
  )
}

export default Python
