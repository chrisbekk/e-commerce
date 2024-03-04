import React from 'react';
import { ProductCard } from '../ProductCard';
import { LoadSpinner } from '../Spinner';
import { useNavigate } from 'react-router-dom';
export const Products = ({ products, error, loading }) => {
  return (
    <div>
      {loading && <LoadSpinner />}
      <div className='mt-10 grid grid-rows-1 place-items-center gap-10 p-5 md:grid-cols-2 xl:grid-cols-3'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
