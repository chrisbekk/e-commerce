import React from 'react';
import { ProductCard } from './ProductCard';
import useFetchData from '../../api/useFetchData';
export const Products = () => {
  const { products, error, loading } = useFetchData(
    'https://v2.api.noroff.dev/online-shop',
  );

  return (
    <div className='mt-20 grid grid-rows-1 gap-10 border border-black p-5 sm:grid-cols-2 lg:grid-cols-3'>
      {loading && <p>loading...</p>}
      {products && products.map((product) => <ProductCard product={product} />)}
    </div>
  );
};
