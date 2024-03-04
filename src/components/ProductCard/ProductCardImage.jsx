import React from 'react';

export const ProductCardImage = ({ image }) => {
  return (
    <div className='sm:h- h-full w-28 flex-none sm:w-36 md:h-[242px] md:w-full '>
      <img
        src={image.url}
        className='h-full w-full object-cover md:rounded-lg'
      />
    </div>
  );
};
