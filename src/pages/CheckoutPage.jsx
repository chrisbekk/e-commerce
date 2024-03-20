import React from 'react';
import { Wrapper } from '../components/Wrapper';
import { useShopCartContext } from '../context/ShopCartContext';
export const CheckoutPage = () => {
  const { items } = useShopCartContext();
  return (
    <div className='mt-20 bg-neutral-50'>
      <Wrapper></Wrapper>
    </div>
  );
};
