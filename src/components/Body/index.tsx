"use client"
import React, { useState } from 'react';
import CategoriesNavBar from '../CategoriesNavbar/CategoriesNavBar';
import CategorySection from '../CategorySection';
import getData from '../../../data';
import CategoryPopup from '../Categories';
import Button from '../AddButton';


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
  isSelected: boolean;
  products: Product[];
}


const Body: React.FC<any> = () => {


  const [categories, setCategories] = useState<Category[]>(() => {
    return getData()
  });
  const [selectedCategoryId, setSelectedCategory] = useState(0);
  const [categoryModal,setCategoryModal]=useState(false);

  const handleSelectedCategory=(selectedId:string)=>{

    setCategoryModal(false);
    const updatedData = categories.map((data) => {
      if (data.categoryId == selectedId) {
        data.isSelected = true
      } else {
        data.isSelected = false
      }
      return data
    });
  setTimeout(()=>{

    const selectedCategoryId = updatedData.findIndex(({ isSelected }) => isSelected);
    setSelectedCategory(selectedCategoryId);
    setCategories(updatedData)

  },100)

  }
  return (
    <div>
      <div className='relative   sticky top-16 z-20 bg-white '>
        <CategoriesNavBar categories={categories} onClick={(selectedId) => {
          
          handleSelectedCategory(selectedId)

        }} />
        <CategorySection selectedCategory={selectedCategoryId} categories={categories} />
      </div>

      <CategoryPopup onCategorySelected={(id)=>{
 
            handleSelectedCategory(id)

       
      }}  isOpen={categoryModal} onClose={function (): void {
        setCategoryModal(false)
      }} categories={categories} />

      <div className='hide-desktop'>
        <div style={{  zIndex: 1200, position: 'fixed', bottom: "80px", display: 'flex', flex: 1, width: '100%', justifyContent: 'center' }}>
          <button onClick={()=>{
            setCategoryModal(true)
          }} >
            <div style={{ width: '48px', height: '48px', borderRadius: '24px', padding: '12px', backgroundColor: '#4d4d4d' }} >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Categories" color="white" text="">
                <path d="M20.4971 13C21.3255 13 21.9971 13.6716 21.9971 14.5V20.5C21.9971 21.3284 21.3255 22 20.4971 22H14.4971C13.6686 22 12.9971 21.3284 12.9971 20.5V14.5C12.9971 13.6716 13.6686 13 14.4971 13H20.4971ZM9.5 13C10.3284 13 11 13.6716 11 14.5V20.5C11 21.3284 10.3284 22 9.5 22H3.5C2.67157 22 2 21.3284 2 20.5V14.5C2 13.6716 2.67157 13 3.5 13H9.5ZM20.297 14.7H14.697V20.3H20.297V14.7ZM9.3 14.7H3.7V20.3H9.3V14.7ZM9.5 2C10.3284 2 11 2.67157 11 3.5V9.5C11 10.3284 10.3284 11 9.5 11H3.5C2.67157 11 2 10.3284 2 9.5V3.5C2 2.67157 2.67157 2 3.5 2H9.5ZM20.4971 2C21.3255 2 21.9971 2.67157 21.9971 3.5V9.5C21.9971 10.3284 21.3255 11 20.4971 11H14.4971C13.6686 11 12.9971 10.3284 12.9971 9.5V3.5C12.9971 2.67157 13.6686 2 14.4971 2H20.4971ZM9.3 3.7H3.7V9.3H9.3V3.7ZM20.297 3.7H14.697V9.3H20.297V3.7Z" fill="currentColor">
                </path>
              </svg>
              <p >

              </p>
            </div>
          </button>
        </div>
      </div>
    </div>

  );
};

export default Body;
