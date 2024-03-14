import React from 'react';

export const ItemQuantity = ({ quantity }) => {
  return (
    <div className=' flex h-8 gap-1 '>
      <button className='size-8 bg-neutral-950 text-neutral-50'>+</button>
      <p className='flex size-8 items-center justify-center '>{quantity}</p>
      <button className='size-8 bg-neutral-300 text-neutral-950'>-</button>
    </div>
  );
};
