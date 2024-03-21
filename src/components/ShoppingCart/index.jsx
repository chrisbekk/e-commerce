import React from 'react';
import { useState } from 'react';
import { useShopCartContext } from '../../context/ShopCartContext';
import { EmptyCart } from './EmptyCart';
import { ShopCartContainer } from './ShopCartContainer';
import { ShoppingCartItem } from './ShoppingCartItem';
import { Header } from './Header';
import { Modal } from '../Modal';
import { Footer } from './Footer';
export const ShoppingCart = () => {
  const [showModal, setShowModal] = useState(false);
  const { items, total } = useShopCartContext();
  if (items.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div>
      {showModal && <Modal setShowModal={setShowModal} />}
      <h1 className='my-10 text-center text-xl font-semibold sm:text-3xl'>
        Your Shopping Cart
      </h1>
      <ShopCartContainer>
        {items.map((item) => (
          <ShoppingCartItem key={item.id} item={item} />
        ))}
      </ShopCartContainer>
      <div>
        <Footer total={total} setShowModal={setShowModal} />
      </div>
    </div>
  );
};
