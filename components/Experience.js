"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import AnimatedPageTitle from "./AnimatedPageTitle";
import LiIcon from "./LiIcon";

const Detail = ({ position, company, work }) => {
 const ref = useRef(null)
 
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
      <LiIcon reference={ref} />
        <motion.div className='text-lg'
          initial={{ y: 60 }} whileInView={{ y: 0 }}
        transition={{duration: 1.5, type: 'spring'}}>
        <h2 className='capitalize font-semibold text-2xl'>{position}</h2>
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
    <div id='experience' className='py-20'>
      <AnimatedPageTitle text='Experience' />

      <div ref={ref} className='mt-6 max-w-md mx-auto relative'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-12 top-0 w-[4px] h-full bg-[#203245] origin-top'
        />

        <ul className='w-full flex flex-col items-start justify-start ml-4'>
          <Detail
            position='Senior Developer'
            company='CodeMat Soft-lutions'
            work='Web Development'
          />
          <Detail
            position='Facilitator'
            company='Google Africa with Andela'
            work='Web Development'
          />
          <Detail
            position='Mentor'
            company='Google Africa with Andela'
            work='Web Development'
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
