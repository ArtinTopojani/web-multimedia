import React from 'react';
import './navbar.scss';
import Icon from '../../assets/icon.png';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
function Navbar() {
  const animation = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };
  return (
    <>
      <div className='navbar'>
        {/* Sidebar */}
        <Sidebar></Sidebar>
        <div className='wrapper'>
          <motion.span
            initial={animation.initial}
            animate={animation.animate}
            transition={animation.transition}
          >
            UBT
          </motion.span>
          <motion.div
            className='social'
            initial={animation.initial}
            animate={animation.animate}
            transition={animation.transition}
          >
            <a href='#'>
              <img src={Icon} alt='' />
            </a>
            <a href='#'>
              <img src={Icon} alt='' />
            </a>
            <a href='#'>
              <img src={Icon} alt='' />
            </a>
            <a href='#'>
              <img src={Icon} alt='' />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
