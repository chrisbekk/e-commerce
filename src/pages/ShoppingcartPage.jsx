import React from 'react';
import { Wrapper } from '../components/Wrapper';

import { ShoppingCart } from '../components/ShoppingCart';
export const ShoppingcartPage = () => {
  return (
    <div className='mt-20 bg-neutral-50'>
      <Wrapper>
        <ShoppingCart />
      </Wrapper>
    </div>
  );
};
