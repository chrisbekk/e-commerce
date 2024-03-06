import React, { useEffect } from 'react';
import { useShopCartContext } from '../../context/ShopCartContext';
import { AiOutlineShopping } from 'react-icons/ai';
export const ShoppingcartIcon = () => {
  const { items } = useShopCartContext();
  const calcCartLength = items.length > 0;
  //TODO: Fix cart items size: cartItems will clip when number of items reach a big enough number
  useEffect(() => {
    console.log('items:', items);
  }, [items]);
  return (
    <div className='relative'>
      <AiOutlineShopping className='text-3xl' />
      {calcCartLength && (
        <div className='absolute -right-1 top-0 flex h-4 w-4 items-center justify-center rounded-full border border-black bg-neutral-50'>
          <span className='text-xs text-neutral-900'>{items.length}</span>
        </div>
      )}
    </div>
  );
};
