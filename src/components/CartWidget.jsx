import { useContext,  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
 

function CartWidget() {

  const {cart} = useContext(CartContext);
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