import { createContext, useState } from 'react';

export const CartContext = createContext({});

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {
    item.quantity = quantity;
    setCartList([...cartList, item]);
  }

  const removeFromCart = (item) => {
    setCartList(item === undefined ? [] : cartList.filter(cartItem => cartItem.id !== item.id));
  }

  return (
    <CartContext.Provider value={{ addToCart, cartList, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;