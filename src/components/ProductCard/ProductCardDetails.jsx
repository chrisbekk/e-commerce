import React, { useRef } from 'react';
import { wordsToUpperCase } from '../../utils/wordsToUpperCase';
import { ProductTags } from './ProductTags';
export const ProductCardDetails = ({ title, tags, price, discountedPrice }) => {
  const formatedTitle = wordsToUpperCase(title);
  let priceContainer;
  if (discountedPrice < price) {
    priceContainer = (
      <div className='flex items-center gap-3'>
        <h2 className='w-fit rounded-sm bg-neutral-900 p-1 text-sm tracking-wide text-neutral-50 drop-shadow-md'>
          {discountedPrice}
        </h2>
        <h2 className='text-xs tracking-wide text-red-400 line-through opacity-60'>
          {price}
        </h2>
      </div>
    );
  } else {
    priceContainer = (
      <div>
        <h2 className='text-sm tracking-wide'>{price}</h2>
      </div>
    );
  }
  return (
    <div className='font-montserrat flex h-full w-full flex-col justify-evenly'>
      <div className='mt-6'>
        <h1 className='font-semibold tracking-wide'>{formatedTitle}</h1>
        {priceContainer}
      </div>

      <ProductTags tags={tags} />
    </div>
  );
};
