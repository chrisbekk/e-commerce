import React from 'react';
import { useState } from 'react';
import { useFormContext } from '../../../context/FormContext';
export const Input = ({
  label,
  id,
  type,
  placeholder,
  minLength = 3,
  setFormValues,
}) => {
  const [isValid, setIsValid] = useState(true);
  const { setInputValidation } = useFormContext();
  const handleChanges = (e) => {
    const { value } = e.target;
    if (value.length >= minLength || value === '') {
      setIsValid(true);
      setInputValidation((prev) => ({ ...prev, [id]: true }));
      setFormValues((prevFormValues) => ({ ...prevFormValues, [id]: value }));
    } else {
      setIsValid(false);
      setInputValidation((prev) => ({ ...prev, [id]: false }));
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
      />
    </div>
  );
};
