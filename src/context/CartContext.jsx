import React, {createContext, useState} from "react";

export const CartContext = createContext();

function CartProvider ({children}){

    const[cart, setCart] = useState([]);
    const[user, setUser]= useState();
    
    const [isAuthenticated, setIsAuthenticated] = useState(null);
         

    const login= (user) => {
        setIsAuthenticated(true)
        setUser(user);
    }          

    const getUser =() =>{
        return user;
    }
    
    const logout =  ()=>{
        setIsAuthenticated(false)
    }
    
      

    const addToCart = (product) => {
        setCart([...cart,product]);
    }

    const deleteCart = () => {
        setCart([]);
    }

    const removeFromCart = (index) => {
        const newCartItems = [...cart];
        newCartItems.splice(index, 1);
        setCart(newCartItems);
      };


    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
      };
  
    return(
        <CartContext.Provider value={{cart, addToCart, deleteCart, removeFromCart, calculateTotal, login, logout, isAuthenticated, getUser}}>
            {children}
        </CartContext.Provider>

    );
};

export default CartProvider;