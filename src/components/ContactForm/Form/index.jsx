import React from 'react';
import { useState } from 'react';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { EmailInput } from './EmailInput';
export const Form = () => {
  const [inputValidation, setInputValidation] = useState({
    name: false,
    subject: false,
    email: false,
    message: false,
  });
  const [validForm, setValidForm] = useState(true);
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

  if (validForm) {
    return (
      <div className='mt-4 w-full p-4 md:mt-0'>
        <h1>Message Sent</h1>
      </div>
    );
  }
  return (
    <div className='mt-4 w-full p-4 md:mt-0'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          label={'Full Name'}
          id={'name'}
          type={'text'}
          placeholder={'Enter your full name'}
          setInputValidation={setInputValidation}
        />
        <Input
          label={'Subject'}
          id={'subject'}
          type={'text'}
          placeholder={'Enter Subject'}
          setInputValidation={setInputValidation}
        />
        <EmailInput setInputValidation={setInputValidation} />
        <TextArea
          label={'Message'}
          id={'message'}
          placeholder={'Enter your message'}
          setInputValidation={setInputValidation}
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
