import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Modal, Button } from 'react-bootstrap';

function ModalCarrito({ mostrarModal, cerrarModal }) {
  const { carrito, eliminarProducto, vaciarCarrito } = useContext(CarritoContext);

  const sumaTotal = carrito.reduce(
    (acum, producto) => acum + producto.price * producto.cantidad,
    0
  );

  return (
    <Modal show={mostrarModal} onHide={cerrarModal}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {carrito.length === 0 ? (
          <h5>El Carrito está vacío</h5>
        ) : (
          carrito.map((producto) => (
            <div
              key={producto.id}
              style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
            >
              <p style={{ marginRight: "10px" }}>
                <strong>{producto.cantidad}</strong>
              </p>
              <img
                src={producto.image}
                alt={producto.title}
                style={{ width: "50px", marginRight: "10px" }}
              />
              <div style={{ flexGrow: 1 }}>
                <p>{producto.title}</p>
              </div>
              <div
                style={{ width: "80px", textAlign: "right", marginRight: "10px" }}
              >
                <p>${producto.price}</p>
              </div>
              <Button variant="danger" onClick={() => eliminarProducto(producto.id)}>
                Eliminar
              </Button>
            </div>
          ))
        )}
      </Modal.Body>
      <Modal.Footer><Button variant="danger" onClick={() => {
       vaciarCarrito();
  }}>
    Vaciar carrito
  </Button>
        <h5>Total: ${sumaTotal.toFixed(2)}</h5>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCarrito;
