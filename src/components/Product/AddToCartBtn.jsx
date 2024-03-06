import React from 'react';
import { useShopCartContext } from '../../context/ShopCartContext';
export const AddToCartBtn = ({ product }) => {
  const { addToCart, items } = useShopCartContext();
  const handleClick = () => {
    addToCart(product);
    console.log(items);
  };
  return (
    <button
      onClick={handleClick}
      className='mt-10 w-10/12 rounded-full bg-neutral-900 py-2 text-xl text-neutral-50 md:mt-0'
    >
      Add to Cart
    </button>
  );
};
