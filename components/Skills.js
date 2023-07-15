"use client";

import { motion } from "framer-motion";
import AnimatedPageTitle from "./AnimatedPageTitle";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='absolute flex items-center justify-center rounded-full font-semibold bg-[#101820] text-[#F2AA4C] px-2.5 py-1.5 shadow-black cursor-pointer transition transform duration-500 hover:scale-110'
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="py-12">
      <AnimatedPageTitle text='Skills' />
      <div className='mx-auto w-full h-96 sm:w-[500px] sm:h-[500px] relative flex items-center justify-center rounded-full bg-circularLight overflow-hidden'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-[#101820] text-[#F2AA4C] px-2.5 py-1.5 shadow-black cursor-pointer transition transform duration-500 hover:scale-110'>
          Web
        </motion.div>

        <Skill name='React' x='-59px' y='-60px' />
        <Skill name='Next.js' x='-105px' y='-125px' />
        <Skill name='Supabase' x='115px' y='100px' />
        <Skill name='Github' x='110px' y='-120px' />
        <Skill name='TailwindCss' x='-120px' y='62px' />
        <Skill name='Vercel' x='84px' y='5px' />
        <Skill name='Framer Motion' x='-10px' y='150px' />
      </div>
    </div>
  );
};

export default Skills;
