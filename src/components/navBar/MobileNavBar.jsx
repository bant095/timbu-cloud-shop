import React from 'react';
import NavbarUl from './NavbarUl';
import { IoMdClose } from 'react-icons/io';

const MobileNavBar = ({ mobileNav, setMobileNav }) => {
  return (
    <div>
      {mobileNav ? (
        <div className='bg-[#D9D9D9] fixed h-full w-full top-0 left-0 z-10'></div>
      ) : (
        ''
      )}
      <div
        className={
          mobileNav
            ? 'fixed top-0 left-0 w-[100%] h-full z-10 bg-transparent duration-500'
            : 'fixed top-0 left-[-100%] h-full bg-[#D9D9D9] duration-500 z-10'
        }
      >
        <button onClick={() => setMobileNav(!mobileNav)}>
          <IoMdClose className='text-right' />
        </button>
        <nav className='flex flex-col gap-6 justify-center items-center '>
          <NavbarUl />
        </nav>
      </div>
    </div>
  );
};

export default MobileNavBar;
