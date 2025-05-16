import { useEffect, useState } from "react";
import { Card, ListGroup} from "react-bootstrap";

function Productos(){

    const[productos, setProductos]=useState([]);
    const[loading, setLoading]=useState(true);

    useEffect(()=>
    {
        fetch('https://fakestoreapi.com/products')
        .then(res=> res.json())
        .then(data => {
            const filtrados = data.filter(producto => producto.category === 'electronics');
            setProductos(filtrados);
            setLoading(false);
        })
        .catch(err =>{
            console.error("Error en la carga de la API");
            setLoading(true);
        })

    },[])


    return(
    <div>
        <h1 className="text-center mt-4 mb-4">Productos Destacados</h1>
        <div className="d-flex gap-4">
            {productos.map(producto=>(
            <Card key={producto.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={producto.image} />
              <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>
                  {producto.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item><strong>${producto.price}.00</strong></ListGroup.Item>
              </ListGroup>
            </Card>
            
            ))}
        </div>
    </div>
          );
    
}

export default Productos;