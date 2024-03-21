import React from 'react';
import { useShopCartContext } from '../../context/ShopCartContext';
export const ItemQuantity = ({ quantity, item }) => {
  const { addToCart, removeQuantity } = useShopCartContext();

  const handleAddToCart = () => {
    addToCart(item);
  };
  const handleRemoveQuantity = () => {
    removeQuantity(item);
  };
  return (
    <div className=' flex h-8 gap-1 '>
      <button
        onClick={handleAddToCart}
        className='size-8 bg-neutral-950 text-neutral-50'
      >
        +
      </button>
      <p className='flex size-8 items-center justify-center '>{quantity}</p>
      <button
        onClick={handleRemoveQuantity}
        className='size-8 bg-neutral-300 text-neutral-950'
      >
        -
      </button>
    </div>
  );
};
