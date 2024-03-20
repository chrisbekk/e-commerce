import React from 'react';
import { wordsToUpperCase } from '../../utils/wordsToUpperCase';
export const ItemTitle = ({ title }) => {
  return (
    <p className='min-w-24 text-sm font-semibold'>{wordsToUpperCase(title)}</p>
  );
};
