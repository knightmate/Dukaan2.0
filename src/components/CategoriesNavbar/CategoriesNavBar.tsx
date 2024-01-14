"use client"

import React, { useState } from 'react';
import Styles from './styles.module.css'

interface Category {
  id: string;
  isSelected: boolean;
  qnty: number
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
  const activeTabStyle = {
    color: '#146eb4',
    borderColor: "#146eb4",
    borderBottomWidth: "2px"
    // Add other styles if needed
  };

  return (
    <div className='relative flex'>
     <div className='flex items-center' >
     <div style={{borderRightWidth:'1px',borderColor:"#dcdcdc",display:'flex',padding:'3px 3px 3px 0',marginRight:'2px'}}>
       <span className='text3' > All Categories</span>
      </div>
      </div>
      <div style={{ maxWidth: 'calc(100% - 90px)' }} className="overflow-x-auto padding-bottom-10">
        <ul
          id="categoriesContainer"
          className="flex space-x-2 list-none p-0"
          style={{}}
        >
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => onClick(category.id)}
              style={{ padding:'10px' }}
              className={`cursor-pointer ${category.isSelected ? 'active-bar' : ''} relative`}
            >
              <span className='text3' style={{ color: category.isSelected ? "#146eb4" : "" }}>
                {category.id}
              </span>
              <span style={{ margin: '0 2px' }}></span>
              <span className='text3' style={{ color: category.isSelected ? "#146eb4" : "" }}>
                ({category.qnty})
              </span>

            </li>
          ))}
          <div className="right-0 absolute rightIcon cursor-pointer" onClick={() => { }}>
            <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" className="fill-current text-gray-300"></rect>
              <path className="fill-current text-gray-800" fill-rule="evenodd" clip-rule="evenodd" d="M20.3813 10.3784C20.723 10.0366 21.277 10.0366 21.6187 10.3784L28.6187 17.3784C28.9604 17.7201 28.9604 18.2741 28.6187 18.6158L21.6187 25.6158C21.277 25.9575 20.723 25.9575 20.3813 25.6158C20.0396 25.2741 20.0396 24.7201 20.3813 24.3784L26.7626 17.9971L20.3813 11.6158C20.0396 11.2741 20.0396 10.7201 20.3813 10.3784Z"></path>
            </svg>
          </div>
        </ul>
      </div>
      
    </div>
  );
};

export default CategoriesNavBar;


// <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
//         <button
//           onClick={() => handleScroll('right')}
//           className="px-2 py-1 bg-gray-300 text-gray-600 rounded-r-md"
//         >
//           {'>'}
//         </button>
//         </div>