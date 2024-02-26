import React from 'react';

export const ProductTags = ({ tags }) => {
  return (
    <div className='mt-3 flex gap-1'>
      {tags.map((tag, index) => (
        <p
          key={index}
          className='rounded-lg bg-neutral-800 p-2 text-xs text-neutral-50'
        >
          {tag}
        </p>
      ))}
    </div>
  );
};
