"use client";

import { motion } from "framer-motion";
import AnimatedPageTitle from "./AnimatedPageTitle";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='absolute flex items-center justify-center rounded-full font-semibold dark:bg-[#031e39] bg-[#F2AA4C] dark:text-[#F2AA4C] text-[#031e39] px-2.5 py-1.5 shadow-black cursor-pointer transition transform duration-500 hover:scale-110'
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className='py-20'>
      <AnimatedPageTitle text='Skills' />
      <div className='mx-auto w-full h-96 sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] relative flex items-center justify-center rounded-full bg-circularLight overflow-hidden'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-[#031e39] dark:bg-[#F2AA4C] text-[#F2AA4C] dark:text-[#031e39] px-4 py-5 shadow-black cursor-pointer transition transform duration-500 hover:scale-125'>
          Web
        </motion.div>

        <Skill name='React' x='-10vw' y='-60px' />
        <Skill name='Next.js' x='-15vw' y='-130px' />
        <Skill name='Supabase' x='16vw' y='20px' />
        <Skill name='Github' x='2vw' y='-170px' />
        <Skill name='TailwindCss' x='-12vw' y='130px' />
        <Skill name='Vercel' x='10vw' y='-96px' />
        <Skill name='MongoDB' x='-16vw' y='5px' />
        <Skill name='Framer Motion' x='2vw' y='170px' />
      </div>
    </div>
  );
};

export default Skills;
