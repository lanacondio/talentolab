import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import  styled from 'styled-components'

const Li = styled.li`
  flex: '0 0 calc(25% - 16px)';
    box-sizing: 'border-box';
  `

  const Div = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
  `
  const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
    max-Height: "100px";
   opacity: 0.5 ;
  `



function ProductCard({ product, isCatalogo, onDelete }) {
  const link = `/product/${product.id}`;
  const linkEdit = `/product-edit/${product.id}`;
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Li key={product.id} >
      <Card className="h-100 shadow-sm border rounded-4 overflow-hidden product-card animate__animated animate__fadeIn">
        <Link to={link} className="product-link text-decoration-none text-dark">
          <Div className="img-wrapper position-relative">
            {!imgLoaded && (
              <div className="placeholder position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-light">
                <Image
                  src="/placeholder.png"
                  alt="cargando..."
    
                />
              </div>
            )}
            <Card.Img
              variant="top"
              className="card-image"
              src={product.imageurl}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgLoaded(true)}
              style={imgLoaded ? {} : { display: "none" }}
            />
          </Div>
        </Link>

        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="d-flex justify-content-between align-items-center">
              <span className="fw-bold fs-5 product-name">{product.name}</span>
              <span className="text-success fw-semibold fs-6">${product.price}</span>
            </Card.Title>
            <Card.Text className="text-muted small product-description">
              {product.description?.slice(0, 80)}{product.description?.length > 80 ? '...' : ''}
            </Card.Text>
          </div>

          {isCatalogo && (
            <div className="d-flex gap-2 mt-3">
              <Link to={linkEdit} className="w-100">
                <Button variant="outline-dark" size="sm" className="w-100">Editar</Button>
              </Link>
              <Button
                variant="outline-danger"
                size="sm"
                className="w-100"
                onClick={() => onDelete(product.id)}
              >
                Eliminar
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </Li>
  );
}

export default ProductCard;