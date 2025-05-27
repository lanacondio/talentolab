import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({product}) {  
  let link ='/product/'+product.id;

  return (
<li key={product.id} className="listing-item">
  <Link  to={link} className="product-link">
<Card style={{with:'20rem'}} className="shadow border-0">
  <Card.Img variant="top" className="card-image" src={product.imageurl} />
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