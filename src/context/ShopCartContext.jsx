import React, { useReducer } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import shopCartReducer, { initialState } from '../utils/shopCartReducer';
const ShopCartContext = createContext(initialState);
export const ShopCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopCartReducer, initialState);

  return (
    <ShopCartContext.Provider value={initialState}>
      {children}
    </ShopCartContext.Provider>
  );
};

export function useShopCartContext() {
  const context = useContext(ShopCartContext);

  if (context === undefined) {
    throw new Error('useShopCartContext must be used within ShopCartContext');
  }

  return context;
}
