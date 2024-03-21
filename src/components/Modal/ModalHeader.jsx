import React from 'react';

export const ModalHeader = ({ title, setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };
  return (
    <div className='flex items-center justify-between border-b border-neutral-950'>
      <h1 className='text-xl font-semibold'>{title}</h1>
      <button onClick={handleClick}>Close</button>
    </div>
  );
};
