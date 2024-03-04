import React from 'react';
import { ProductHeader } from './ProductHeader';
import { ProductImage } from './ProductImage';
import { ProductRating } from './ProductRating';
import { ProductPrice } from './ProductPrice';
import { ProductDescription } from './ProductDescription';
import { AddToCartBtn } from './AddToCartBtn';
import { Reviews } from './Reviews';
export const Product = ({ product, error }) => {
  const {
    title,
    description,
    price,
    discountedPrice,
    image,
    rating,
    tags,
    reviews,
    id,
  } = product;
  return (
    <div className='md:mt-14'>
      <div className=' md:flex md:gap-5 md:px-2 lg:justify-center xl:h-[650px]'>
        <ProductImage image={image} />
        <div className='mx-auto  max-w-[560px] p-3 font-montserrat sm:px-0 sm:pt-4 md:mx-0 md:max-w-full md:p-0'>
          <ProductHeader title={title} tags={tags} />
          <ProductRating rating={rating} />
          <ProductPrice price={price} discountedPrice={discountedPrice} />
          <ProductDescription description={description} />
          <AddToCartBtn product={product} />
        </div>
      </div>
      <div className='mx-auto mt-40 w-11/12 border-t-[1px] border-neutral-900'>
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};
