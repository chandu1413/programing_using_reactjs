import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div className=" container-fluid bg-dark" >
  <footer className="row row-cols-3 py-5 my-0 border-top">
    <div className="col">
      <p className="text-muted">© 2022</p>
    </div>
    <div className="col nav-item  mb-2">
      
      <Link className="nav-link p-2 text-muted" to="/">Home</Link>
      <Link className="nav-link p-2 text-muted" to="/contactus">ContactUs</Link>
      
    </div>
    <div className="col nav-item  mb-5">
      <h5 className=" text-light">Languages</h5>
      <Link className="nav-link p-1 text-muted" to="/c">C Language</Link>
      <Link className="nav-link p-1 text-muted" to="/Java">Java Language</Link>
      <Link className="nav-link p-1 text-muted" to="/Python">Python Language</Link>
      <Link className="nav-link p-1 text-muted" to="/javascript">JavaScript Language</Link>
      <Link className="nav-link p-1 text-muted" to="/cpp">C++ Language</Link>
    </div>
  </footer>
</div>
  )
}

export default Footer
