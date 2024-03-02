import React, { useEffect } from 'react';
import { Wrapper } from '../components/Wrapper';
import useFetchData from '../api/useFetchData';
import { useParams } from 'react-router-dom';
export const ProductPage = () => {
  const { productId } = useParams();

  const { data, isLoading, isError } = useFetchData(
    `https://v2.api.noroff.dev/online-shop/${productId}`,
  );
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className='mt-20 bg-neutral-50'>
      <Wrapper></Wrapper>
    </div>
  );
};
