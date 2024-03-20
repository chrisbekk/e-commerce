import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
export const EmptyCart = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className='mt-20'>
      <div className='flex flex-col items-center'>
        <div className='mb-5 flex size-20 items-center justify-center rounded-full bg-neutral-200 text-7xl'>
          <AiOutlineShopping />
        </div>
        <h1>You're Shoppint Cart is empty</h1>

        <button
          onClick={handleClick}
          className='mt-6 bg-neutral-950 p-4 text-neutral-50'
        >
          Go Shopping!
        </button>
      </div>
    </div>
  );
};
