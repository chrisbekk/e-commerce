import React, { useEffect, useState } from 'react';
import { CarouselItem } from './CarouselItem';
import { CarouselCard } from './CarouselCard';
export const ProductCarousel = ({ products }) => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const duration = 6500;
  useEffect(() => {
    if (products && products.length > 0) {
      setCarouselItems(products.slice(0, 5));
    }
  }, [products]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1,
      );
    }, duration);
    return () => clearInterval(interval);
  }, [carouselItems]);
  return (
    <div className='m-1 mt-4 h-96 max-w-[768px]  sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-1'>
      <h1>New Products</h1>
      <div className='flex h-full w-full overflow-hidden sm:col-span-2 sm:col-start-1'>
        {carouselItems.map((item) => (
          <CarouselItem key={item.id} item={item} currentIndex={currentIndex} />
        ))}
      </div>
      <div className='hidden sm:col-span-1 sm:col-start-3 sm:grid sm:h-full sm:w-full sm:grid-rows-5 sm:gap-1'>
        {carouselItems.map((item, index) => (
          <CarouselCard
            item={item}
            key={index}
            currentIndex={currentIndex}
            index={index}
            duration={duration}
          />
        ))}
      </div>
    </div>
  );
};
