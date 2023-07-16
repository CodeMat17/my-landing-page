import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import LogoComponent from "./LogoComponent";

const Footer = () => {
  return (
    <div className='dark:bg-[#011326] bg-[#a9640a]'>
      <div className='max-w-6xl mx-auto py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between'>
        <div className='pl-2 flex items-center justify-start'>
          <LogoComponent />
        </div>
        <div className='px-6'>
          <p className='text-2xl capitalize'>Follow Me</p>
          <div className=' pt-4 flex items-center space-x-4'>
            <Link
              href='https://twitter.com/matt_chuks'
              target='_blank'
              className='transition-all transform duration-300 p-2 bg-[#031e39] dark:bg-[#F2AA4C] text-[#F2AA4C] dark:text-[#031e39] hover:bg-[#F2AA4C] dark:hover:bg-[#031e39] hover:text-[#031e39] dark:hover:text-[#F2AA4C] hover:scale-150 hover:border hover:border-dashed hover:border-[#6b5230] rounded-full'>
              <LuTwitter size={25} />
            </Link>

            <Link
              href='https://www.linkedin.com/in/matthew-chukwu-48851083'
              target='_blank'
              className='transition-all transform duration-300 p-2 bg-[#031e39] dark:bg-[#F2AA4C] text-[#F2AA4C] dark:text-[#031e39] hover:bg-[#F2AA4C] dark:hover:bg-[#031e39] hover:text-[#031e39] dark:hover:text-[#F2AA4C] hover:scale-150 hover:border hover:border-dashed hover:border-[#6b5230] rounded-full'>
              <FaLinkedin size={25} />
            </Link>
            {/* <Link href='/dummy.pdf' target='_blank'>
              Resume
            </Link> */}
          </div>
        </div>
      </div>
      <div className='text-center py-2 text-white bg-slate-900'>
        codeMat 2023.
      </div>
    </div>
  );
};

export default Footer;
