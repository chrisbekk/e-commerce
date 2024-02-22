import React from 'react';
import { Wrapper } from '../Wrapper';
export const Header = () => {
  return (
    <div className='bg-neutral-900 text-neutral-50 h-20'>
      <Wrapper>
        <div className='h-full flex justify-center items-center'>
          <h1 className='font-thin text-2xl border'>
            Digital<span className='font-semibold'>Market</span>
          </h1>
        </div>
      </Wrapper>
    </div>
  );
};
