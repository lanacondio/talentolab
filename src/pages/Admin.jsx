import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Admin() {
  const { getUser } = useContext(CartContext);
  const user = getUser();

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="text-center mb-4">
            <h2 className="fw-bold">¡Hola, {user.name}!</h2>
            <p className="text-muted">Bienvenido al panel de administración</p>
          </div>

          <Card className="shadow-sm border-0 text-center">
            <Card.Img
              variant="top"
              src={user.avatar}
              alt={user.name}
              style={{
                maxHeight: '250px',
                objectFit: 'cover',
              }}
            />
            <Card.Body>
              <Card.Title className="mb-2">{user.name}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">{user.email}</Card.Subtitle>
              <Card.Text className="text-muted">Cuenta creada el: {new Date(user.createdAt).toLocaleDateString()}</Card.Text>

              <Link to="/publish">
                <Button variant="dark" size="lg">
                  + Agregar nuevo producto
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;