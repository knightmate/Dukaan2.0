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
   <div> 
    <CategoriesNavBar categories={fakeCategories} onClick={function (categoryId: string): void {
        throw new Error("Function not implemented.");
      } }/>
  </div>   

  );
};

export default Body;
