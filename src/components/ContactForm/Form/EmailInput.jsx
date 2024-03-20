import React from 'react';

export const EmailInput = () => {
  const handleChanges = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className='mt-4'>
      <label htmlFor='email' className='block font-light'>
        Email
      </label>
      <input
        className='focus:ring-primary-500 mt-1 w-full rounded-md  bg-neutral-200 p-2 font-light focus:border-transparent focus:outline-none focus:ring-2'
        id='email'
        type='email'
        placeholder='Enter your email'
        onChange={(e) => handleChanges(e)}
      />
    </div>
  );
};
