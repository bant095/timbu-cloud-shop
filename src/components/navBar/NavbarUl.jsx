import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavbarUl = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to the element with the 'shoes' ID when the route matches '/shoes'
    if (location.pathname === '/shoes') {
      const element = document.getElementById('shoes');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Re-run the effect whenever the location changes

  const handleClick = (route) => {
    navigate(route); // Use navigate to change the route
  };
  return (
    <ul className='flex flex-col lg:flex-row items-center gap-24 md:text-sm lg:text-base'>
      <li>
        <button
          onClick={() => handleClick('/shoes')}
          className=' text-[#1C1C1C] hover:text-[#2FCD1A] font-medium'
        >
          SHOES
        </button>
      </li>
      <li>
        <Link
          to='/cart'
          className=' text-[#1C1C1C] hover:text-[#2FCD1A] font-medium'
        >
          CART
        </Link>
      </li>
      <li>
        <Link
          to='/checkout'
          className=' text-[#1C1C1C] hover:text-[#2FCD1A] font-medium'
        >
          CHECKOUT
        </Link>
      </li>
    </ul>
  );
};

export default NavbarUl;
