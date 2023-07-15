import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { MdOutlineCall } from "react-icons/md";
import { TbMailCheck } from "react-icons/tb";
import HeroTyping from "./HeroTyping";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="py-12">
      <p className='text-center text-lg font-light'>
        Are you looking for a professional web developer?
      </p>
      <div className='flex flex-col md:flex-row md:items-center md:justify-around'>
        <div className='relative my-12 py-8 w-full h-full flex flex-col justify-center items-center md:order-last md:max-w-md'>
          <span className='relative flex h-48 w-48'>
            <span className='animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[#304d6a] opacity-75'></span>
            <span className='relative inline-flex rounded-full h-48 w-48 '></span>
          </span>
          <div className='absolute -top-4'>
            <div className='relative w-full h-[300px] aspect-square'>
              <Image alt='dev image' fill src='/dev.webp' />

              <div className='absolute top-0 left-8 '>
                <span className='relative flex h-3 w-3'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4478ad] opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-3 w-3 '></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='md:pl-6 lg:pl-20 lg:max-w-lg'>
          <p className='text-lg opacity-70'>Here is</p>
          <div>
            <h1 className='text-4xl md:text-5xl tracking-widest font-light py-2'>
              Matthew.
            </h1>
            <p className='text-2xl  font-light pb-2'>
              I am a freelance full stack React developer.
            </p>

            <HeroTyping />

            <div className='py-4'>
              <h1 className='text-lg'>CONTACT ME</h1>
              <div className=' pt-2 flex items-center space-x-4'>
                <button className='transition-all transform duration-300 p-2 bg-[#F2AA4C] text-[#101820] hover:bg-transparent hover:text-[#F2AA4C] hover:scale-150 hover:border hover:border-dashed hover:border-[#6b5230] rounded-full'>
                  <MdOutlineCall size={25} />
                </button>

                <button className='transition-all transform duration-300 p-2 bg-[#F2AA4C] text-[#101820] hover:bg-transparent hover:text-[#F2AA4C] hover:scale-150 hover:border hover:border-dashed hover:border-[#6b5230] rounded-full'>
                  <TbMailCheck size={25} />
                </button>
                <button className='transition-all transform duration-300 p-2 bg-[#F2AA4C] text-[#101820] hover:bg-transparent hover:text-[#F2AA4C] hover:scale-150 hover:border hover:border-dashed hover:border-[#6b5230] rounded-full'>
                  <BsWhatsapp size={25} />
                </button>
                <button className='transition-all transform duration-300 p-2 bg-[#F2AA4C] text-[#101820] hover:bg-transparent hover:text-[#F2AA4C] hover:scale-150 hover:border hover:border-dashed hover:border-[#6b5230] rounded-full'>
                  <FaLinkedin size={25} />
                </button>
                <button className='transition-all transform duration-300 p-2 bg-[#F2AA4C] text-[#101820] hover:bg-transparent hover:text-[#F2AA4C] hover:scale-150 hover:border hover:border-dashed hover:border-[#6b5230] rounded-full'>
                  <LuTwitter size={25} />
                </button>
                <Link href='/dummy.pdf' target="_blank">Resume</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;