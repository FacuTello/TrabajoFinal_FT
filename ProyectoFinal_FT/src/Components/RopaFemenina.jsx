import { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { CarritoContext } from "../context/CarritoContext";

function RopaFemenina() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { agregarProducto } = useContext(CarritoContext);

  const Comprar = (producto) => {
    agregarProducto(producto);
    Swal.fire({
      title: "Compra Realizada",
      text: "Puedes ver tu compra en el carrito",
      icon: "success",
    });
  };

  useEffect(() => {
    async function cargarProductos() {
      try {
        const [productosOriginales, productosNuevos] = await Promise.all([
          fetch("https://fakestoreapi.com/products"),
          fetch("https://6873f56bc75558e27355bf63.mockapi.io/api/products"),
        ]);

        const dataOriginales = await productosOriginales.json();
        const dataNuevos = await productosNuevos.json();

        const todosProductos = [...dataOriginales, ...dataNuevos];

        const ropaFemenina = todosProductos.filter(
          (p) => p.category === "women's clothing"
        );
        setProductos(ropaFemenina);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    }

    cargarProductos();
  }, []);

  if (loading) return <p className="text-center mt-4">Cargando...</p>;

  return (
    <Container>
      <h1 className="text-center mt-4 mb-4 texto">Ropa Femenina</h1>
      <Row className="justify-content-center">
        {productos.map((producto) => (
          <Col key={producto.id} md={4} className="mt-4">
            <Card
              className="d-flex flex-column text-center rounded card"
              style={{
                width: "300px",
                height: "460px",
                border: "4px solid black",
              }}
            >
              <Card.Img
                src={producto.image}
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "0 auto",
                  marginTop: "20px",
                  objectFit: "contain",
                }}
              />
              <Card.Body className="d-flex flex-column">
                <div>
                  <Card.Title>{producto.title}</Card.Title>
                  <Card.Text
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {producto.description}
                  </Card.Text>
                </div>
                <div
                  className="d-flex justify-content-around align-items-end mt-auto"
                  style={{ height: "80px" }}
                >
                  <Card.Text className="precio">
                    <strong>${producto.price}</strong>
                  </Card.Text>
                  <Button variant="primary" onClick={() => Comprar(producto)}>
                    Comprar
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RopaFemenina;

