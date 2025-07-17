// src/context/AppContext.jsx
import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [avatu, setAvatu] = useState([]);
  const [cart, setCart] = useState({});

  const addToCart = (itemId) => {
    const cartCopy = { ...cart };
    cartCopy[itemId] = (cartCopy[itemId] || 0) + 1;
    setCart(cartCopy);
  };

  const removeFromCart = (itemId) => {
    const cartCopy = { ...cart };
    if (cartCopy[itemId]) {
      cartCopy[itemId]--;
      if (cartCopy[itemId] === 0) delete cartCopy[itemId];
      setCart(cartCopy);
    }
  };

  return (
    <AppContext.Provider value={{ avatu,setAvatu, cart, addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for consuming the context
export const useAppContext = () => useContext(AppContext);
