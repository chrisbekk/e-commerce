import React from 'react';
import { Wrapper } from '../Wrapper';
import { NavigationMenu } from './NavigationMenu';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <div className='fixed top-0 h-20 w-full bg-neutral-900 bg-opacity-90 text-neutral-50'>
      <Wrapper>
        <div className='relative flex h-full items-center justify-between px-2'>
          <h1 className='text-2xl font-thin'>
            <Link to='/'>
              Market<span className='font-semibold'>Place</span>
            </Link>
          </h1>
          <NavigationMenu />
        </div>
      </Wrapper>
    </div>
  );
};
