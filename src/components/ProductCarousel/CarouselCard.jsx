import React, { useEffect, useState } from 'react';
import { wordsToUpperCase } from '../../utils/wordsToUpperCase';
import { useNavigate } from 'react-router-dom';
export const CarouselCard = ({ item, currentIndex, index, duration }) => {
  const [progress, setProgress] = useState(0);
  const { title, image, id } = item;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    let startTime = Date.now();
    const intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = (elapsedTime / duration) * 100;
      setProgress(Math.min(newProgress, 100));

      if (newProgress >= 100) {
        clearInterval(intervalId);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [currentIndex, index, duration]);

  return (
    <div
      onClick={handleClick}
      className='relative flex h-full w-full items-center gap-1 overflow-hidden rounded-md bg-neutral-700 bg-opacity-90 pl-2 hover:cursor-pointer'
    >
      {currentIndex === index && (
        <div
          className='absolute inset-0 h-full bg-neutral-950'
          style={{ width: `${progress}%` }}
        ></div>
      )}

      <img src={image.url} className='z-50 size-10 rounded-lg' />
      <p className='z-50 ml-2 text-sm text-neutral-100'>
        {wordsToUpperCase(title)}
      </p>
    </div>
  );
};
