"use client"
import React, { useState } from 'react';
import CategoriesNavBar from '../CategoriesNavbar/CategoriesNavBar';
import CategorySection from '../CategorySection';
import getData from '../../../data';


interface Product {
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  productActualPrice: number;
  discountPercent: number;
}

interface FakeCategory {
  id: string;
  qnty: number;
  isSelected: boolean;
}

export interface Category {
  categoryId: string;
  categoryName: string;
  isSelected:boolean;
  products: Product[];
}

 
const Body: React.FC<any> = () => {

        
const [ categories,setCategories]=useState<Category[]>(()=>{
  return getData()
}); 
const [selectedCategoryId,setSelectedCategory]=useState(0);
 
 
   return (
    <div> 
     <div className='relative   sticky top-16 z-20 bg-white '> 
    <CategoriesNavBar categories={categories} onClick={(selectedId)=>{
        const updatedData=categories.map((data)=>{
              if(data.categoryId==selectedId){
                data.isSelected=true
              }else{
                data.isSelected=false
              }        
          return data
       })
       const selectedCategoryId=updatedData.findIndex(({isSelected})=>isSelected);
       setSelectedCategory(selectedCategoryId);
       setCategories(updatedData)

   }}/>
   <CategorySection selectedCategory={selectedCategoryId} categories={categories} />
   </div>
      
  </div>

  );
};

export default Body;
