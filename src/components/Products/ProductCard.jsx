import React from 'react';

export const ProductCard = ({ product }) => {
  const { title, image, tags, price, discountedPrice } = product;
  return (
    <div className='border border-black'>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};
