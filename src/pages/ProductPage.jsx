import React, { useEffect } from 'react';
import { Wrapper } from '../components/Wrapper';
import useFetchData from '../api/useFetchData';
import { useParams } from 'react-router-dom';
import { Product } from '../components/Product';
import { LoadSpinner } from '../components/Spinner';
export const ProductPage = () => {
  const { productId } = useParams();

  const { products, error, loading } = useFetchData(
    `https://v2.api.noroff.dev/online-shop/${productId}`,
  );
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div className='mt-20 bg-neutral-50'>
      <Wrapper>
        {loading && (
          <div className='flex min-h-screen items-center justify-center'>
            <LoadSpinner />
          </div>
        )}
        {products && <Product product={products} error={error} />}
      </Wrapper>
    </div>
  );
};
