"use client";

import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className='absolute left-9 dark:stroke-[#f8981a] stroke-[#101820]'>
      <svg className='rotate-180' width='55' height='55' viewBox='0 0 100 100'>
        <circle
          cx='75'
          cy='50'
          r='20'
          className='fill-none stroke-[#f4f3f8] stroke-1'
        />
        <motion.circle
          cx='75'
          cy='50'
          r='20'
          className='fill-[#de089e8a] stroke-[5px]'
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx='75'
          cy='50'
          r='10'
          className='animate-pulse fill-[#101820] dark:fill-[#F2AA4C] stroke-1'
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
