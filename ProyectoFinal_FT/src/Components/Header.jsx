import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



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
          <Nav className="me-auto">
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#features">Ofertas</Nav.Link>
            <Nav.Link href="#pricing">Quienes Somos</Nav.Link>
            <Nav.Link className='administracion' href="#Administration">Administracion</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
        )
}

export default Header;

<img
                    src="./public/logo.png"
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                    alt="Compumundo Hipermegared"
                    />