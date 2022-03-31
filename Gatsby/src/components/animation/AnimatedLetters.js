import { motion } from 'framer-motion';
import React from 'react';

const lettersContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimationVariants = {
  initial: { y: -40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const AnimatedLetters = function ({ title, isFirstPageView }) {
  return (
    <motion.span
      variants={lettersContainerVariants}
      initial={isFirstPageView ? 'hidden' : false}
      animate="animate"
      style={{
        position: 'relative',
        display: 'inline-block',
        whiteSpace: 'nowrap',
      }}
    >
      {[...title].map((letter, i) => (
        <motion.span
          variants={letterAnimationVariants}
          key={i}
          style={{
            position: 'relative',
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedLetters;
