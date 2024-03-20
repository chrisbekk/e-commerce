import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Wrapper } from '../components/Wrapper';
export const ContactPage = () => {
  return (
    <div className='mt-20 bg-neutral-50'>
      <Wrapper>
        <ContactForm />
      </Wrapper>
    </div>
  );
};
