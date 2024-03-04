import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingcartIcon } from './ShoppingcartIcon';
export const MobileNavLink = ({ title, route }) => {
  const mobileLinkVars = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  if (route === '/shopping-cart') {
    return (
      <motion.div
        variants={mobileLinkVars}
        className='text-4xl uppercase text-neutral-900'
      >
        <Link to={route} className='flex items-center gap-3 pr-1'>
          Cart
          <ShoppingcartIcon />
        </Link>
      </motion.div>
    );
  }
  return (
    <motion.div
      variants={mobileLinkVars}
      className='text-4xl uppercase text-neutral-900'
    >
      <Link to={route}>{title}</Link>
    </motion.div>
  );
};
