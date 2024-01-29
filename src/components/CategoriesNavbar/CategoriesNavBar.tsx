"use client"

import React, { useEffect, useRef, useState } from 'react';
import Styles from './styles.module.css'
import { Category } from '../Body';


interface CategoriesNavBarProps {
  categories: Category[];
  onClick: (categoryId: string) => void;
}

const CategoriesNavBar: React.FC<CategoriesNavBarProps> = ({ categories, onClick }) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const preSelectedIndex = categories.findIndex((categories) => categories.isSelected);
  const refContainer = useRef(null)
  const [leftArrowVisible, setLeftArrow] = useState(false);



  useEffect(() => {

    if (preSelectedIndex == 0) {
      setLeftArrow(false)
    } else {
      setLeftArrow(true)
    }

  }, [preSelectedIndex]);

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

  const scrollCategory = (newSelectedItemIndex: number) => {

    const calculateDistance = (preSelectedIndex: number, newSelectedItemIndex: number) => {
      return Math.abs(newSelectedItemIndex - preSelectedIndex);
    };
    const dstnc = calculateDistance(preSelectedIndex, newSelectedItemIndex)
    const calOffset = 300//dstnc>0?dstnc*10:40;

    if (newSelectedItemIndex < preSelectedIndex) {
      console.log("---", dstnc)
      scroll(-calOffset);
    } else {
      scroll(calOffset);

    }

  };
  const scroll = (offset: number) => {
    refContainer.current.scrollLeft += offset;
  };


  const renderBackArrow = () => {
    return (
      <div style={{ height: '90%', zIndex: 10 }} className="flex left-0 absolute rightIcon cursor-pointer items-center" onClick={() => { scroll(-200) }}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" transform="matrix(-1 0 0 1 36 0)" fill="url(#paint0_linear_6268_5986)"></rect>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6187 10.3788C15.277 10.0371 14.723 10.0371 14.3813 10.3788L7.38128 17.3788C7.03957 17.7205 7.03957 18.2746 7.38128 18.6163L14.3813 25.6163C14.723 25.958 15.277 25.958 15.6187 25.6163C15.9604 25.2746 15.9604 24.7205 15.6187 24.3788L9.23744 17.9976L15.6187 11.6163C15.9604 11.2746 15.9604 10.7205 15.6187 10.3788Z" fill="#808080"></path>
          <defs>
            <linearGradient id="paint0_linear_6268_5986" x1="2.68221e-07" y1="18" x2="36" y2="18" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0.08"></stop>
              <stop offset="0.333333" stop-color="white" stop-opacity="0.95"></stop>
              <stop offset="1" stop-color="white"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  return (
    <div className='flex containerBorderBottom container stickyCategory'>
      <div className='flex items-center hide-mobile'  >
        <div style={{ borderRightWidth: '1px', borderColor: "#dcdcdc", display: 'flex', padding: '3px 3px 3px 0', marginRight: '2px' }}>
          <span className='text3' > All Categories</span>
        </div>
      </div>
      <div style={{ width: '100%', position: 'relative' }}  >
        <div ref={refContainer} style={{ maxWidth: 'calc(100% - 50px)', height: '100%' }} className="overflow-x-auto padding-bottom-10 hide-mobile ">
          <ul
            className="flex space-x-2 list-none p-0  "
            style={{ height: '100%' }}
          >
            {leftArrowVisible && (renderBackArrow())}
            {categories.map((category, index) => (
              <a  >
                <li
                  key={category.categoryId}
                  onClick={() => {
                    scrollCategory(index)
                    onClick(category.categoryId)
                  }}
                  style={{ padding: '10px' }}
                  className={`cursor-pointer ${category.isSelected ? 'active-bar' : ''} relative`}
                >
                  <span className='text3' style={{ color: category.isSelected ? "#146eb4" : "" }}>
                    {category.categoryId}
                  </span>
                  <span style={{ margin: '0 2px' }}></span>
                  <span className='text3' style={{ color: category.isSelected ? "#146eb4" : "" }}>
                    ({category.products.length})
                  </span>

                </li>
              </a>
            ))}
            <div style={{ height: '100%' }} className="flex right-0 absolute rightIcon cursor-pointer items-center" onClick={() => { }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" fill="url(#paint0_linear_6014_4390)"></rect>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3813 10.3784C20.723 10.0366 21.277 10.0366 21.6187 10.3784L28.6187 17.3784C28.9604 17.7201 28.9604 18.2741 28.6187 18.6158L21.6187 25.6158C21.277 25.9575 20.723 25.9575 20.3813 25.6158C20.0396 25.2741 20.0396 24.7201 20.3813 24.3784L26.7626 17.9971L20.3813 11.6158C20.0396 11.2741 20.0396 10.7201 20.3813 10.3784Z" fill="#808080"></path>
                <defs>
                  <linearGradient id="paint0_linear_6014_4390" x1="2.68221e-07" y1="18" x2="36" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0.08"></stop>
                    <stop offset="0.333333" stop-color="white" stop-opacity="0.95"></stop>
                    <stop offset="1" stop-color="white"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </ul>
        </div>
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