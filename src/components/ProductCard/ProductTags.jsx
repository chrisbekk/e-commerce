import React from 'react';

export const ProductTags = ({ tags }) => {
  return (
    <div className='mt-3 flex gap-1'>
      {tags.map((tag, index) => (
        <p
          key={index}
          className='min-w-[35px] rounded-lg bg-neutral-800 p-1 text-center text-[0.6rem] text-neutral-50 sm:text-xs md:p-2'
        >
          {tag}
        </p>
      ))}
    </div>
  );
};
