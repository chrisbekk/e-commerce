import React from 'react';
import { useEffect, useState } from 'react';
export const useScreenwidth = () => {
  const [width, setWidth] = useState();
  useEffect(() => {
    const getWidth = () => {
      const screenWidth = window.innerWidth;
      setWidth(screenWidth);
    };
    window.addEventListener('resize', getWidth);

    return () => {
      window.removeEventListener('resize', getWidth);
    };
  }, []);

  return width;
};
