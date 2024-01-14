"use client"

import React, { useState } from 'react';

interface Category {
  id: string;
  isSelected: boolean;
}

interface CategoriesNavBarProps {
  categories: Category[];
  onClick: (categoryId: string) => void;
}

const CategoriesNavBar: React.FC<CategoriesNavBarProps> = ({ categories, onClick }) => {
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (scrollDirection: 'left' | 'right') => {
    const container = document.getElementById('categoriesContainer');

    if (container) {
      const scrollAmount = 200; // Adjust the scroll amount based on your preference
      if (scrollDirection === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
      setScrollLeft(container.scrollLeft);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto overflow-x-scroll">
      <div
        id="categoriesContainer"
        className="flex space-x-4 p-4"
        style={{ maxWidth: '800px' }}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => onClick(category.id)}
            className={`cursor-pointer px-4 py-2 rounded-md ${
              category.isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {category.id}
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={() => handleScroll('left')}
          className="px-2 py-1 bg-gray-300 text-gray-600 rounded-l-md"
        >
          {'<'}
        </button>
        <button
          onClick={() => handleScroll('right')}
          className="px-2 py-1 bg-gray-300 text-gray-600 rounded-r-md"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default CategoriesNavBar;
