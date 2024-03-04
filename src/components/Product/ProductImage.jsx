import React from 'react';

export const ProductImage = ({ image }) => {
  const { url, alt } = image;
  return (
    <div className='mx-auto max-w-[560px] md:mx-0'>
      <img src={url} className='w-full' />
    </div>
  );
};
