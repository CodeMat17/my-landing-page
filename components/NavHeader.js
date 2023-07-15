import React from 'react'
import ThemeButton from './ThemeButton'

const NavHeader = () => {
  return (
    <div className='sticky top-0 z-50 border border-r-0 border-l-0 border-t-0 border-[#d99234] dark:border-[#031e39] border-b-2 p-4 dark:bg-[#031e39] bg-[#F2AA4C] dark:text-[#F2AA4C] text-[#031e39]'>
      <div className='flex items-center justify-between'>
        <p>NAV</p>
        <div>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}

export default NavHeader