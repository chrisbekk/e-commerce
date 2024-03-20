import React from 'react';
import { FormImage } from './FormImage';
import { Form } from './Form';
export const ContactForm = () => {
  return (
    <div className='mx-auto mt-10 max-w-96 rounded-md bg-stone-50 drop-shadow-md sm:mt-20 sm:grid sm:max-w-[540px] md:max-w-[960px] md:grid-cols-2 md:grid-rows-1'>
      <FormImage />
      <Form />
    </div>
  );
};
