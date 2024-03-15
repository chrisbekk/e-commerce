import React from 'react';
import { ItemDetails } from './ItemDetails';
import { ItemQuantity } from './ItemQuantity';
import { ItemPrice } from './ItemPrice';
import { RemoveItem } from './RemoveItem';
export const ShoppingCartItem = ({ item }) => {
  const { discountedPrice: price, id, image, quantity, title } = item;
  return (
    <div className='flex h-32 items-center justify-evenly border-b border-neutral-950 py-4 font-montserrat'>
      <ItemDetails image={image} title={title} />
      <ItemQuantity quantity={quantity} item={item} />
      <ItemPrice price={price} />
      <RemoveItem item={item} />
    </div>
  );
};
