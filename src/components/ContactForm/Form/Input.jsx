import React from 'react';
import { useState } from 'react';
export const Input = ({ label, id, type, placeholder, minLength = 3 }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const handleChanges = (e) => {
    setValue(e.target.value);
    if (e.target.value.length >= minLength || e.target.value === '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const style = !isValid ? 'border border-rose-600' : '';
  return (
    <div className='mt-4'>
      <label htmlFor={id} className='block font-light'>
        {label}
      </label>
      <input
        className={`focus:ring-primary-500 mt-1 w-full rounded-md  bg-neutral-200 p-2 font-light focus:border-transparent focus:outline-none focus:ring-2 ${style}`}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleChanges(e)}
        value={value}
      />
    </div>
  );
};
