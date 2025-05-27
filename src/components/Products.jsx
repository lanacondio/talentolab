import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';



function Products() {  
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      fetch('https://682159b9259dad2655af008a.mockapi.io/api/v1/productos')
        .then((respuesta) => respuesta.json())
        .then((datos) => setProductos(datos))
        .catch((error) => console.error('Error:', error));
    }, []);
  
  return (
    <>{productos.map((producto) => (
     <ProductCard product={producto}/>
    ))}</>
   
   
      );
}  


export default Products;  