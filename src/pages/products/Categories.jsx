import React, { useState } from 'react';
import './index.css';

const Categories = ({ categories, filterItems }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (category) => {
    setActiveCategory(category);
    filterItems(category);
  };

  return (
    <div className='btn-container'>
      {categories.map((category, index) => (
        <button
          type='button'
          className={`filter-btn ${
            activeCategory === category ? 'active' : ''
          }`}
          key={index}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
