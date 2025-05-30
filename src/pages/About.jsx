import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function About() {
  return (
    <Container className="py-5">
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <img
            src={"src/img/gallery-4.png"}
            alt="Equipo Wild Urban Sport"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6} className="animate__animated animate__fadeInRight">
          <h2 className="mb-4">¿Quiénes somos?</h2>
          <p>
            <strong>Wild Urban Sport</strong> nació durante la pandemia con la
            visión de ofrecer ropa deportiva cómoda, moderna y accesible. Desde
            nuestros comienzos en el AMBA, nos expandimos hasta convertirnos en
            un referente en el mundo del fitness urbano.
          </p>
          <p>
            Ofrecemos productos de alta calidad que se adaptan a tu estilo de
            vida activo, sin descuidar el diseño ni tu bolsillo.
          </p>
        </Col>
      </Row>

      <Row className="text-center mb-5">
        <Col md={4}>
          <h5 className="fw-bold">Misión</h5>
          <p>Empoderar a las personas a través del deporte y la moda.</p>
        </Col>
        <Col md={4}>
          <h5 className="fw-bold">Visión</h5>
          <p>
            Ser la marca deportiva líder en innovación, calidad y cercanía en
            Latinoamérica.
          </p>
        </Col>
        <Col md={4}>
          <h5 className="fw-bold">Valores</h5>
          <p>Compromiso, autenticidad, superación y comunidad.</p>
        </Col>
      </Row>

      <div className="text-center">
        <h4 className="mb-3">Conocé nuestra colección</h4>
        <Link to="/products">
          <Button variant="dark">Explorar productos</Button>
        </Link>
      </div>
    </Container>
  );
}

export default About;