import React from 'react';

export const ShopCartContainer = ({ children }) => {
  return (
    <div className='grid max-w-[900px] gap-y-2 p-4 sm:gap-y-5 sm:border sm:border-neutral-500 sm:p-10 md:mx-auto'>
      {children}
    </div>
  );
};
