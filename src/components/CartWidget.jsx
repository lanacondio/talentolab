import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell ,faCoffee} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
 

function CartWidget() {

  const {cart, deleteCart} = useContext(CartContext);
const navigate = useNavigate();
  function handleCart(){
    navigate('/cart');
  }

      return (

       <div onClick={()=>handleCart()} className="cart-widget">  
        <img src={"src/img/cart-shopping-solid.svg"} width={"40px"} />
        <div className="qty-display">{cart.length}</div>
       </div>
      );
}



export default CartWidget;