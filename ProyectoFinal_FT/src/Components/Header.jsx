import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header()
{
    return(
      <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./public/logo.png"
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Compumundo Hipermegared"
          />
        </Navbar.Brand>
        <div className="d-flex w-100 align-items-center">
          <div className="d-flex">
            <Nav.Link as={Link} to="/" className="me-3 fs-5 fst-italic">Joyeria</Nav.Link>
            <Nav.Link as={Link} to="/Masculina" className="me-3 fs-5 fst-italic">Ropa Masculina</Nav.Link>
            <Nav.Link as={Link} to="/Femenina" className='me-3 fs-5 fst-italic'>Ropa Femenina</Nav.Link>
            <Nav.Link as={Link} to="/Electronica" className='fs-5 fst-italic'>Electronica</Nav.Link>
          </div>
          <div className="d-flex ms-auto">
            <Nav.Link href="#Administration" className="me-4 fs-5 fst-italic">Administración</Nav.Link>
            <Nav.Link href="#cart">
              <img
                src="/Carrito.png"
                alt="Carrito de compras"
                width="30"
                height="30"
              />
            </Nav.Link>
          </div>
        </div>
      </Container>
    </Navbar>
    
        )
}

export default Header;

