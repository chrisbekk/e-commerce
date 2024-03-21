import React from 'react';
import roundNumber from '../../utils/roundNumber';
import { useNavigate } from 'react-router-dom';
import { useShopCartContext } from '../../context/ShopCartContext';
export const Footer = ({ total, setShowModal }) => {
  const navigate = useNavigate();
  const roundedTotal = roundNumber(total);
  const currency = 'USD';
  const handleCheckout = () => {
    navigate('/checkout');
  };
  const { clearCart } = useShopCartContext();
  const handleClearCart = () => {
    setShowModal(true);
  };
  return (
    <div className='mt-10 max-w-[900px] p-10 md:mx-auto'>
      <div className='flex items-center justify-between border-b border-neutral-950 text-xl'>
        <p className=''>Total</p>
        <p className='font-bold tracking-wide'>
          <span className='mr-1 font-medium'>{currency}</span>
          {roundedTotal}
        </p>
      </div>
      <div className='mt-4 flex sm:mt-8 sm:justify-end'>
        <button
          onClick={handleCheckout}
          className='bg-neutral-950 p-2 text-xl text-neutral-100'
        >
          To Checkout
        </button>
        <button
          onClick={handleClearCart}
          className='ml-4 bg-neutral-950 p-2 text-xl text-neutral-100'
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};
