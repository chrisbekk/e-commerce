import React from 'react';
import { FormImage } from './FormImage';
import { Form } from './Form';
export const ContactForm = () => {
  return (
    <div className='mx-auto mt-10 grid max-w-96 grid-rows-2 border border-black sm:mt-20 sm:max-w-[540px] md:max-w-[960px] md:grid-cols-2 md:grid-rows-1'>
      <FormImage />
      <Form />
    </div>
  );
};
