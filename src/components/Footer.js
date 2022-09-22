import React from 'react'

const Footer = () => {
  
  const page = ["Home","AboutUs","C Lang","Java","python","C++"]

  return (
    <div className=" container-fluid bg-light" >
  <footer className="row row-cols-5 py-5 my-5 border-top">
    <div className="col">
      
      <p className="text-muted">© 2022</p>
    </div>

    <div className="col">

    </div>

    <div className="col">
      <h5>Section 1</h5>
      <ul className="nav flex-column">
      {
        page.map(
          (value,index) => <li key={index} className="nav-item  mb-2"><a href="#" className="nav-link p-0 text-muted">{value}</a></li>
        )
        }
      </ul>
    </div>

    <div className="col">
      <h5>Section 1</h5>
      <ul className="nav flex-column">
      {
        page.map(
          (value,index) => <li key={index} className="nav-item  mb-2"><a href="#" className="nav-link p-0 text-muted">{value}</a></li>
        )
        }
      </ul>
    </div>

    

  </footer>
</div>
  )
}

export default Footer
