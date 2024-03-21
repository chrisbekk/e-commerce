import React from 'react';

import { FormProvider } from '../../context/FormContext';

import { FormBody } from './FormBody';
export const ContactForm = () => {
  return (
    <FormProvider>
      <FormBody />
    </FormProvider>
  );
};
