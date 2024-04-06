import React from 'react';
import { IoIosStarOutline } from 'react-icons/io';
import { IoIosStarHalf } from 'react-icons/io';
import { IoIosStar } from 'react-icons/io';
import { Avatar } from './Avatar';
export const Review = ({ review }) => {
  const { description, rating, username } = review;
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
    <div className=' mb-8 gap-10 bg-neutral-200 px-4 py-10 lg:flex'>
      <Avatar username={username} />
      <div>
        <p className='mb-1 text-2xl font-bold'>{username}</p>
        {productRating}
        <p className='mt-5 text-lg font-medium lg:text-xl'>{description}</p>
      </div>
    </div>
  );
};
