import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileNavLink } from './MobileNavLink';
export const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuLinks = [
    { title: 'Home', route: '/' },
    { title: 'Contact Us', route: '/contact' },
    { title: 'Shopping Cart', route: '/shopping-cart' },
  ];
  const handleClick = () => {
    setShowMenu((current) => !current);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.12,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className='p-0'>
      <FaBars onClick={handleClick} className='text-xl hover:cursor-pointer' />
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={menuVars}
            initial='initial'
            animate='animate'
            exit='exit'
            className='fixed left-0 top-0 h-screen w-full origin-top bg-neutral-50 p-10 text-neutral-900'
          >
            <div className='flex h-full flex-col'>
              <div className='flex justify-between'>
                <Link className='text-lg' onClick={handleClick}>
                  MarketPlace
                </Link>
                <p className='text-md cursor-pointer' onClick={handleClick}>
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial='initial'
                animate='open'
                exit='initial'
                className='flex h-full flex-col items-center justify-center gap-4'
              >
                {menuLinks.map((link, index) => {
                  return (
                    <div
                      key={index}
                      className='overflow-hidden'
                      onClick={handleClick}
                    >
                      <MobileNavLink title={link.title} route={link.route} />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
