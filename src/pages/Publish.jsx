import { CartContext } from '../context/CartContext';
import { useContext,useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";


function Publish() {  
  const { id } = useParams();
  const navigate = useNavigate();
  const { login } = useContext(CartContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [imageurl, setImageurl] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const nuevosErrores = {}

  let isEdit = id != null;

  const link = `https://682159b9259dad2655af008a.mockapi.io/api/v1/productos/${id}`;
   
  
 
      useEffect(() => {
      if(id){
          fetch(link)
          .then((res) => {
            if (!res.ok) throw new Error('No se pudo cargar el producto');
            return res.json();
          })
          .then((data) =>{
              setName(data.name);
              setDescription(data.description);
              setImageurl(data.imageurl);
              setPrice(data.price);
          } )
          .catch((err) => {setError(err.message); toast.error(err.message); })
          .finally(() => setLoading(false));
      } 
      }, []);
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if(!name.trim()){
      nuevosErrores.name="Debe ingresar un nombre";
    }

    if(!description.trim() || description.Length < 10){
      nuevosErrores.description="Debe ingresar una descripcion de al menos 10 caracteres";
    }

    if(!price || price<=0){
      nuevosErrores.price="El precio debe ser mayor a 0";
    }
    try {
      
      const response = await fetch(
        isEdit
          ? `https://682159b9259dad2655af008a.mockapi.io/api/v1/productos/${id}`
          : `https://682159b9259dad2655af008a.mockapi.io/api/v1/productos`,
        {
          method: isEdit ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, imageurl, description, price }),
        }
      );
      
      navigate('/publish-listing');
    } catch (error) {
      console.error('Error:', error);
      setError('Hubo un problema en la carga de productos');
       toast.error(error);
      
    }
    setLoading(false);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="text-center mb-4">📦 {isEdit? "Editar producto" : "Publicar nuevo producto"}   </h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {loading && (
            <div className="d-flex justify-content-center p-4">
              <Spinner animation="border" role="status" />
            </div>
          )}

          {!loading && (
            <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
              <Form.Group className="mb-3">
                <Form.Label>Nombre del producto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Campera Urban Fit"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Breve descripción del producto"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Precio ($)</Form.Label>
                <Form.Control
                  type="numeric"
                  min="0"
                  placeholder="Ej: 7999"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>URL de la imagen</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="https://..."
                  required
                  value={imageurl}
                  onChange={(e) => setImageurl(e.target.value)}
                />
              </Form.Group>

              <div className="d-grid">
                {imageurl && (
                <div className="text-center mt-3">
                  <img src={imageurl} alt="preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                </div>
              )}
                <Button variant="dark" type="submit" size="lg">
                  {isEdit ? 'Editar producto' : 'Agregar producto'}
                </Button>
              </div>
            </Form>
          )}
        </Col>
      </Row>      
      <ToastContainer />
    </Container>
  );
}

export default Publish;