import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { CarritoContext } from '../context/CarritoContext';
import { useContext } from 'react';

function Header({ abrirModal }) {
  const { user, logout } = useAuth();
  const { carrito } = useContext(CarritoContext);

  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="md" className="py-2">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="./public/logo.png"
            width="80"  
            height="80"
            className="d-inline-block align-top"
            alt="Compumundo Hipermegared"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-md-0 fs-5">
            <Nav.Link as={Link} to="/Joyeria" className="texto">Joyería</Nav.Link>
            <Nav.Link as={Link} to="/Masculina" className="texto">Ropa Masculina</Nav.Link>
            <Nav.Link as={Link} to="/Femenina" className="texto">Ropa Femenina</Nav.Link>
            <Nav.Link as={Link} to="/Electronica" className="texto">Electrónica</Nav.Link>
          </Nav>

        
          <Nav className="ms-auto align-items-center fs-5">
            {!user && (
              <Nav.Link as={Link} to="/login" className="texto me-3">
                Login
              </Nav.Link>
            )}

            {user && (
              <>
                <Nav.Link as={Link} to="/Agregar" className="texto me-3">Agregar</Nav.Link>
                <Nav.Link onClick={logout} className="texto me-3">Cerrar sesión</Nav.Link>
              </>
            )}

            <Nav.Link onClick={abrirModal} className="position-relative d-flex align-items-center">
                  <img
                    src="/Carrito.png"
                    alt="Carrito de compras"
                    width="30"
                    height="30"
                  />
                  {carrito.length > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {carrito.length}
                    </span>
                  )}
                </Nav.Link>
                          </Nav>
                        </Navbar.Collapse>
                      </Container>
                    </Navbar>
  );
}

export default Header;


