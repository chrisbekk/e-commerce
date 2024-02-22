import React from 'react';
import { NavLink } from 'react-router-dom';
export const NavigationItem = ({ route, text }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) => (isActive ? 'text-lime-300' : '')}
    >
      {text}
    </NavLink>
  );
};
