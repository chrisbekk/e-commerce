import React from 'react';
import { Review } from './Review';
export const Reviews = ({ reviews }) => {
  const userReviews =
    reviews.length === 0 ? (
      <p className='text-center text-lg italic'>No reviews yet</p>
    ) : (
      reviews.map((review) => <Review key={review.id} review={review} />)
    );
  return (
    <div className='mt-20'>
      <h1 className='text-3xl font-bold'>Reviews ({reviews.length})</h1>
      <div className='mt-7'>{userReviews}</div>
    </div>
  );
};
