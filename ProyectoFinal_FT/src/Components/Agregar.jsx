import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert, Table } from 'react-bootstrap';

function Agregar() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingId, setEditingId] = useState(null);

  
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const res = await fetch('https://6873f56bc75558e27355bf63.mockapi.io/api/products');
        const data = await res.json();
        setProductos(data);
      } catch (err) {
        console.error('Error al cargar productos', err);
      }
    };

    cargarProductos();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !category || price <= 0) {
      setError('Todos los campos son obligatorios y el precio debe ser mayor a 0.');
      setSuccess('');
      return;
    }

    const nuevoProducto = {
      title,
      price: Number(price),
      description,
      category,
      image: 'https://xentra.glomastore.mx/img/sin_imagen.png',
    };

    try {
      if (editingId) {

        const res = await fetch(`https://6873f56bc75558e27355bf63.mockapi.io/api/products/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(nuevoProducto),
        });

        const actualizado = await res.json();
        setProductos(productos.map(p => (p.id === actualizado.id ? actualizado : p)));
        setSuccess('Producto actualizado correctamente');
      } else {
        
        const res = await fetch('https://6873f56bc75558e27355bf63.mockapi.io/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(nuevoProducto),
        });

        const creado = await res.json();
        setProductos([...productos, creado]);
        setSuccess('Producto agregado exitosamente');
      }

      
      setTitle('');
      setPrice(0);
      setDescription('');
      setCategory('');
      setEditingId(null);
      setError('');
    } catch (err) {
      setError('Hubo un problema al guardar el producto');
      setSuccess('');
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://6873f56bc75558e27355bf63.mockapi.io/api/products/${id}`, {
        method: 'DELETE',
      });
      setProductos(productos.filter(p => p.id !== id));
    } catch (err) {
      console.error('Error al borrar', err);
    }
  };

  const handleEdit = (producto) => {
    setEditingId(producto.id);
    setTitle(producto.title);
    setPrice(producto.price);
    setDescription(producto.description);
    setCategory(producto.category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <div className="d-flex flex-column align-items-center">
              <h2>{editingId ? 'Editar producto' : 'Agregar nuevo producto'}</h2>
    
              {error && <Alert variant="danger" className="w-100">{error}</Alert>}
              {success && <Alert variant="success" className="w-100">{success}</Alert>}
    
              <Form
                onSubmit={handleSubmit}
                className="w-100 shadow p-4 rounded bg-light"
              >
                <Form.Group className="mb-3">
                  <Form.Label>Título</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
    
                <Form.Group className="mb-4">
                  <Form.Label>Categoría</Form.Label>
                  <Form.Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Seleccionar categoría</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="men's clothing">Men's Clothing</option>
                  </Form.Select>
                </Form.Group>
    
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    {editingId ? 'Guardar cambios' : 'Agregar producto'}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
    
        <hr />
    
        <h3 className="mt-4 text-center">Lista de productos (MockAPI)</h3>
    
        {productos.length === 0 ? (
          <p className="text-center">No hay productos cargados.</p>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th style={{ width: '150px' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.title}</td>
                  <td>${parseFloat(producto.price).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEdit(producto)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(producto.id)}
                    >
                      Borrar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    );
  
}

export default Agregar;


