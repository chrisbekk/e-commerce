import React from 'react';

export const ProductDescription = ({ description }) => {
  return (
    <div className='mt-6 text-lg font-medium md:w-9/12 md:text-xl'>
      {description}
    </div>
  );
};
