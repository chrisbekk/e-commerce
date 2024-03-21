import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [inputValidation, setInputValidation] = useState({
    name: false,
    subject: false,
    email: false,
    message: false,
  });
  const [validForm, setValidForm] = useState(false);

  return (
    <FormContext.Provider
      value={{ inputValidation, setInputValidation, validForm, setValidForm }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error('useFormContext must be used within FormContext');
  }
  return context;
};
