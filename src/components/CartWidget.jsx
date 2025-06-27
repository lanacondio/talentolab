import { useContext,  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import  styled from 'styled-components'

const Image = styled.img`
  width:40px;`

  const Div = styled.div`
    color: white;
    margin-top: -37px;
    font-size: 17px;
    margin-left: 5px;
    font-weight: bolder;
`

const DivCartWidget = styled.div`
    position: relative;
  cursor: pointer;
  text-align: center;
`


function CartWidget() {

  const {cart} = useContext(CartContext);
const navigate = useNavigate();
  function handleCart(){
    navigate('/cart');
  }

      return (

       <DivCartWidget onClick={()=>handleCart()} >  
        <Image src={"src/img/cart-shopping-solid.svg"} />
        <Div>{cart.length}</Div>
       </DivCartWidget>
      );
}



export default CartWidget;