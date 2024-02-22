import React from 'react';

import { useScreenwidth } from '../../hooks/useScreenwidth';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
export const NavigationMenu = () => {
  const width = useScreenwidth();
  const BREAKPOINT = 560;
  let navigationComponent = width < BREAKPOINT ? <MobileNav /> : <DesktopNav />;

  return <div>{navigationComponent}</div>;
};
