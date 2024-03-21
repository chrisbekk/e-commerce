import React, { useState } from 'react';
import validateEmail from '../../../utils/validateEmail';
import { useFormContext } from '../../../context/FormContext';
export const EmailInput = () => {
  const [validEmail, setValidEmail] = useState(true);
  const { setInputValidation } = useFormContext();
  const handleChanges = (e) => {
    const { value } = e.target;
    if (validateEmail(value) || value === '') {
      setValidEmail(true);
      setInputValidation((prev) => ({ ...prev, email: true }));
    } else {
      setValidEmail(false);
      setInputValidation((prev) => ({ ...prev, email: false }));
    }
  };
  const style = !validEmail ? 'border border-rose-600' : '';
  return (
    <div className='mt-4'>
      <label htmlFor='email' className='block font-light'>
        Email
      </label>
      <input
        className={`focus:ring-primary-500 mt-1 w-full rounded-md  bg-neutral-200 p-2 font-light focus:border-transparent focus:outline-none focus:ring-2 ${style}`}
        id='email'
        type='email'
        placeholder='Enter your email'
        onChange={(e) => handleChanges(e)}
      />
    </div>
  );
};
