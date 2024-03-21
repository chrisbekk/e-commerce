import React from 'react';
import { wordsToUpperCase } from '../../utils/wordsToUpperCase';
export const CarouselItem = ({ item, currentIndex }) => {
  const { id, title, discountedPrice, category, description, image } = item;
  return (
    <div
      className='relative h-full w-full flex-none transition-all duration-300 ease-in-out'
      style={{ translate: `${-100 * currentIndex}%` }}
    >
      <img src={image.url} className='h-full w-full object-cover' />

      <div className='absolute inset-0 bg-neutral-950 bg-opacity-40'>
        <div className='absolute bottom-0 flex flex-col  justify-center p-2'>
          <h1 className='text-2xl font-bold text-neutral-100'>
            {wordsToUpperCase(title)}
          </h1>
          <p className='font-light text-neutral-100'>{description}</p>
          <p className='text-white'>${discountedPrice}</p>
        </div>
      </div>
    </div>
  );
};
