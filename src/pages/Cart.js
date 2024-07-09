import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  return (
    <section className='h-screen pt-32 px-10 flex flex-col lg:mb-96 mb-[550px]'>
      <h1 className='font-bold text-3xl text-[#2FCD1A] mb-8'>MY CART</h1>

      {/* Cart Item Headers  */}
      <div className='flex flex-col md:flex-row justify-between font-medium items-center w-full py-8 '>
        <h4 className='text-lg md:pl-32'>PRODUCT</h4>
        <div className='flex md:flex-row flex-col md:justify-between md:pl-48 md:pr-16 items-center w-full md:w-[55%]'>
          <h4 className='text-lg'>PRICE</h4>
          <h4 className='text-lg'>QTY</h4>
        </div>
      </div>

      {/* Cart Item 1 */}
      <div className='flex flex-col sm:flex-row justify-between items-center w-[100%] p-6 bg-[#D9D9D9] mb-10'>
        <div className='flex justify-between md:w-[60%] w-full gap-6 md:gap-28 items-center'>
          <img
            src='https://ik.imagekit.io/gru3qfrss/products/Dunk%20Low.png?'
            alt='Dunk Low'
            className='w-32 h-32 rounded-md'
          />
          <div className='flex-grow pr-4'>
            <h4 className='text-base font-bold mb-2'>Dunk Low</h4>
            <p className='text-xs text-gray-500'>65434567</p>
          </div>
        </div>
        <div className='flex md:flex-row flex-col w-full md:w-[40%] mt-4 md:mt-0 justify-between items-center'>
          <div className='text-xs text-gray-500 space-y-1 md:mt-2 order-2 md:order-1'>
            <p>+ extra cruset laces</p>
            <p>+ extra side logos</p>
            <p className='text-base font-semibold text-black'>₦89,000</p>
          </div>
          <div className='flex flex-col items-end space-y-2 font-bold order-1 md:order-2'>
            <div className='flex items-center space-x-2'>
              <button className='px-3 py-1'>-</button>
              <span>2</span>
              <button className='px-3 py-1'>+</button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Item 2  */}
      <div className='flex flex-col sm:flex-row justify-between items-center w-[100%] p-6 bg-[#D9D9D9] mb-10'>
        <div className='flex justify-between md:w-[60%] w-full gap-6 md:gap-28 items-center'>
          <img
            src='https://ik.imagekit.io/gru3qfrss/products/AF1.png?'
            alt='AF1'
            className='w-32 h-32 rounded-md'
          />
          <div className='flex-grow pr-4'>
            <h4 className='text-base font-bold mb-2'>AF1</h4>
            <p className='text-xs text-gray-500'>65430097</p>
          </div>
        </div>
        <div className='flex md:flex-row flex-col w-full md:w-[40%] mt-4 md:mt-0 justify-between items-center'>
          <div className='text-xs text-gray-500 space-y-1 md:mt-2 order-2 md:order-1'>
            <p className='mt-2 text-xs text-gray-500'>+ extra Packaging Box</p>
            <p className='text-base font-semibold text-black'>₦80,000</p>
          </div>
          <div className='flex flex-col items-end space-y-2 font-bold order-1 md:order-2'>
            <div className='flex items-center space-x-2'>
              <button className='px-3 py-1 '>-</button>
              <span>1</span>
              <button className='px-3 py-1 '>+</button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtotal */}
      <div className='flex justify-end mt-8'>
        <p className='text-lg font-semibold'>Subtotal: ₦ 258,000</p>
      </div>

      {/* Continue Shopping Button */}
      <button
        className='mt-auto w-full md:w-64 lg:mb-10 flex gap-3 items-center px-4 lg:text-[16px] text-[12px] py-2 bg-white text-gray-800 border border-[#2FCD1A] rounded-md hover:bg-[#2FCD1A] hover:text-white'
        onClick={() => navigate('/')}
      >
        <FaArrowLeftLong />
        Continue Shopping
      </button>
    </section>
  );
};

export default Cart;
