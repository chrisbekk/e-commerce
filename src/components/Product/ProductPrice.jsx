import React from 'react';

export const ProductPrice = ({ price, discountedPrice }) => {
  let currentPrice;
  if (discountedPrice < price) {
    currentPrice = (
      <div className='flex items-center gap-5'>
        <p>
          <span>USD </span> {discountedPrice}
        </p>
        <p className='text-lg text-neutral-700 line-through'>{price}</p>
      </div>
    );
  } else {
    currentPrice = <div>{price}</div>;
  }
  return (
    <div className='mt-5 text-2xl font-extrabold md:text-4xl'>
      {currentPrice}
    </div>
  );
};
