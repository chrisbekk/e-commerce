import React from 'react';
import { wordsToUpperCase } from '../../utils/wordsToUpperCase';
import { useNavigate } from 'react-router-dom';
export const CarouselItem = ({ item, currentIndex }) => {
  const { id, title, discountedPrice, description, image } = item;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className='relative h-full w-full flex-none transition-all duration-300 ease-in-out hover:cursor-pointer'
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
