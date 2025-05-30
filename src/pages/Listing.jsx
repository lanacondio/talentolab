import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Spinner } from 'react-bootstrap';

function Listing() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://682159b9259dad2655af008a.mockapi.io/api/v1/productos')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Hubo un problema en la carga de productos');
        setCargando(false);
      });
  }, []);

  if (cargando)
    return (
      <div className="d-flex justify-content-center p-5">
        <Spinner animation="border" role="status" />
      </div>
    );

  if (error) return <p className="text-danger text-center mt-4">{error}</p>;

  return (
    <ul className="listing-container d-flex justify-content-center list-unstyled">
      {productos.map((producto) => (
        <li key={producto.id}>
          <ProductCard product={producto} />
        </li>
      ))}
    </ul>
  );
}

export default Listing;