import React from 'react'
import {Link} from 'react-router-dom';



const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
   <div className="container-fluid">
    <Link className="navbar-brand " to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className='nav-link text-info' to='/'>Home</Link> 
        </li>
        <li>
         <Link className='nav-link text-info' to='/About'>AboutUs</Link> 
        </li>

        <li className="nav-item  dropdown" >
    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button" aria-expanded="false">Dropdown</Link>
    <ul className="dropdown-menu">
      <li><Link className="dropdown-item" to="/C">C Language</Link></li>
      <li><hr className="dropdown-divider"/></li>
      <li><Link className="dropdown-item" to="/java">Java</Link></li>
      <li><hr className="dropdown-divider"/></li>
      <li><Link className="dropdown-item" to="/python">Python</Link></li>
      <li><hr className="dropdown-divider"/></li>
      <li><Link className="dropdown-item" to="/cpp">C++</Link></li>
      <li><hr className="dropdown-divider"/></li>
      <li><Link className="dropdown-item" to="/javascript">Javascript</Link></li>
      <li><hr className="dropdown-divider"/></li>
      <li><Link className="dropdown-item" to="/">Separated link</Link></li>
    </ul>
  </li>
    </ul>
    </div>
  </div>
  </nav>
  )
}

export default Nav
