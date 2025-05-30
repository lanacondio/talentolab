import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button, Spinner, Alert } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAdded, setShowAdded] = useState(false);

  const link = `https://682159b9259dad2655af008a.mockapi.io/api/v1/productos/${id}`;

  useEffect(() => {
    fetch(link)
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar el producto');
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleBuy = () => {
    addToCart(product);
    navigate('/cart');
  };

  const handleAddToCart = () => {
    addToCart(product);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 1500);
  };

  if (loading) {
    return (
      <Container className="py-5 d-flex justify-content-center">
        <Spinner animation="border" role="status" />
      </Container>
    );
  }

  if (error || !product) {
    return (
      <Container className="py-5">
        <Alert variant="danger">{error || 'Producto no encontrado'}</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
     <motion.div
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="mb-4"
>
<Button 
  variant="outline-dark" 
  onClick={() => navigate('/products')} 
  className="d-flex align-items-center gap-2 my-3"
>
  <FaArrowLeft /> Volver a Productos
</Button>
</motion.div>
      <Row className="align-items-center">
        <Col md={6} className="text-center mb-4 mb-md-0">
        <Image 
  className='details-image' 
  src={product.imageurl} 
  alt={product.name} 
  fluid 
  style={{ 
    border: '1px solid #ccc', 
    borderRadius: '8px', 
    padding: '8px', 
    backgroundColor: '#fff' 
  }} 
/>
        </Col>
        <Col md={6}>
          <h2 className="mb-3">{product.name}</h2>
          <h4 className="text-success mb-3">${product.price}</h4>
          <p className="text-muted">{product.description}</p>

          <div className="d-grid gap-3 mt-4">
            <Button size="lg" variant="dark" onClick={handleBuy}>
              Comprar Ahora
            </Button>
            <Button size="lg" variant="outline-dark" onClick={handleAddToCart}>
              Agregar al Carrito
            </Button>
          </div>

          <AnimatePresence>
            {showAdded && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-3 text-success"
              >
                ✅ Producto agregado al carrito
              </motion.div>
            )}
          </AnimatePresence>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;