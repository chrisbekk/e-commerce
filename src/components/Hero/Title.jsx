import React from 'react';

export const Title = () => {
  return (
    <div className='absolute inset-0 flex flex-col items-center justify-center bg-neutral-950 bg-opacity-80 '>
      <h1 className='text-3xl font-thin sm:text-4xl lg:text-6xl'>
        Digital<span className='font-normal text-lime-200'>Market</span>
      </h1>
      <p className='mt-1 lg:mt-4 lg:text-xl lg:font-thin'>
        One-Stop <span>Online Shopping</span>
      </p>
    </div>
  );
};
