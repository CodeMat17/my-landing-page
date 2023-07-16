import { Link } from "react-scroll";

const DesktopNav = () => {
    return (
      <div className='hidden md:inline-flex'>
        <li className='cursor-pointer transition-all transform duration-700 px-3 py-2 font-semibold tracking-widest text-[#092e54] dark:text-[#F2AA4C] hover:bg-[#092e544a] dark:hover:bg-[#b7894c56] hover:text-white dark:hover:text-white group flex w-full items-center rounded-lg'>
          <Link to='hero' spy={true} smooth={true} offset={-150} duration={500}>
            HOME
          </Link>
        </li>

        <li className='whitespace-nowrap cursor-pointer transition-all transform duration-700 px-3 py-2 font-semibold tracking-widest text-[#092e54] dark:text-[#F2AA4C] hover:bg-[#092e544a] dark:hover:bg-[#b7894c56] hover:text-white dark:hover:text-white group flex w-full items-center rounded-lg'>
          <Link to='about' spy={true} smooth={true} offset={-50} duration={500}>
            ABOUT ME
          </Link>
        </li>

        <li className='hidden lg:flex cursor-pointer transition-all transform duration-700 px-3 py-2 font-semibold tracking-widest text-[#092e54] dark:text-[#F2AA4C] hover:bg-[#092e544a] dark:hover:bg-[#b7894c56] hover:text-white dark:hover:text-white group  w-full rounded-lg'>
          <Link to='skills' spy={true} smooth={true} offset={-50} duration={500}>
           SKILLS
          </Link>
        </li>

        <li className='cursor-pointer transition-all transform duration-700 px-3 py-2 font-semibold tracking-widest text-[#092e54] dark:text-[#F2AA4C] hover:bg-[#092e544a] dark:hover:bg-[#b7894c56] hover:text-white dark:hover:text-white group flex w-full items-center rounded-lg'>
          <Link to='experience' spy={true} smooth={true} offset={-50} duration={500}>
           EXPERIENCE
          </Link>
        </li>

        <li className='cursor-pointer transition-all transform duration-700 px-3 py-2 font-semibold tracking-widest text-[#092e54] dark:text-[#F2AA4C] hover:bg-[#092e544a] dark:hover:bg-[#b7894c56] hover:text-white dark:hover:text-white group flex w-full items-center rounded-lg'>
          <Link to='education' spy={true} smooth={true} offset={-50} duration={500}>
            EDUCATION
          </Link>
        </li>

        <li className='cursor-pointer transition-all transform duration-700 px-3 py-2 font-semibold tracking-widest text-[#092e54] dark:text-[#F2AA4C] hover:bg-[#092e544a] dark:hover:bg-[#b7894c56] hover:text-white dark:hover:text-white group flex w-full items-center rounded-lg'>
          <Link to='projects' spy={true} smooth={true} offset={-50} duration={500}>
            PROJECTS
          </Link>
        </li>
      </div>
    );
};

export default DesktopNav;
