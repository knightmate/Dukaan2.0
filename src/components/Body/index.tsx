"use client"
import React, { useState } from 'react';
import CategoriesNavBar from '../CategoriesNavbar/CategoriesNavBar';
import CategorySection from '../CategorySection';


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

const fake: FakeCategory[] = [
  { id: 'DeliciousFruitsForYou', qnty: Math.floor(Math.random() * 100) + 1, isSelected: true },
  { id: 'VariousVegetables', qnty: Math.floor(Math.random() * 100) + 1, isSelected: false },
  { id: 'DairyDelights', qnty: Math.floor(Math.random() * 100) + 1, isSelected: false },
  { id: 'BakeryTreats', qnty: Math.floor(Math.random() * 100) + 1, isSelected: false },
  { id: 'CondimentsCollection', qnty: Math.floor(Math.random() * 100) + 1, isSelected: false },
  { id: 'FreshSeafoodOptions', qnty: Math.floor(Math.random() * 100) + 1, isSelected: false },
];

const fakeProduct: Product = {
  productId: 'akha-masur',
  productName: 'Akha Masur',
  productImage: 'https://dukaan.b-cdn.net/280x280/webp/upload_file_service/f68c8f38-d83f-4770-a09e-ceeb3547b599/1686808798094.jpeg',
  productPrice: 75,
  productActualPrice: 80,
  discountPercent: 6,
};

const generateRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProductsForCategory = (categoryId: string, minProducts: number, maxProducts: number): Product[] => {
  const numProducts = generateRandomNumber(minProducts, maxProducts);
  const products: Product[] = [];

  for (let i = 1; i <= numProducts; i++) {
    products.push({
      ...fakeProduct,
      productId: `${fakeProduct.productId}-${categoryId}-${i}`,
    });
  }

  return products;
};

const generateCategories = (fakeCategories: FakeCategory[], minProducts: number, maxProducts: number): Category[] => {
  const categories: Category[] = [];

  fakeCategories.forEach((fakeCategory) => {
    const categoryId = fakeCategory.id;
    const categoryName = fakeCategory.id;

    const categoryProducts = generateProductsForCategory(categoryId, minProducts, maxProducts);

    categories.push({
      categoryId,
      categoryName,
      products: categoryProducts,
      isSelected:false
    });
  });

  return categories;
};

const Body: React.FC<any> = () => {

       
// Example usage
const minProductsPerCategory = 3;
const maxProductsPerCategory = 9;
const [ categories,setCategories]=useState<Category[]>(()=>{
  return generateCategories(fake, minProductsPerCategory, maxProductsPerCategory)
}); 
const [selectedCategoryId,setSelectedCategory]=useState(0);
 
  return (
    <div  > 

     <div className='relative containerBorderBottom sticky top-16 z-20 bg-white '> 
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
