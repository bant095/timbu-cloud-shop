import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Visa } from '../images/visa2.svg';
import { ReactComponent as Mastercard } from '../images/mastercard.svg';
import { ReactComponent as Paypal } from '../images/paypal2.svg';

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <section className='lg:h-screen px-10 py-20 lg:mb-28'>
      {/* Back to Cart Button */}
      <button
        className='mt-auto  md:w-auto flex gap-3 items-center px-4 py-8 bg-white text-gray-800  md:mb-0'
        onClick={() => navigate('/cart')}
      >
        <FaArrowLeftLong />
        Back to Cart
      </button>

      <h1 className='text-3xl font-bold text-[#2FCD1A] mb-8'>
        Checkout Details
      </h1>

      <div className='lg:flex gap-10 items-center my-6'>
        <h2 className='text-xl font-semibold mb-4'>Credit Card</h2>
        <div className='flex gap-4 items-center mb-4'>
          <Visa />
          <Mastercard />
          <Paypal />
        </div>
      </div>

      {/* form and Order Summary */}
      <main className='h-screen lg:flex flex-row gap-4 w-full items-start justify-between'>
        {/* Checkout Form */}

        {/* form */}
        <div className='flex flex-col lg:w-[50%] gap-3'>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-[#9E9A9A] text-sm font-bold mb-2'
            >
              Name on card
            </label>
            <input
              type='text'
              id='name'
              className='w-full bg-[#e0e0e0] px-3 py-2 border rounded-md focus:outline-none focus:border-[#2FCD1A]'
              placeholder='Sharon Ray'
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='cardNumber'
              className='block text-[#9E9A9A] text-sm font-bold mb-2'
            >
              Card Number
            </label>
            <input
              type='text'
              id='cardNumber'
              className='w-full px-3 bg-[#e0e0e0] py-2 border rounded-md focus:outline-none focus:border-[#2FCD1A]'
              placeholder='6446 - 6546 - 9877 - 5288'
            />
          </div>

          <div className='flex space-x-4 mb-8'>
            <div className='w-1/2'>
              <label
                htmlFor='expiration'
                className='block text-[#9E9A9A] text-sm font-bold mb-2'
              >
                Expiration
              </label>
              <div className='flex'>
                <input
                  type='text'
                  id='expirationMonth'
                  className='w-12 bg-[#e0e0e0] px-3 py-2 border rounded-md focus:outline-none focus:border-[#2FCD1A]'
                  placeholder='04'
                />
                <span className='mx-2'>/</span>
                <input
                  type='text'
                  id='expirationYear'
                  className='w-12 px-3 bg-[#e0e0e0] py-2 border rounded-md focus:outline-none focus:border-[#2FCD1A]'
                  placeholder='14'
                />
              </div>
            </div>
            <div className='w-1/2'>
              <label
                htmlFor='cvv'
                className='block text-[#9E9A9A] text-sm font-bold mb-2'
              >
                CVV
              </label>
              <input
                type='text'
                id='cvv'
                className='w-full px-3 bg-[#e0e0e0] py-2 border rounded-md focus:outline-none focus:border-[#2FCD1A]'
                placeholder='564'
              />
            </div>
          </div>

          <button className='bg-[#2FCD1A] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none'>
            Submit Order
          </button>
        </div>

        {/* Order Summary */}
        <div className='md:w-1/3 mb-44 mt-8 lg:w-[40%] '>
          <div className='border rounded-md p-4 shadow-md  border-black'>
            <div className='border-b border-slate-400'>
              <div className='flex dlex-row mb-4 gap-3 justify-between items-center text-xl font-semibold'>
                <h2>Order Summary</h2>
                <p> ₦ 268,000</p>
              </div>

              <div className='flex dlex-row gap-3 justify-between items-center'>
                <p className='text-gray-700 mb-2'>Subtotal: </p>
                <p>268,000</p>
              </div>

              <div className='flex dlex-row gap-3 justify-between items-center'>
                <p className='text-gray-700 mb-2'>Tax: </p>
                <p>10</p>
              </div>
            </div>

            <div className='flex items-center gap-4 mt-4'>
              <img
                src='https://ik.imagekit.io/gru3qfrss/products/Dunk%20Low.png?'
                alt='Dunk Low'
                className='w-32 h-32 mr-4 object-cover rounded-md'
              />
              <div>
                <p className='text-sm font-medium'>Dunk Low</p>
                <p className='text-xs text-gray-500'>x2</p>
                <p className='text-sm font-semibold'>₦89,000</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Checkout;
