import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useShopCartContext } from '../../context/ShopCartContext';
export const RemoveItem = ({ item }) => {
  const { removeFromCart } = useShopCartContext();
  const handleRemoveFromCart = () => {
    removeFromCart(item);
  };
  return (
    <button
      onClick={handleRemoveFromCart}
      className='p-4 hover:rounded-full hover:bg-neutral-300'
    >
      <MdDelete className='text-lg sm:text-xl' />
    </button>
  );
};
