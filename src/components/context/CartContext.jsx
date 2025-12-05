import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

 
  const addToCart = (product, quantity) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { ...product, quantity }];
    });
  };


  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

 
  const clearCart = () => setCart([]);


  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);


  const totalPrice = cart.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}