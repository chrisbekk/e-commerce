import React from 'react';
import { NavigationItem } from './NavigationItem';
export const DesktopNav = () => {
  return (
    <div className='flex gap-5'>
      <NavigationItem route={'/'} text={'Home'} />
      <NavigationItem route={'/contact'} text={'Contact Us'} />
      <NavigationItem route={'shopping-cart'} text={'Shopping Cart'} />
    </div>
  );
};
