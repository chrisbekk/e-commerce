import React from 'react';
import { NavigationItem } from './NavigationItem';

import { ShoppingcartIcon } from './ShoppingcartIcon';

export const DesktopNav = () => {
  return (
    <div className='flex gap-5 items-center'>
      <NavigationItem route={'/'}>Home</NavigationItem>
      <NavigationItem route={'/contact'}>Contact</NavigationItem>
      <NavigationItem route={'shopping-cart'}>
        <ShoppingcartIcon />
      </NavigationItem>
    </div>
  );
};
