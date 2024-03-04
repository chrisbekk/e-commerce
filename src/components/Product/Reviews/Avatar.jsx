import React from 'react';

export const Avatar = ({ username }) => {
  const firstLetter = username.charAt(0).toUpperCase();
  return (
    <div className='hidden size-20 items-center justify-center rounded-full bg-neutral-900 text-neutral-50 lg:flex'>
      <p className='text-3xl font-medium'>{firstLetter}</p>
    </div>
  );
};
