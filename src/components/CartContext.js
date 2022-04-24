import { createContext, useState } from "react";

export const CartContext = createContext({});

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {
    let itemFound;
    item.quantity = Math.min(
      ((itemFound = cartList.find((elem) => elem.id === item.id)) !== undefined
        ? itemFound.quantity
        : 0) + quantity,
      item.stock
    );
    setCartList([...cartList.filter((elem) => elem.id !== item.id), item]);
  };

  const removeFromCart = (item) => {
    setCartList(
      item === undefined
        ? []
        : cartList.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const priceFormat = (num) =>
    num.toLocaleString("es-ES", { style: "currency", currency: "ARS" });

  const getSubtotal = () => {
    let price = 0;

    cartList.forEach((item) => {
      price += item.price * item.quantity;
    });

    return price;
  };

  const getTaxes = () => getSubtotal() * 0.21;

  const getTotal = () => getSubtotal();

  const getTotalItems = () => {
    let count = 0;

    cartList.forEach((item) => {
      count += item.quantity;
    });

    return count;
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartList,
        removeFromCart,
        getTotalItems,
        getTotal,
        getTaxes,
        getSubtotal,
        priceFormat,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
