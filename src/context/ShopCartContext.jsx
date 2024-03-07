import React, { useReducer } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import shopCartReducer, { initialState } from '../utils/shopCartReducer';
const ShopCartContext = createContext(initialState);
export const ShopCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopCartReducer, initialState);

  const addToCart = (product) => {
    console.log(product);
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  };

  const calcTotal = () => {
    dispatch({
      type: 'UPDATE_TOTAL',
      payload: state.items,
    });
  };

  const shoppingCart = {
    total: state.total,
    items: state.items,
    addToCart,
    calcTotal,
  };

  return (
    <ShopCartContext.Provider value={shoppingCart}>
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
