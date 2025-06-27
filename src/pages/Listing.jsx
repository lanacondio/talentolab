import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Spinner, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Searcher from '../components/Searcher';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";


function Listing({ isCatalogo }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchProductos = async () => {
    try {
      const respuesta = await fetch('https://682159b9259dad2655af008a.mockapi.io/api/v1/productos');
      const datos = await respuesta.json();
      setProductos(datos);
    } catch (error) {
      console.error('Error:', error);
      setError('Hubo un problema en la carga de productos');
          toast.error('Hubo un problema en la carga de productos');  
    } finally {
      setCargando(false);
    }
  };

  const filteredProducts = productos.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este producto?')) return;

    try {
      await fetch(`https://682159b9259dad2655af008a.mockapi.io/api/v1/productos/${id}`, {
        method: 'DELETE',
      });
      setProductos((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error('Error al eliminar:', err);
      toast.error('Error al eliminar el producto.');  
    }
  };

  if (cargando)
    return (
      <div className="d-flex justify-content-center p-5">
        <Spinner animation="border" role="status" />
      </div>
    );

  if (error) return <Alert variant="danger" className="text-center mt-4">{error}</Alert>;

  return (
    <Container className="py-5">
     <Helmet>
      <title> Productos </title>
      <meta name="description" content="Explora nuestra variedad de productos" />
    </Helmet>

   
      {isCatalogo && (
        <>
        
        <div>
          <Searcher value={searchTerm} onChange={setSearchTerm} />
        </div>
        <div className="d-flex justify-content-end mb-4">
          <Link to="/publish">
            <Button variant="dark" size="lg">+ Agregar Producto</Button>
          </Link>
            
        </div>
         </>
      )}

       {!isCatalogo && (
        <div className="mb-3">
          <Searcher value={searchTerm} onChange={setSearchTerm} />
        </div>
      )}

      <Row xs={1} sm={2} md={3} lg={4} className="g-4" style={{listStyleType:"none"}}>
      {
        searchTerm != '' &&
        (
            filteredProducts.map((producto) => (
          <Col key={producto.id}>
            <ProductCard product={producto} isCatalogo={isCatalogo} onDelete={handleDelete} />
          </Col>
        ))
        )

      }
      {
          searchTerm == '' && 
          (
            productos.map((producto) => (
          <Col key={producto.id}>
            <ProductCard product={producto} isCatalogo={isCatalogo} onDelete={handleDelete} />
          </Col>
        ))
          )

      }
      </Row>
      <ToastContainer />
    </Container>
  );
}

export default Listing;