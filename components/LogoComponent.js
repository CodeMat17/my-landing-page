"use client";

import { Cookie } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const cookie = Cookie({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["system-ui", "arial"],
});

const LogoComponent = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")} className='relative cursor-pointer'>
      <div className='relative flex items-center justify-center w-[95px] h-[95px] animate-spin-slow'>
        <Image alt='logo' fill src='/web-dev-logo.webp' />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className='relative w-20 h-14 mb-2'>
          <Image alt='logo' fill priority src='/logo.webp' />
        </div>
      </div>

      {/* <div className=' flex items-center justify-center text-3xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#031e39] dark:bg-[#F2AA4C] text-[#F2AA4C] dark:text-[#031e39] px-2 py-1'> */}
        {/* <p className={cookie.className}>CM</p> */}
      {/* </div> */}
    </div>
  );
};

export default LogoComponent;
