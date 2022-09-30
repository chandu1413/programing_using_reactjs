import React from 'react';
import "./Cpp.css";
const Cpp = () => {
  const oa='<';
  const oc='>';
  const otag='{';
  const ctag='}';
  return (
    <>
      <img className='cppimg'  src='images/cpp.jpg' alt='js' />
      <div className='container'>
        <h1>C++ Programming Language</h1>
        <hr/>
        <p><strong> C++ </strong> is a general-purpose programming language that was developed as an enhancement of the C language to include object-oriented paradigm. It is an imperative and a compiled language. </p>
        <div className='py-6 col-md-6 container-fluid'>
          <img className='cpp-img-2 ' alt='cpp-process' src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190430122723/cpp-program-compilation3-1024x375.png'/>
        </div>
        <br/>
        <p>C++ is a middle-level language rendering it the advantage of programming low-level (drivers, kernels) and even higher-level applications (games, GUI, desktop apps etc.). The basic syntax and code structure of both C and C++ are the same. </p>
         <p>C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle, and IBM, so it is available on many platforms.</p>
        <p>C++ was designed with systems programming and embedded, resource-constrained software and large systems in mind, with performance, efficiency, and flexibility of use as its design highlights. C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications, including desktop applications, video games, servers (e.g. e-commerce, web search, or databases), and performance-critical applications (e.g. telephone switches or space probes).</p>
        <p>C++ is standardized by the International Organization for Standardization (ISO), with the latest standard version ratified and published by ISO in December 2020 as ISO/IEC 14882:2020 (informally known as C++20). The C++ programming language was initially standardized in 1998 as ISO/IEC 14882:1998, which was then amended by the C++03, C++11, C++14, and C++17 standards. The current C++20 standard supersedes these with new features and an enlarged standard library. Before the initial standardization in 1998, C++ was developed by Stroustrup at Bell Labs since 1979 as an extension of the C language; he wanted an efficient and flexible language similar to C that also provided high-level features for program organization. Since 2012, C++ has been on a three-year release schedule with C++23 as the next planned standard.</p>
        <p>Some of the features & key-points to note about the programming language are as follows:</p>
        <ul>
          <li><strong>Simple:</strong> It is a simple language in the sense that programs can be broken down into logical units and parts, has a rich library support and a variety of data-types.</li>
          <li><strong>Machine Independent but Platform Dependent:</strong> A C++ executable is not platform-independent (compiled programs on Linux won’t run on Windows), however they are machine independent.</li>
          <li><strong>Mid-level language:</strong> It is a mid-level language as we can do both systems-programming (drivers, kernels, networking etc.) and build large-scale user applications (Media Players, Photoshop, Game Engines etc.)</li>
          <li><strong>Rich library support:</strong> Has a rich library support (Both standard ~ built-in data structures, algorithms etc.) as well 3rd party libraries (e.g. Boost libraries) for fast and rapid development.</li>
          <li><strong>Speed of execution:</strong> C++ programs excel in execution speed. Since, it is a compiled language, and also hugely procedural. Newer languages have extra in-built default features such as garbage-collection, dynamic typing etc. which slow the execution of the program overall. Since there is no additional processing overhead like this in C++, it is blazing fast.</li>
          <li><strong>Pointer and direct Memory-Access:</strong> C++ provides pointer support which aids users to directly manipulate storage address. This helps in doing low-level programming (where one might need to have explicit control on the storage of variables).</li>
          <li><strong>Object-Oriented:</strong> One of the strongest points of the language which sets it apart from C. Object-Oriented support helps C++ to make maintainable and extensible programs. i.e. Large-scale applications can be built. Procedural code becomes difficult to maintain as code-size grows.</li>
          <li><strong>Compiled Language:</strong> C++ is a compiled language, contributing to its speed.</li>
        </ul>
        <h3>Applications of C++: </h3>
        <p>C++ finds varied usage in applications such as:</p>
        <ul>
          <li>Operating Systems & Systems Programming. e.g. Linux-based OS (Ubuntu etc.)</li>
          <li>Browsers (Chrome & Firefox)</li>
          <li>Graphics & Game engines (Photoshop, Blender, Unreal-Engine)</li>
          <li>Database Engines (MySQL, MongoDB, Redis etc.)</li>
          <li>Cloud/Distributed Systems</li>
        </ul>
        <h2>History</h2>
        <hr/>
        <div className='container-fluid row'>
          <div className='col-md-9'>
            <p>In 1979, Bjarne Stroustrup, a Danish computer scientist, began work on "C with Classes", the predecessor to C++.[17] The motivation for creating a new language originated from Stroustrup's experience in programming for his PhD thesis. Stroustrup found that Simula had features that were very helpful for large software development, but the language was too slow for practical use, while BCPL was fast but too low-level to be suitable for large software development. When Stroustrup started working in AT&T Bell Labs, he had the problem of analyzing the UNIX kernel with respect to distributed computing. Remembering his PhD experience, Stroustrup set out to enhance the C language with Simula-like features.[18] C was chosen because it was general-purpose, fast, portable and widely used. As well as C and Simula's influences, other languages also influenced this new language, including ALGOL 68, Ada, CLU and ML.</p>
            <p>Initially, Stroustrup's "C with Classes" added features to the C compiler, Cpre, including classes, derived classes, strong typing, inlining and default arguments.</p>

          </div>
          <div className='col-md-3'>
            <img className='Bjarne-img' src='https://upload.wikimedia.org/wikipedia/commons/d/da/BjarneStroustrup.jpg' alt='Bjarne Stroustrup'/>
          </div>
          <div className='col-md-3'>
            <img className='Stroustrup-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/20160121_CppFRUG_Joel_Falcou_CppQuiz_3.jpg/330px-20160121_CppFRUG_Joel_Falcou_CppQuiz_3.jpg' alt='Stroustrup'/>
          </div>
          <div className='col-md-9'>
            <p>In 1982, Stroustrup started to develop a successor to C with Classes, which he named "C++" (++ being the increment operator in C) after going through several other names. New features were added, including virtual functions, function name and operator overloading, references, constants, type-safe free-store memory allocation (new/delete), improved type checking, and BCPL style single-line comments with two forward slashes (//). Furthermore, Stroustrup developed a new, standalone compiler for C++, Cfront.</p>
            <p>In 1984, Stroustrup implemented the first stream input/output library. The idea of providing an output operator rather than a named output function was suggested by Doug McIlroy[1] (who had previously suggested Unix pipes).</p>
            <p>In 1985, the first edition of The C++ Programming Language was released, which became the definitive reference for the language, as there was not yet an official standard.[20] The first commercial implementation of C++ was released in October of the same year.[17]</p>
            
          </div>
          <p>In 1989, C++ 2.0 was released, followed by the updated second edition of The C++ Programming Language in 1991.[21] New features in 2.0 included multiple inheritance, abstract classes, static member functions, const member functions, and protected members. In 1990, The Annotated C++ Reference Manual was published. This work became the basis for the future standard. Later feature additions included templates, exceptions, namespaces, new casts, and a Boolean type.</p>
          <p>In 1998, C++98 was released, standardizing the language, and a minor update (C++03) was released in 2003.</p>
          <p>After C++98, C++ evolved relatively slowly until, in 2011, the C++11 standard was released, adding numerous new features, enlarging the standard library further, and providing more facilities to C++ programmers. After a minor C++14 update released in December 2014, various new additions were introduced in C++17.[22] After becoming finalized in February 2020,[23] a draft of the C++20 standard was approved on 4 September 2020 and officially published on 15 December 2020.</p>
          <p>On January 3, 2018, Stroustrup was announced as the 2018 winner of the Charles Stark Draper Prize for Engineering, "for conceptualizing and developing the C++ programming language".[</p>
          <p>As of 2022 C++ ranked fourth on the TIOBE index, a measure of the popularity of programming languages, after Python, C and Java.[</p>
        </div>
        <h2>C++ Program</h2>
        <p>In this tutorial, all C++ programs are given with C++ compiler so that you can easily change the C++ program code.</p>
        <p>File: main.cpp</p>
        <div className='container col-md-6'>
          <span>#include {oa}iostream{oc}  </span>
          <br/>
          <span>using namespace std; </span>
          <br/>
          <span>int main() {otag}</span>
          <br/>
          <span>cout {oa}{oa} "Hello C++ Programming";  </span>
          <br/>
          <span>return 0;  </span>
          <br/>
          <span>{ctag}</span>
        </div>
      </div>

    </>
  )
}

export default Cpp
