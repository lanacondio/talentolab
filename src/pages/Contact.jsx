import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setEnviado(false);
    setError('');
    setLoading(true);

    emailjs.sendForm(
      'service_zcz8xgl',      // 👈 Reemplazá esto
      'template_vi9zcsj',     // 👈 Reemplazá esto
      formRef.current,
      '_-w5H12B6yyA4Ngf-'
    )
    .then(() => {
      setEnviado(true);
      formRef.current.reset();
    })
    .catch(() => {
      setError('Ocurrió un error al enviar el mensaje. Intentá nuevamente.');
    })
    .finally(() => setLoading(false));
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col md={6} className="mb-4">
          <h2 className="mb-3 text-center">Contactanos</h2>

          {enviado && <Alert variant="success">📩 ¡Mensaje enviado con éxito!</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form ref={formRef} onSubmit={handleSend}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="from_email" placeholder="Tu email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" placeholder="Escribí tu mensaje" required />
            </Form.Group>

            <div className="d-grid">
              <Button variant="dark" type="submit" disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : 'Enviar'}
              </Button>
            </div>
          </Form>
        </Col>

        <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
          <h5 className="mb-3">Nuestra Ubicación</h5>
          <div className="w-100" style={{ height: "300px", borderRadius: "8px", overflow: "hidden" }}>
            <iframe
              title="Ubicación Wild Urban Sport"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.027653427146!2d-58.32060252427693!3d-34.71247137292415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3327bc84d819b%3A0xeebdccfc8275eee4!2sCnel.%20Lynch%20450%2C%20B1875%20Bernal%20Oeste%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716489588881!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <small className="text-muted mt-2 text-center">Lynch 450, Avellaneda, Buenos Aires, Argentina</small>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;