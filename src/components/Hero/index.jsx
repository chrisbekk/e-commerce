import React from 'react';
import { Wrapper } from '../Wrapper';
export const Hero = () => {
  return (
    <div className='relative h-[90vh] bg-neutral-950 pt-20 text-neutral-50'>
      <Wrapper>
        <img
          src='/hero-img.webp'
          alt='Hero'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-neutral-950 bg-opacity-80 '>
          <h1 className='text-3xl font-thin'>
            Digital<span className='font-normal text-lime-200'>Market</span>
          </h1>
          <p>
            One-Stop <span>Online Shopping</span>
          </p>
        </div>
      </Wrapper>
    </div>
  );
};
