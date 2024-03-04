import React from 'react';
import { IoIosStarOutline } from 'react-icons/io';
import { IoIosStarHalf } from 'react-icons/io';
import { IoIosStar } from 'react-icons/io';
export const ProductRating = ({ rating }) => {
  const ratingScale = 5;
  let productRating;
  const stars = [];
  if (rating && rating > 0) {
    for (let i = 0; i < ratingScale; i++) {
      if (i < rating) {
        stars.push(<IoIosStar key={i} />);
      } else if (i - rating < 0.5) {
        stars.push(<IoIosStarHalf key={i} />);
      } else {
        stars.push(<IoIosStarOutline key={i} />);
      }
    }
    productRating = <div className='flex gap-[3px] text-2xl'>{stars}</div>;
  } else {
    productRating = <p className='italic'>No rating available</p>;
  }
  return (
    <div>
      <p className='mt-3 text-lg font-medium'>Rating</p>
      {productRating}
    </div>
  );
};
