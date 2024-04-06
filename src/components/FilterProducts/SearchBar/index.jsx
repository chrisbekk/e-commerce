import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className=' w-full'>
      <label htmlFor='search' className='block text-sm'>
        <span>Search Products</span>
      </label>
      <div className='relative'>
        <CiSearch className='absolute left-0 top-1 text-lg' />
        <input
          value={searchTerm}
          type='text'
          id='search'
          className='w-full border-b-[1px] border-neutral-900 bg-neutral-50 pl-5 focus:outline-none md:w-[400px]'
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
