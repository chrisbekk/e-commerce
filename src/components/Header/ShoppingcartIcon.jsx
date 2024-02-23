import React, { useMemo, useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
export const ShoppingcartIcon = () => {
  const [cartItems, setCartItems] = useState(0);
  const calcCartLength = useMemo(() => cartItems > 0);
  //TODO: Fix cart items size: cartItems will clip when number of items reach a big enough number
  return (
    <div className='relative'>
      <AiOutlineShopping className='text-3xl' />
      {calcCartLength && (
        <div className='absolute -right-1 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-50'>
          <span className='text-xs text-neutral-900'>{cartItems}</span>
        </div>
      )}
    </div>
  );
};
