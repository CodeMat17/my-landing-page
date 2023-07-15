"use client";

import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className='absolute left-0 stroke-red-700'>
      <svg className="-rotate-45" width='55' height='55' viewBox='0 0 100 100'>
        <circle
          cx='75'
          cy='50'
          r='20'
          className='fill-none stroke-purple-700 stroke-1'
        />
        <motion.circle
          cx='75'
          cy='50'
          r='20'
          className='fill-green-500 stroke-[5px]'
          style={{ pathLength: scrollYProgress }}
        />
        <circle cx='75' cy='50' r='10' className='animate-pulse fill-red-500 stroke-1' />
      </svg>
    </figure>
  );
};

export default LiIcon;
