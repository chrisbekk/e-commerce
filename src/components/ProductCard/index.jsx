import React from 'react';
import { ProductCardImage } from './ProductCardImage';
import { ProductCardDetails } from './ProductCardDetails';
export const ProductCard = ({ product }) => {
  const { title, image, tags, price, discountedPrice } = product;
  return (
    <div className=' flex h-40 w-full max-w-[450px] gap-2  bg-stone-50 drop-shadow-md md:max-w-[375px]'>
      <ProductCardImage image={image} />
      <ProductCardDetails
        title={title}
        tags={tags}
        price={price}
        discountedPrice={discountedPrice}
      />
    </div>
  );
};
