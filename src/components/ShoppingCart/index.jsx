import React from 'react';
import { useShopCartContext } from '../../context/ShopCartContext';
import { EmptyCart } from './EmptyCart';
import { ShopCartContainer } from './ShopCartContainer';
import { ShoppingCartItem } from './ShoppingCartItem';
import { Header } from './Header';
import roundNumber from '../../utils/roundNumber';
export const ShoppingCart = () => {
  const { items, total } = useShopCartContext();

  console.log(items);
  console.log(total);
  return (
    <div>
      <h1 className='my-10 text-center text-xl font-semibold sm:text-3xl'>
        Your Shopping Cart
      </h1>
      <ShopCartContainer>
        {items.map((item) => (
          <ShoppingCartItem key={item.id} item={item} />
        ))}
      </ShopCartContainer>
      <div>
        <p>{roundNumber(total)}</p>
      </div>
    </div>
  );
};
