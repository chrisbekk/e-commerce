import React from 'react';
import { wordsToUpperCase } from '../../utils/wordsToUpperCase';
export const ProductHeader = ({ title, tags }) => {
  const productTitle = wordsToUpperCase(title);
  let tag;
  if (tags && tags.length > 0 && tags[0]) {
    const firstTag = tags[0];
    tag = (
      <p className='w-fit bg-neutral-900 px-6 py-4 text-lg font-light text-neutral-50'>
        {firstTag.charAt(0).toUpperCase() + firstTag.slice(1)}
      </p>
    );
  } else {
    tag = (
      <p className='w-fit bg-neutral-900 px-5 py-2 text-neutral-50'>
        No tag available
      </p>
    );
  }

  return (
    <div>
      {tag}
      <h1 className='mt-5 text-2xl font-medium md:mt-7 md:text-4xl'>
        {productTitle}
      </h1>
    </div>
  );
};
