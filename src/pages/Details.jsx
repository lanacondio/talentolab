import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import  { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function Details() {  
  
  const navigate = useNavigate();
  const {id} = useParams();
  const {addToCart} = useContext(CartContext);

  const [product, setProduct] = useState({});
  let link = "https://682159b9259dad2655af008a.mockapi.io/api/v1/productos/"+id
  
      useEffect(() => {
        fetch(link)
          .then((respuesta) => respuesta.json())
          .then((datos) => setProduct(datos))
          .catch((error) => console.error('Error:', error));
      }, []);

  function handleBuy(product){
    addToCart(product);    
     
    navigate('/cart');
  }

  return (
 <Container className='details-container'>
      <Row>
        <Col key={product.id} md={6}>
          <Image className='details-image' src={product.imageurl} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p><strong>Precio:</strong> ${product.price}</p>
          <p><strong>Detalle:</strong> {product.description}</p>
          {/* <p>Availability: {product.availability ? 'En Stock' : 'Sin Stock'}</p> */}
          <Button  onClick={()=> handleBuy(product)} variant="primary">Comprar Ahora</Button>
          <div style={{marginTop:"20px"}}>
            <Button  onClick={()=> addToCart(product)} variant="secondary">Agregar Al Carrito</Button>
          </div>
          
        </Col>
      </Row>
    </Container>


    
      );
}  


export default Details;  