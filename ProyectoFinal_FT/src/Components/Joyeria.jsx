import { Container, Card, Row, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Joyeria()
{
    const[productos, setProductos]=useState([]);
    const[loading, setLoading]=useState(true);

    useEffect(()=>
    {
        fetch('https://fakestoreapi.com/products')
        .then(res=> res.json())
        .then(data => {
            const filtrados = data.filter(producto => producto.category === 'jewelery');
            setProductos(filtrados);
            setLoading(false);
        })
        .catch(err =>{
            console.error("Error en la carga de la API");
            setLoading(true);
        })

    },[])
    
    return (
        <Container>
            <h1 className="text-center mt-4 mb-4">Productos de Joyeria</h1>
            <Row className="justify-content-center">
                {productos.map(producto=>(    
                    <Col md={4} className="mt-4" key={producto.id}>
                        <Card className="text-center" style={{ width: '90%', height: '100%' }}>
                            <Card.Img variant="top" src={producto.image} style={{ width: '200px', height: '200px', margin: '0 auto'}}/>
                            <Card.Body>
                                <Card.Title>{producto.title}</Card.Title>
                                <Card.Text>Plata Autentica</Card.Text>
                                <a href="#" className="btn btn-primary">Comprar</a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Joyeria;