import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Main() {  
    return (  


        <main style={{ padding: "20px", textAlign:"center" }}>  
             <div className="bg-light py-5 text-center">
        <h1 className="display-4 fw-bold">Ropa deportiva con estilo</h1>
        <p className="lead">Calzas, tops y camperas pensadas para rendir y destacar</p>
        <Button variant="dark" size="lg" href="#categorias">
              <Link to="/products" className="nav-link">Ver colección</Link>          
        </Button>
      </div>

<Container className="py-5 bg-white">
        <h2 className="text-center mb-4">¿Por qué elegirnos?</h2>
        <Row className="text-center">
          <Col md={4}>
            <h5 className="fw-bold">Diseño + Comodidad</h5>
            <p>Prendas pensadas para tu entrenamiento y tu día a día.</p>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold">Envíos a todo el país</h5>
            <p>Recibí tu pedido en casa o en tu gimnasio.</p>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold">Pagá en cuotas</h5>
            <p>Aceptamos tarjetas, transferencias y pagos online.</p>
          </Col>
        </Row>
      </Container>
        </main>  
    );  
}  
export default Main;  