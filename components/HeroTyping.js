"use client";

import { Typewriter } from "react-simple-typewriter";

const HeroTyping = () => {
  return (
    <h1 className='text-2xl opacity-80'>
      I build{" "}
      <span className='px-1 dark:bg-[#F2AA4C] bg-[#101820] text-[#F2AA4C] dark:text-[#101820] rounded'>
        <Typewriter
          words={[
            " sleek ",
            " intuitive ",
            "responsive",
            " dynamic ",
            'custo mised',
            "user-friendly",
          ]}
          loop={true}
          cursor
          cursorColor='white'
          cursorStyle='|'
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={2500}
        />
      </span>{" "}
      <span>web solutions to help you or your business grow seamlessly.</span>
    </h1>
  );
};

export default HeroTyping;
