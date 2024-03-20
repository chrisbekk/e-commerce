import React from 'react';

export const ItemImage = ({ image }) => {
  return (
    <div className='mr-4 hidden size-10 sm:block sm:size-24'>
      <img className='aspect-square size-full object-fill' src={image.url} />
    </div>
  );
};
