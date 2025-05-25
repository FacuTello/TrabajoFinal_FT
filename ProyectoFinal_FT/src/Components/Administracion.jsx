import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container} from "react-bootstrap";


function Administracion()
{
    return (
    <Container className='d-flex flex-column align-items-center' style={{width : '100%'}}>
        <Form style={{width: '400px' }}>
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Label><strong>Correo:</strong></Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo" />
            <Form.Text className="text-muted">
              No compartiremos tu correo con nadie.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><strong>Contraseña:</strong></Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button className='mt-2' variant="primary" type="submit">
            Aceptar
          </Button>
        </Form>
    </Container>
      );
}

export default Administracion;