import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductCard({product}) {  
  let link ='/product/'+product.id;
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);


  return (
<li key={product.id} className="listing-item">
  <Link  to={link} className="product-link">
<Card style={{with:'20rem'}} className="h-100 shadow-sm border-0 product-card animate__animated animate__fadeIn">
  <div className="img-wrapper">
{!imgLoaded && (
          <div className="placeholder">
            <img src="src/img/placeholder.png" alt="cargando..." />
          </div>
        )}
  <Card.Img variant="top" className="card-image" src={product.imageurl}
   onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          style={imgLoaded ? {} : { display: 'none' }}
  />

  </div>


    
  <Card.Body>
    <Card.Title><span className="product-title">{product.name}</span>
    <span><strong className="product-price">${product.price}</strong></span>
    </Card.Title>
    
    <Card.Text><span className="product-description">{product.description}</span>
    
    </Card.Text>
  </Card.Body>
</Card></Link>
</li>
      );
}  


export default ProductCard;  