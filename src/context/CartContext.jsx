import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();
CartContext.displayName = "CartContext";

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCardContext must be used within a CartProvider");
  }
  return context;
};

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { itemNum: 13, units: 0 },
    { itemNum: 16, units: 0 },
    { itemNum: 18, units: 0 },
  ]);

  const cartItemsObject = useMemo(() => {
    return [cartItems, setCartItems];
  }, [cartItems, setCartItems]);

  return (
    <CartContext.Provider value={cartItemsObject}>
      {children}
    </CartContext.Provider>
  );
};
