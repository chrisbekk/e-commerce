import React, { useState } from 'react';
import { Wrapper } from '../components/Wrapper';
import { Products } from '../components/Products';
import useFetchData from '../api/useFetchData';
import { FilterProducts } from '../components/FilterProducts';
import { ProductCarousel } from '../components/ProductCarousel';
import { Hero } from '../components/Hero';
export const HomePage = () => {
  const { products, setProducts, error, loading } = useFetchData(
    'https://v2.api.noroff.dev/online-shop',
  );
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts =
    searchTerm === ''
      ? products
      : products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()),
        );

  return (
    <>
      <Hero />
      <div className='mt-20 bg-neutral-50'>
        <Wrapper>
          <ProductCarousel products={products} />
          <FilterProducts
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <Products
            products={filteredProducts}
            error={error}
            loading={loading}
          />
        </Wrapper>
      </div>
    </>
  );
};
