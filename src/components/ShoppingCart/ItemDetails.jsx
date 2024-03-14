import React from 'react';
import { wordsToUpperCase } from '../../utils/wordsToUpperCase';
export const ItemDetails = ({ image, title }) => {
  return (
    <div>
      <div className='flex items-center gap-x-4'>
        <img
          className='aspect-square size-10 object-fill sm:block sm:size-24'
          src={image.url}
        />
        <p className='sm: max-w-[80px] text-sm font-semibold'>
          {wordsToUpperCase(title)}
        </p>
      </div>
    </div>
  );
};
