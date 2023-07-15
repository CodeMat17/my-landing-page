"use client";

import { Typewriter } from "react-simple-typewriter";

const HeroTyping = () => {
  return (
    <h1 className='text-lg opacity-70'>
      I build{" "}
      <span className='px-1 bg-[#F2AA4C] text-[#101820] rounded'>
        <Typewriter
          words={[" sleek ", " intuitive ", 'responsive', " dynamic "]}
          loop={true}
          cursor
          cursorColor='white'
          cursorStyle='|'
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={2500}
        />
      </span>{" "}
      <span>
        web solutions to help you or your business grow seamlessly.
      </span>
    </h1>
  );
};

export default HeroTyping;
