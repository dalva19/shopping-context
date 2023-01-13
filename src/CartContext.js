import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (name, price, id) => {
    setItems((prevState) => [...prevState, { name, price, id }]);
  };

  const removeFromCart = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItems([...newList]);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
