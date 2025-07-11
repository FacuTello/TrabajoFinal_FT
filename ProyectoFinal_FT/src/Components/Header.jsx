import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ModalCarrito from './ModalCarrito';
import { useState } from 'react';

function Header({ abrirModal }) 
{

  const [mostrarModal, setMostrarModal] = useState(false);


  const navigate = useNavigate();
  const isAuth = localStorage.getItem('auth') === 'true';

  const cerrarSesion = () => {
    localStorage.removeItem('auth');
    navigate('/Joyeria');
  };

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
            <Nav.Link as={Link} to="/Joyeria" className=" texto me-3 fs-5">Joyeria</Nav.Link>
            <Nav.Link as={Link} to="/Masculina" className=" texto me-3 fs-5">Ropa Masculina</Nav.Link>
            <Nav.Link as={Link} to="/Femenina" className='texto me-3 fs-5'>Ropa Femenina</Nav.Link>
            <Nav.Link as={Link} to="/Electronica" className='texto fs-5'>Electronica</Nav.Link>
          </div>
          <div className="d-flex ms-auto">
            <Nav.Link as={Link} to="/login" className=" texto me-4 fs-5">Administración</Nav.Link>
            {isAuth && (
          <>
            <Nav.Link as={Link} to="/Agregar" className="texto me-4 fs-5">Agregar</Nav.Link>
            <Nav.Link as={Link} to="/Joyeria" className="texto me-4 fs-5" onClick={cerrarSesion}>Cerrar Sesion</Nav.Link>
          </>
        )}
            <Nav.Link onClick={abrirModal}>
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
      { mostrarModal && (
  <ModalCarrito 
    mostrarModal={mostrarModal} 
    cerrarModal={() => setMostrarModal(false)} 
  />
)}
    </Navbar>
    
        )
}

export default Header;

