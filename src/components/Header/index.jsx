import React from 'react';
import { Wrapper } from '../Wrapper';
import { NavigationMenu } from './NavigationMenu';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <div className='bg-neutral-900 text-neutral-50 h-20 w-full fixed top-0'>
      <Wrapper>
        <div className='h-full flex items-center justify-between px-2 relative'>
          <h1 className='font-thin text-2xl'>
            <Link to='/'>
              Digital<span className='font-semibold'>Market</span>
            </Link>
          </h1>
          <NavigationMenu />
        </div>
      </Wrapper>
    </div>
  );
};
