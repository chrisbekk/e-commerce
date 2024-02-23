import React from 'react';
import { NavigationItem } from './NavigationItem';

import { ShoppingcartIcon } from './ShoppingcartIcon';

export const DesktopNav = () => {
  return (
    <header>
      <nav className='flex items-center gap-5'>
        <NavigationItem route={'/'}>Home</NavigationItem>
        <NavigationItem route={'/contact'}>Contact Us</NavigationItem>
        <NavigationItem route={'shopping-cart'}>
          <ShoppingcartIcon />
        </NavigationItem>
      </nav>
    </header>
  );
};
