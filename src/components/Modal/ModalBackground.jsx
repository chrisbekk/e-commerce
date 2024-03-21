import React from 'react';

export const ModalBackground = ({ children }) => {
  return (
    <div className='absolute inset-0 flex h-full w-full items-center justify-center bg-neutral-950 bg-opacity-70'>
      {children}
    </div>
  );
};
