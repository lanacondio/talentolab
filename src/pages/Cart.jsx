import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Table, Button, Container } from 'react-bootstrap';


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
    alert('Procesando pago...');  
  };

  
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
                  <td>${item.price.toFixed(2)}</td>
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
        </>
      )}
    </Container>

          );
}



export default Cart;