import React from 'react';
import { ProductCard } from '../ProductCard';
import useFetchData from '../../api/useFetchData';
export const Products = () => {
  const { products, error, loading } = useFetchData(
    'https://v2.api.noroff.dev/online-shop',
  );

  return (
    <div className='mt-20 grid grid-rows-1 place-items-center gap-10 p-5 md:grid-cols-2 xl:grid-cols-3'>
      {loading && <p>loading...</p>}
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};
