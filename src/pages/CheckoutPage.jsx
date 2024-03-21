import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from '../components/Wrapper';
import { GrValidate } from 'react-icons/gr';
export const CheckoutPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className='mt-20 bg-neutral-50'>
      <Wrapper>
        <div className='mx-auto mt-10 max-w-96 rounded-md bg-stone-50 drop-shadow-md sm:mt-20 sm:max-w-[540px] md:max-w-[960px]'>
          <div className='flex flex-col items-center justify-center'>
            <GrValidate className='mb-4 text-5xl' />
            <h1 className='text-2xl font-light'>Checkout Succesful!</h1>
            <p className='font-light0 my-3 text-center'>
              Thank you for your purchase! We appreciate your support and trust
              in us. Enjoy your new product, and if you need anything, we're
              here to help.
            </p>
            <button
              onClick={handleClick}
              className='mb-5 bg-neutral-950 p-2 text-neutral-100'
            >
              Back To Home Page
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
