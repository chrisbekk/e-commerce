import React from 'react';
import { NavLink } from 'react-router-dom';
export const NavigationItem = ({ route, children }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) => (isActive ? 'text-lime-300' : '')}
    >
      <p className='text-sm'>{children}</p>
    </NavLink>
  );
};
