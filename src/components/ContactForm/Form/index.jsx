import React from 'react';
import { useState } from 'react';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { EmailInput } from './EmailInput';
import { useFormContext } from '../../../context/FormContext';
export const Form = () => {
  const { inputValidation, setValidForm } = useFormContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    for (const key in inputValidation) {
      if (!inputValidation[key]) {
        console.log('Form not submitted');
        setValidForm(false);
        return;
      } else {
        console.log('Form submitted');
        setValidForm(true);
      }
    }
  };

  return (
    <div className='mt-4 w-full p-4 md:mt-0'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          label={'Full Name'}
          id={'name'}
          type={'text'}
          placeholder={'Enter your full name'}
        />
        <Input
          label={'Subject'}
          id={'subject'}
          type={'text'}
          placeholder={'Enter Subject'}
        />
        <EmailInput />
        <TextArea
          label={'Message'}
          id={'message'}
          placeholder={'Enter your message'}
        />
        <button
          type='submit'
          className='mt-4 w-full bg-neutral-950 py-2 text-neutral-50'
        >
          Send
        </button>
      </form>
    </div>
  );
};
