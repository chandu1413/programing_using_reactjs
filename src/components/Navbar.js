import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,  Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavBar() {
  return (
    <Navbar variant="dark" bg="dark"  expand="lg">
      
        <Navbar.Brand id='nav-logo'  to="/">Programs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink  to="/" className='nav-link' id="RouterNavLink">Home</NavLink>
            <NavLink  to='/Contactus' className='nav-link ' id="RouterNavLink">ContactUS</NavLink>
            <NavDropdown title="Languages" id="basic-nav-dropdown">
              <NavDropdown.Item  ><Link className='nav-link text-dark '  to='/c'>C Language </Link></NavDropdown.Item><NavDropdown.Item >
              <Link className='nav-link text-dark '  to='/Java'>Java Language</Link> </NavDropdown.Item>
              <NavDropdown.Item ><Link className='nav-link text-dark '  to='/Python'>Python Language </Link> </NavDropdown.Item>
              <NavDropdown.Item  ><Link className='nav-link text-dark '  to="/javascript" >JavaScript Language</Link></NavDropdown.Item>
              <NavDropdown.Item  ><Link className='nav-link text-dark '  to='/cpp'>C++ Language</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar;