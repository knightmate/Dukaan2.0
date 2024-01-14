"use client"
import React from 'react';
import CategoriesNavBar from '../CategoriesNavbar/CategoriesNavBar';


const Body: React.FC<any> = () => {
    const fakeCategories = [
        { id: 'Fruits', isSelected: false },
        { id: 'Vegetables', isSelected: false },
        { id: 'Dairy', isSelected: false },
        { id: 'Bakery', isSelected: false },
        // Add more categories as needed
      ];

  return (
    <div className=''> 
   <div className='relative containerBorderBottom'> 
   <div className='container'>
   <CategoriesNavBar categories={fakeCategories} onClick={function (categoryId: string): void {
        throw new Error("Function not implemented.");
      } }/>
   </div>
  </div>  

      <div style={{height:"1000px",backgroundColor:"ActiveCaption"}}>

      </div>

  </div>

  );
};

export default Body;
