import React from 'react';
import { NavLink } from 'react-router-dom';
export const NavigationItem = ({ route, children }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) => (isActive ? 'underline' : '')}
    >
      <span className='text-sm hover:text-white hover:transition-all'>
        {children}
      </span>
    </NavLink>
  );
};
