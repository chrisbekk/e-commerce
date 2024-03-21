import React from 'react';

export const Header = () => {
  const headerItems = ['Description', 'Quantity', 'Remove', 'Price'];
  return (
    <div className='flex justify-between border-b border-neutral-900'>
      {headerItems.map((item) => (
        <p className='text-sm font-semibold'>{item}</p>
      ))}
    </div>
  );
};
