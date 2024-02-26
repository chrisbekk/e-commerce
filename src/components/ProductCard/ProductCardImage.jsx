import React from 'react';

export const ProductCardImage = ({ image }) => {
  return (
    <div className='h-full w-36 flex-none'>
      <img src={image.url} className='h-full w-full object-cover' />
    </div>
  );
};
