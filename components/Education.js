"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import AnimatedPageTitle from "./AnimatedPageTitle";
import LiIcon from "./LiIcon";

const Detail = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
      <LiIcon reference={ref} />
      <motion.div
        className=''
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.9, type: "spring" }}>
        <h2 className='capitalize font-semibold text-2xl'>{type}</h2>
        <p className='font-medium w-full text-xl'>{info}</p>
        <p className='text-sm'>{place}</p>
        <p className='text-sm'>{time}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div id='education' className='py-20'>
      <AnimatedPageTitle text='Education' />

      <div ref={ref} className='mt-6 max-w-md mx-auto relative'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-12 top-0 w-[4px] h-full bg-gray-700 origin-top'
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Detail
            type='B. Tech'
            info='Physics Electronics'
            place='Nnamdi Azikiwe University, Awka, Nigeria'
            time='2005'
          />
          <Detail
            type='PSLC 20'
            info='Policy Strategy & Leadership Course'
            place='National Institute For Policy & Strategic Studies, Kuru, Jos.'
            time='2015'
          />
          <Detail
            type='Strategies For Revenue Generation'
            info='Class 2014'
            place='Administrative Staff College of Nigeria, ASCON, Badagry.'
            time='2014'
          />
          <Detail
            type='Project Management'
            info='MCARAKAN Resource Limited'
            place='Enugu'
            time='2011'
          />
          <Detail
            type='ETC'
            info=''
            place=''
            time=''
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
