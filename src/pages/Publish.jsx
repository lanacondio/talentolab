import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap';

function Publish() {
  const navigate = useNavigate();
  const { login } = useContext(CartContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageurl, setImageurl] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://682159b9259dad2655af008a.mockapi.io/api/v1/productos', {
        method: 'POST',
        body: JSON.stringify({ name, imageurl, description, price }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      console.log(data);
      navigate('/admin');
    } catch (error) {
      console.error('Error:', error);
      setError('Hubo un problema en la carga de productos');
    }

    setLoading(false);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="text-center mb-4">📦 Publicar nuevo producto</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {loading && (
            <div className="d-flex justify-content-center p-4">
              <Spinner animation="border" role="status" />
            </div>
          )}

          {!loading && (
            <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
              <Form.Group className="mb-3">
                <Form.Label>Nombre del producto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Campera Urban Fit"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Breve descripción del producto"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Precio ($)</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="Ej: 7999"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>URL de la imagen</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="https://..."
                  required
                  onChange={(e) => setImageurl(e.target.value)}
                />
              </Form.Group>

              <div className="d-grid">
                {imageurl && (
  <div className="text-center mt-3">
    <img src={imageurl} alt="preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
  </div>
)}
                <Button variant="dark" type="submit" size="lg">
                  Agregar producto
                </Button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Publish;