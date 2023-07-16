'use client '

import { Menu, Transition } from "@headlessui/react";
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { Fragment } from "react";

const MobileNav = () => {
  return (
    <Menu as='div' className='relative inline-block text-left md:hidden'>
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className={`p-1 transition duration-200 text-4xl rounded-lg border ${
                open
                  ? "border-red-900 text-red-600 transition rotate-[-90deg]"
                  : "border-blue-900 text-[#0870ad] transition"
              } `}>
              {open ? (
                <MdClose aria-hidden='true' />
              ) : (
                <HiMenuAlt3 aria-hidden='true' />
              )}
            </Menu.Button>
          </div>

          {/* Use the `Transition` component. */}
          <Transition
            show={open}
            as={Fragment}
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'>
            {/* Mark this component as `static` */}
            <Menu.Items
              static
              className='origin-top-right absolute right-0 transition-all duration-500 flex flex-col mt-2 rounded-lg w-56 overflow-hidden shadow-2xl ring-1 ring-black ring-opacity-5 focus:ontline-none'>
              <div className='p-1 w-full'>
                <Menu.Item
                  as='a'
                  className='ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black'>
                  {/* <Link
                  href='/'
                  className='transition duration-500 p-4 ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-gray-300 dark:ui-not-active:bg-gray-600 ui-not-active:text-black dark:ui-not-active:text-white shadow-lg'>
                  HOME
                </Link> */}
                  HOME
                </Menu.Item>
              </div>
              {/* <Menu.Item>
                <Link
                  href='/repay'
                  className='transition duration-500 p-4 ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-gray-300 dark:ui-not-active:bg-gray-600 ui-not-active:text-black dark:ui-not-active:text-white shadow-lg'>
                  REPAY
                </Link>
              </Menu.Item> */}

              {/* <div className='w-full flex items-center justify-between'>
                <Menu.Item className='w-full'>
                  <a
                    href='tel:+2348079551587'
                    className='transition duration-500 w-full inline-flex items-center justify-center p-4 ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-gray-400 dark:ui-not-active:bg-gray-700 ui-not-active:text-black dark:ui-not-active:text-blue-500 shadow-lg'>
                    <MdCall className={`  text-2xl font-semibold `} />
                  </a>
                </Menu.Item>
                <Menu.Item className='w-full'>
                  <a
                    href='mailto:nfvcbcoop@gmail.com'
                    className='transition duration-500 w-full inline-flex items-center justify-center p-4 ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-gray-400 dark:ui-not-active:bg-gray-700 ui-not-active:text-black dark:ui-not-active:text-blue-500 shadow-lg'>
                    <BiMailSend className={`  text-2xl font-semibold `} />
                  </a>
                </Menu.Item>
                <Menu.Item className='w-full '>
                  <a
                    href='https://wa.me/2348079551587'
                    className='transition duration-500 w-full inline-flex items-center justify-center p-4 ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-gray-400 dark:ui-not-active:bg-gray-700 ui-not-active:text-black dark:ui-not-active:text-blue-500 shadow-lg'>
                    <BsWhatsapp className={`  text-2xl font-semibold `} />
                  </a>
                </Menu.Item>
              </div> */}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default MobileNav