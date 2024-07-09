import React from 'react';
import heroShoeImage from '../images/hero-shoe.png';
import Product from './products/Product';

const Home = () => {
  return (
    <main className=''>
      <section className='bg-[#D9D9D9] pt-20 px-10 lg:flex flex-row items-center w-full'>
        {/* left hero */}
        <div className='lg:w-[50%]'>
          <h2 className='font-semi-bold lg:text-[64px] text-[32px] text-[#1C1C1C]'>
            Step Into Style
          </h2>
          <p className='text-[16px] lg:w-[50%] py-2 text-[#1C1C1C]'>
            Find your perfect fit from our wide collection of premium footwear
          </p>
          <button className='bg-[#2FCD1A] text-white font-medium px-6 py-1 lg:my-12 my-6 cursor-pointer hover:bg-slate-900'>
            SHOP NOW
          </button>
        </div>
        {/* right hero*/}
        <div>
          <img
            src={heroShoeImage}
            className='w-[346px] h-auto ml-14'
            alt='shoe'
          />
        </div>
      </section>

      <section className='bg-white w-full'>
        <div>
          <Product />
        </div>
      </section>
    </main>
  );
};

export default Home;
