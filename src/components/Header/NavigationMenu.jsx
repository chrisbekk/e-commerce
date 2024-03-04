import React from 'react';

import { useScreenwidth } from '../../hooks/useScreenwidth';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
export const NavigationMenu = () => {
  const width = useScreenwidth();
  const screenWidth = window.innerWidth;
  const BREAKPOINT = 560;
  let navigationComponent = width < BREAKPOINT ? <MobileNav /> : <DesktopNav />;

  return <div className='p-10'>{navigationComponent}</div>;
};
