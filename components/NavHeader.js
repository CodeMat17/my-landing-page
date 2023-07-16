'use client'

import ThemeButton from './ThemeButton'
import LogoComponent from './LogoComponent';
import MobileNav from './MobileNav';

const NavHeader = () => {
  return (
    <div className='sticky top-0 z-50 border pl-2 pr-4 py-0.5 border-r-0 border-l-0 border-t-0 border-[#d99234] dark:border-[#042647] border-b-2 dark:bg-[#031e39] bg-[#F2AA4C] dark:text-[#F2AA4C] text-[#031e39]'>
      <div className='flex items-center justify-between'>
        <LogoComponent />
        <div className='flex items-center space-x-4'>
          <ThemeButton />
          <div>
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavHeader