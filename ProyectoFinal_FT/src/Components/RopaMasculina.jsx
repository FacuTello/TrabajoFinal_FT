import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function RopaMasculina()
{
    const[productos, setProductos]=useState([]);
    const[loading, setLoading]=useState(true);

    useEffect(()=>
    {
        fetch('https://fakestoreapi.com/products')
        .then(res=> res.json())
        .then(data => {
            const filtrados = data.filter(producto => producto.category === "men's clothing");
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
            <h1 className="text-center mt-4 mb-4 texto">Ropa Masculina</h1>
            <Row className="justify-content-center">
                {productos.map(producto=>(    
                    <Col md={4} className="mt-4" key={producto.id}>
                        <Card className="d-flex flex-column text-center rounded card" style={{ width: '300px', height: '460px', border: '4px solid black' }}>
  <Card.Img src={producto.image} style={{ width: '200px', height: '200px', margin: '0 auto', marginTop: '20px' }} />
  <Card.Body className="d-flex flex-column">
    <div>
      <Card.Title>{producto.title}</Card.Title>
      <Card.Text style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{producto.description}</Card.Text>
    </div>
    <div className="d-flex justify-content-between align-items-center mt-auto align-items-baseline" style={{ height: '80px' }}>
      <Card.Text className="precio"><strong>${producto.price}</strong></Card.Text>
      <Button variant="primary">Comprar</Button>
    </div>
  </Card.Body>
</Card>

    </Col>
    ))}
            </Row>
        </Container>
    )
}

export default RopaMasculina;