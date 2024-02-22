import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu((current) => !current);
  };
  return (
    <div>
      <FaBars onClick={handleClick} />
      {showMenu && (
        <div className='absolute bg-neutral-900 h-screen w-full left-0 top-20 flex flex-col gap-3 items-center justify-center'>
          <Link to='/' onClick={handleClick}>
            Home
          </Link>
          <Link to='/contact' onClick={handleClick}>
            Contact Us
          </Link>
          <Link to='/shopping-cart' onClick={handleClick}>
            Shopping Cart
          </Link>
        </div>
      )}
    </div>
  );
};
