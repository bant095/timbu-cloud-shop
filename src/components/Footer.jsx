import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Visa } from '../images/Visa.svg';
import { ReactComponent as PayPal } from '../images/paypal.svg';
import { ReactComponent as AmericanExpress } from '../images/american-express.svg';
import { ReactComponent as SignupIcon } from '../images/icon-signup.svg';
import { ReactComponent as Facebook } from '../images/facebook.svg';
import { ReactComponent as Instagram } from '../images/instagram.svg';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <section className=''>
      <Link
        to='/'
        className='bg-[#D9D9D9] px-10 py-5 flex flex-row lg:gap-12 gap-3  items-center'
      >
        <SignupIcon />
        <h3 className='font-medium lg:text-[18px] text-[12px]'>
          SIGN UP HERE FOR EARLY ACCESS
        </h3>
      </Link>

      <div className='bg-[#000000] px-10 py-5 text-white text-[14px]'>
        <div className='lg:flex flex-row item-center justify-evenly gap-2'>
          {/* Info */}
          <div>
            <h3 className='py-5 font-semibold text-[20px]'>INFORMATION</h3>
            <div className='flex flex-col gap-2'>
              <Link to='/'>Delivery Information</Link>
              <Link to='/'>Site-map</Link>
            </div>
          </div>

          {/* Extras */}
          <div>
            <h3 className='py-5 font-semibold text-[20px]'>EXTRAS</h3>
            <div className='flex flex-col gap-2'>
              <Link to='/'>Vouchers</Link>
              <Link to='/'>Affiliates</Link>
              <Link to='/'>Specials</Link>
              <Link to='/'>Returns</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className='py-5 font-semibold text-[20px]'>CONTACT</h3>
            <div className='flex flex-row items-start lg:justify-evenly gap-3'>
              <Link
                to='https://www.facebook.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Facebook />
              </Link>
              <Link
                to='https://www.instagram.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Instagram />
              </Link>
              <Link
                to='https://www.x.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaXTwitter className='text-[26px]' />
              </Link>
            </div>
          </div>
        </div>

        <div className='pt-10'>
          <div className='flex flex-row justify-center item-center gap-10'>
            <Visa />
            <PayPal />
            <AmericanExpress />
          </div>
          <div className='pt-6'>
            <p className='text-center mb-0 text-white'>
              &copy; {new Date().getFullYear()}; Powered by AbolajiA. HNG
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
