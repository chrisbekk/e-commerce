import React from 'react';

export const AddToCartBtn = ({ product }) => {
  const handleClick = () => {
    console.log('Product added to cart:', product.title);
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
