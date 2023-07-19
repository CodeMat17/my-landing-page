"use client";

import Image from "next/image";
import { useState } from "react";
import { GiClick } from "react-icons/gi";

const ProjectCard = ({ image, alt, title, desc, link }) => {
  const [warn, setWarn] = useState(false);

  const openWarning = () => {
    if (warn === false) {
      setWarn(true);
    } else {
      setWarn(false);
    }
  };

  return (
    <div className='relative '>
      <div className='shadow-2xl border bg-white bg-opacity-10 transition transform duration-500 hover:scale-110 border-[#d99a47] dark:border-[#1d3042] rounded-lg overflow-hidden'>
        <div className='relative w-full h-[180px]'>
          <Image fill alt={alt} src={image} />
        </div>
        <div className='px-4 py-3'>
          <h2 className='text-xl'>{title}</h2>
          <p className='opacity-70'>{desc}</p>
        </div>
        {warn && (
          <p className='px-4 text-sm text-red-500'>
            The app is restricted to only the cooperative members.
          </p>
        )}
      </div>
      <div className='absolute -right-2 -bottom-2'>
        <span className='relative flex h-6 w-6 group'>
          <span className='animate-ping-slow absolute inline-flex h-6 w-6 rounded-full bg-[#101820] dark:bg-[#F2AA4C] opacity-75'></span>
          <span className='relative inline-flex rounded-full py-2 transition-all transform duration-300 hover:bg-[#dd7e02] dark:hover:bg-[#012140]'>
            {link === "#" ? (
              <>
                <button aria-label='view project' onClick={openWarning}>
                  <GiClick size={25} />
                </button>
              </>
            ) : (
              <a href={link} target='_blank'>
                <GiClick size={25} />
              </a>
            )}
          </span>
        </span>
      </div>
      {/* <span className='relative flex h-48 w-48'>
        <span className='animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[#304d6a] opacity-75'></span>
        <span className='relative inline-flex rounded-full h-48 w-48 '></span>
      </span> */}
    </div>
  );
};

export default ProjectCard;
