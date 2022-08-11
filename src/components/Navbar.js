import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,  Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavBar() {
  return (
    <Navbar variant="dark" bg="dark"  expand="lg">
      
        <Navbar.Brand id='nav-logo'  to="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink  to="/" className='nav-link' id="RouterNavLink">Home</NavLink>
            <NavLink  to='/About'className='nav-link ' id="RouterNavLink">AboutUs </NavLink>
            <NavDropdown title="lang" id="basic-nav-dropdown">
              <NavDropdown.Item  ><Link className='nav-link text-dark '  to='/c'>C lang </Link></NavDropdown.Item>
              <NavDropdown.Item >
              <Link className='nav-link text-dark '  to='/Java'>Java lang</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link className='nav-link text-dark '  to='/Python'>Python lang </Link> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar;