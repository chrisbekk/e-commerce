import React from 'react';
import { GrValidate } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
export const FormSuccess = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className='flex flex-col items-center justify-center'>
      <GrValidate className='mb-4 text-5xl' />
      <h1 className='text-2xl font-light'>Message Sent!</h1>
      <p className='my-3 text-center font-light'>
        Thank you for reaching out to us. We will get back to you as soon as
        possible.
      </p>
      <button
        onClick={handleClick}
        className='mb-5 bg-neutral-950 p-2 text-neutral-100'
      >
        Back To Home Page
      </button>
    </div>
  );
};
