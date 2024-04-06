import React from 'react';
import { useState } from 'react';
import { useFormContext } from '../../../context/FormContext';
export const TextArea = ({
  label,
  id,
  placeholder,
  minLength = 3,
  setFormValues,
}) => {
  const [validText, setValidText] = useState(true);
  const { setInputValidation } = useFormContext();
  const handleChanges = (e) => {
    const { value } = e.target;
    if (value.length >= minLength || value === '') {
      setValidText(true);
      setInputValidation((prev) => ({ ...prev, message: true }));
      setFormValues((prevFormValues) => ({ ...prevFormValues, [id]: value }));
    } else {
      setValidText(false);
      setInputValidation((prev) => ({ ...prev, message: false }));
    }
  };
  const style = !validText ? 'border border-rose-600' : '';
  return (
    <div className='mt-4'>
      <label htmlFor={id} className='block font-light'>
        {label}
      </label>
      <textarea
        onChange={(e) => handleChanges(e)}
        className={`focus:ring-primary-500 mt-1 w-full rounded-md  bg-neutral-200 p-2 font-light focus:border-transparent focus:outline-none focus:ring-2 ${style}`}
        id={id}
        placeholder={placeholder}
        style={{ resize: 'none' }}
      ></textarea>
    </div>
  );
};
