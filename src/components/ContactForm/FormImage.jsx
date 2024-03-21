import React from 'react';

export const FormImage = () => {
  return (
    <div className='relative h-full'>
      <img
        src='/contact.webp'
        alt='Contact us'
        className='h-full object-cover'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 font-light text-neutral-50'>
        <h1 className='mb-2 text-xl'>Contact Us</h1>
        <p className='text-sm'>Feel free to drop us a line</p>
      </div>
    </div>
  );
};
