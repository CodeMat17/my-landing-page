"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { GiNetworkBars } from "react-icons/gi";
import { LuArrowUpWideNarrow } from "react-icons/lu";
import { MdNetworkCheck } from "react-icons/md";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 8000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const StatComponent = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 pt-20'>
      <div className='relative flex flex-col justify-center items-center'>
        <div className='absolute -top-4 rounded-full p-3 animate-pulse bg-[#1c2b3b]'>
          <GiNetworkBars className='text-5xl animate-bounce-fast' />
        </div>
        <h1 className='z-30 text-8xl'>
          <AnimatedNumbers value={8} />+
        </h1>
        <span>Years of experience</span>
      </div>

      <div className='relative flex flex-col justify-center items-center'>
        <div className='absolute -top-4 rounded-full p-3 animate-pulse bg-[#1c2b3b]'>
          <LuArrowUpWideNarrow className='text-5xl animate-bounce-mid' />
        </div>
        <h1 className='z-30 text-8xl'>
          {" "}
          <AnimatedNumbers value={32} />+
        </h1>
        <span>Projects completed</span>
      </div>

      <div className='relative flex flex-col justify-center items-center'>
        <div className='absolute -top-4 rounded-full p-3 animate-pulse bg-[#1c2b3b]'>
          <MdNetworkCheck className='text-5xl animate-bounce-slow' />
        </div>
        <h1 className='z-30 text-8xl'>
          {" "}
          <AnimatedNumbers value={60} />+
        </h1>
        <span>Satisfied clients</span>
      </div>
    </div>
  );
};

export default StatComponent;
