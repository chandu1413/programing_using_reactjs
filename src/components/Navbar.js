import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar variant="dark" bg="dark"  expand="lg">
      <Container>
        <Navbar.Brand ><Link className='nav-link ' to="/">Navbar</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to="/" className='nav-link '>Home</Link></Nav.Link>
            <Nav.Link ><Link className='nav-link ' to='/About'>AboutUs</Link> </Nav.Link>
            <NavDropdown className='nav-link ' title="lang" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link className='nav-link text-dark '  to='/c'>C lang</Link> </NavDropdown.Item>
              <NavDropdown.Item >
              <Link className='nav-link text-dark '  to='/Java'>Java lang</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link className='nav-link text-dark '  to='/Python'>Python lang</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;