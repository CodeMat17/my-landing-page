"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import AnimatedPageTitle from "./AnimatedPageTitle";
import LiIcon from "./LiIcon";

const Detail = ({ position, company, work }) => {
 const ref = useRef(null)
 
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <LiIcon reference={ref} />
        <motion.div className='text-lg'
          initial={{ y: 50 }} whileInView={{ y: 0 }}
        transition={{duration: 0.9, type: 'spring'}}>
        <h3 className='capitalize font-semibold text-2xl'>{position}</h3>
        <p>{company}</p>
        <p className='font-medium w-full'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className='py-12'>
      <AnimatedPageTitle text='Experience' />

      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-gray-700 origin-top'
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Detail position='Facilitator' company='Google Africa' work='Work' />
          <Detail position='Facilitator' company='Google Africa' work='Work' />
          <Detail position='Facilitator' company='Google Africa' work='Work' />
          <Detail position='Facilitator' company='Google Africa' work='Work' />
        </ul>
      </div>
    </div>
  );
};

export default Experience;