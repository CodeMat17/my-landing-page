'use client'

import {motion} from 'framer-motion'

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
        delay: 0.5,
        staggerChildren: 0.5,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
        duration: 1,
    },
  },
};

const AnimatedPageTitle = ({ text, className }) => {
  return (
    <div className='w-full mx-auto pt-12 pb-8 flex items-center justify-center text-center overflow-hidden'>
          <motion.h1 className={`inline-block w-full uppercase tracking-widest text-4xl ${className}`}
              variants={quote}
              initial='initial'
              animate='animate'
          >
        {text.split(" ").map((word, index) => (
            <motion.span key={index} className='inline-block'
                variants={singleWord}
                // initial='initial'
                // animate='animate'
            >{word}&nbsp;</motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedPageTitle;
