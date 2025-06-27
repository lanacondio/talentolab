import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner, Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(CartContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://682159b9259dad2655af008a.mockapi.io/api/v1/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data?.message || 'Login fallido');

      login(data);
      navigate('/admin');
    } catch (error) {
      console.error('Error:', error);
      setError("Hubo un problema al iniciar sesión. Verificá tus datos.");
      toast.error("Hubo un problema al iniciar sesión. Verificá tus datos.");  
    }

    setLoading(false);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-sm p-4">
            <h3 className="text-center mb-3">Iniciar Sesión</h3>
            <p className="text-center text-muted mb-4">
              Accedé a tu cuenta para administrar productos o realizar compras
            </p>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresá tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresá tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="dark" type="submit" disabled={loading}>
                  {loading ? <Spinner size="sm" animation="border" /> : 'Ingresar'}
                </Button>
              </div>
            </Form>

           
          </Card>
        </Col>
      </Row>      
      <ToastContainer />
    </Container>
  );
}

export default Login;