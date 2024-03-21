import React from 'react';
import { ItemImage } from './itemImage';
import { ItemQuantity } from './ItemQuantity';
import { ItemPrice } from './ItemPrice';
import { RemoveItem } from './RemoveItem';
import { ItemTitle } from './ItemTitle';
export const ShoppingCartItem = ({ item }) => {
  const { discountedPrice: price, id, image, quantity, title } = item;
  return (
    <div className='grid h-32 grid-cols-4 items-center justify-items-center  py-4 font-montserrat drop-shadow-md transition-all hover:bg-stone-50 sm:grid-cols-5'>
      <ItemImage image={image} />
      <ItemTitle title={title} />
      <ItemQuantity quantity={quantity} item={item} />
      <ItemPrice price={price} />
      <RemoveItem item={item} />
    </div>
  );
};
