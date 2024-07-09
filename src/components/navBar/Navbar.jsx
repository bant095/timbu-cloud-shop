import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarUl from './NavbarUl';
// import { MdOutlineMenu } from 'react-icons/md';
import { RiMenu3Fill } from 'react-icons/ri';
import MobileNavBar from './MobileNavBar';

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav className='flex justify-between items-center bg-[#D9D9D9] w-full md:block fixed z-50 h-16 text-[16px]'>
      <div className='  flex flex-row justify-between align-center items-center py-6 px-10'>
        <div>
          <Link
            to='/'
            className=' text-[#2FCD1A] hover:text-[#1C1C1C] font-bold'
          >
            TIMBU CLOUD SHOP
          </Link>
        </div>
        {/* menus */}

        <div className='hidden lg:flex'>
          <NavbarUl />
        </div>
      </div>

      {/* handburger */}
      <div onClick={() => setMobileNav(!mobileNav)} className='lg:hidden'>
        <RiMenu3Fill />
        <MobileNavBar mobileNav={mobileNav} setMobileNav={setMobileNav} />
      </div>
    </nav>
  );
};

export default Navbar;
