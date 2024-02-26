import React from 'react';
import { Wrapper } from '../components/Wrapper';
import { Products } from '../components/Products';

export const HomePage = () => {
  return (
    <div className='mt-20 bg-neutral-50'>
      <Wrapper>
        <Products />
      </Wrapper>
    </div>
  );
};
