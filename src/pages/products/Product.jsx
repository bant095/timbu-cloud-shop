import React, { useState, useEffect } from 'react';
import items from './data';
import Categories from './Categories';
import Project from './ProductSection';
import './index.css';

const Product = () => {
  const [projectItems, setProjectItems] = useState([]);
  const uniqueCategories = [...new Set(items.map((item) => item.category))];

  useEffect(() => {
    const storedCategory = sessionStorage.getItem('activeCategory');
    if (storedCategory) {
      filterItems(storedCategory);
    } else {
      setProjectItems(items);
    }
  }, []);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setProjectItems(newItems);

    sessionStorage.setItem('activeCategory', category);
  };

  return (
    <section id='shoes'>
      <div>
        <Categories categories={uniqueCategories} filterItems={filterItems} />
        <Project items={projectItems} />
      </div>

      <div className='flex items-center justify-center relative m-20'>
        <span className='h-[1px] w-full bg-gray-300 m-[10px]'></span>
        <button className='px-4 lg:text-[16px] text-[12px] py-2 absolute bg-white text-gray-800 border border-[#2FCD1A] rounded-md hover:bg-[#2FCD1A] hover:text-white'>
          SEE ALL PRODUCTS
        </button>
      </div>
    </section>
  );
};

export default Product;
