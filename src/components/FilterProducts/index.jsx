import React from 'react';
import { SearchBar } from './SearchBar';
export const FilterProducts = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='mt-10 max-w-[1024px] p-5 sm:mx-auto md:flex md:items-center md:justify-between'>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className='flex gap-4'>
        <div>Price</div>
        <div>Rating</div>
        <div>Categories</div>
      </div>
    </div>
  );
};
