import React from 'react';
import { Wrapper } from '../components/Wrapper';
import { Products } from '../components/Products';

export const HomePage = () => {
  return (
    <div className='mt-20'>
      <Wrapper>
        <Products />
      </Wrapper>
    </div>
  );
};
