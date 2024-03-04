import React from 'react';
import { ProductCardImage } from './ProductCardImage';
import { ProductCardDetails } from './ProductCardDetails';
import { useNavigate } from 'react-router-dom';
export const ProductCard = ({ product }) => {
  const { title, image, tags, price, discountedPrice, id } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className=' flex h-40 w-full max-w-[450px] gap-2 bg-stone-50 drop-shadow-md  hover:cursor-pointer md:h-[445px] md:max-w-[375px] md:flex-col md:rounded-xl md:p-4'
    >
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
