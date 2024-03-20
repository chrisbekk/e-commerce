import React from 'react';

export const TextArea = ({ label, id, placeholder, minLength = 3 }) => {
  return (
    <div className='mt-4'>
      <label htmlFor={id} className='block font-light'>
        {label}
      </label>
      <textarea
        className='focus:ring-primary-500 mt-1 w-full rounded-md  bg-neutral-200 p-2 font-light focus:border-transparent focus:outline-none focus:ring-2'
        id={id}
        placeholder={placeholder}
        style={{ resize: 'none' }}
      ></textarea>
    </div>
  );
};
