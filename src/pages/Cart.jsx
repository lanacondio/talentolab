import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Table, Button, Container } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";


function Cart() {

  const {cart, removeFromCart} = useContext(CartContext);

  const [items, setItems] = useState(cart.map(product => ({ ...product, quantity: 1 })));

    const updateQuantity = (id, delta) => {
    setItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };
    
  const removeItem = (product) => {
     setItems(items => items.filter(item => item.id !== product.id));
    removeFromCart(product);
  };

   const handleCheckout = () => {
    toast.success('Procesando pago...');  
  };

  
  const total = items.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);

          return (
                <Container className="my-4">
      <h2>Tu Carrito</h2> 
           <img src={"src/img/cart-shopping-solid.svg"} width={"40px"} style={{float:'right', marginTop:"-40px"}} />
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio unitario</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${Number(item.price).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => updateQuantity(item.id, -1)}
                    >−</Button>{' '}
                    {item.quantity}{' '}
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => updateQuantity(item.id, 1)}
                    >+</Button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeItem(item)}
                    >Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h4>Total: ${total.toFixed(2)}</h4>
          <Button variant="primary" onClick={handleCheckout}>
            Pagar
          </Button>
<Button
  variant="outline-success"
  className="btn-whatsapp mt-3 d-flex align-items-center justify-content-center gap-2 fw-bold"
  style={{ borderColor: '#25D366', color: '#25D366' }}
  onClick={() => {
    const mensaje = items.map(item =>
      `• ${item.name} x${item.quantity} = $${(Number(item.price) * item.quantity).toFixed(2)}`
    ).join('\n') + `\n\nTotal: $${total.toFixed(2)}`;

    const encoded = encodeURIComponent(`Hola! Quiero comprar:\n\n${mensaje}`);
    window.open(`https://wa.me/5491137887299?text=${encoded}`, '_blank');
  }}
>
 <FaWhatsapp size={20} color="#25D366" className="whatsapp-icon"
  
 />
  Enviar pedido por WhatsApp
</Button>
          
        </>
      )}

      <ToastContainer />
    </Container>

          );
}



export default Cart;