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
      <FaBars onClick={handleClick} className='text-xl hover:cursor-pointer' />
      {showMenu && (
        <div className='absolute left-0 top-20 flex h-screen w-full flex-col items-center justify-center gap-3 bg-neutral-900'>
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
