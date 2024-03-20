import React from 'react';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { EmailInput } from './EmailInput';
export const Form = () => {
  return (
    <div className='mt-4 w-full p-4 md:mt-0'>
      <form>
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
