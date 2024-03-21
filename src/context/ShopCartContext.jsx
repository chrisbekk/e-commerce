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

  const removeQuantity = (product) => {
    console.log(product);
    dispatch({
      type: 'REMOVE_QUANTITY',
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    console.log(product);
    dispatch({
      type: 'DELETE_FROM_CART',
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
  };

  const shoppingCart = {
    total: state.total,
    items: state.items,
    addToCart,
    removeQuantity,
    removeFromCart,
    clearCart,
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
