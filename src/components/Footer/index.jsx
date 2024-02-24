import React from 'react';
import { Wrapper } from '../Wrapper/index';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <div className='mt-auto bg-neutral-900 text-neutral-50'>
      <Wrapper>
        <div className='h-48 py-2 pl-2'>
          <h1 className='text-2xl font-thin'>
            <Link to='/'>
              Market<span className='font-semibold'>Place</span>
            </Link>
          </h1>
          <div className='flex flex-col sm:mt-10 sm:flex-row sm:justify-center sm:gap-5'>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/shopping-cart'>Shopping Cart</Link>
          </div>
          <div className='mt-4 flex sm:justify-center lg:justify-end'>
            <p className='pr-2 text-xs font-thin'>2024 Christian Bekkelund</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
