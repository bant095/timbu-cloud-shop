import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import './index.css';

const ProductSection = ({ items }) => {
  const navigate = useNavigate();
  const [clickedItems, setClickedItems] = useState([]);

  const handleAddToCart = (itemId) => {
    setClickedItems([...clickedItems, itemId]);
    navigate('/cart');
  };

  return (
    <div className='section-center'>
      {items.map((item) => (
        <article key={item.id} className='project-item'>
          <div className='flex justify-between items-center m-4'>
            <p className='bg-[#2FCD1A] text-white font-medium px-2 py-1'>
              {item.itemNew}
            </p>

            <button
              onClick={() => handleAddToCart(item.id)}
              className={`p-2 rounded-full ${
                clickedItems.includes(item.id) ? 'bg-red-500' : 'bg-none'
              }`}
            >
              <CiHeart className='w-6 h-6 text-black' />
            </button>
          </div>

          <img src={item.imgProduct} alt={item.cartName} className='w-full' />

          <div className='item-info flex items-center justify-between px-4'>
            <div>
              <h4>{item.cartName}</h4>
              <p className='item-text'>{item.desc}</p>
            </div>
            <h3>&#8358;{item.price}</h3>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductSection;
