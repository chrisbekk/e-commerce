import React from 'react';
import { Title } from './Title';
export const Hero = () => {
  return (
    <div className='relative h-[90vh] bg-neutral-950 pt-20 text-neutral-50'>
      <img
        src='/hero-img.webp'
        alt='Hero'
        className='h-full w-full object-cover'
      />
      <Title />
    </div>
  );
};
