import React from 'react';
import { useState, useRef } from 'react';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { EmailInput } from './EmailInput';
import { useFormContext } from '../../../context/FormContext';
export const Form = () => {
  const { inputValidation, setValidForm } = useFormContext();
  const [formValues, setFormValues] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    for (const key in inputValidation) {
      if (!inputValidation[key]) {
        setValidForm(false);
        return;
      } else {
        setValidForm(true);
        console.log(formValues);
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
          setFormValues={setFormValues}
        />
        <Input
          label={'Subject'}
          id={'subject'}
          type={'text'}
          placeholder={'Enter Subject'}
          setFormValues={setFormValues}
        />
        <EmailInput setFormValues={setFormValues} />
        <TextArea
          label={'Message'}
          id={'message'}
          placeholder={'Enter your message'}
          setFormValues={setFormValues}
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
