import React from 'react';
import { MdDelete } from 'react-icons/md';
export const RemoveItem = () => {
  return (
    <button className='p-4 hover:rounded-full hover:bg-neutral-300'>
      <MdDelete className='text-lg sm:text-xl' />
    </button>
  );
};
