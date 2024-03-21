import React from 'react';
import { FormImage } from './FormImage';
import { Form } from './Form';
import { FormSuccess } from './FormSuccess';
import { useFormContext } from '../../context/FormContext';
export const FormBody = () => {
  const { validForm } = useFormContext();

  return (
    <div
      className={
        'mx-auto mt-10 max-w-96 rounded-md bg-stone-50 drop-shadow-md sm:mt-20 sm:max-w-[540px] md:max-w-[960px]'
      }
    >
      {!validForm ? (
        <div
          className={
            'mx-auto mt-10 max-w-96 rounded-md bg-stone-50 drop-shadow-md sm:mt-20 sm:grid sm:max-w-[540px] md:max-w-[960px] md:grid-cols-2 md:grid-rows-1'
          }
        >
          {' '}
          <FormImage />
          <Form />{' '}
        </div>
      ) : (
        <FormSuccess />
      )}
    </div>
  );
};
