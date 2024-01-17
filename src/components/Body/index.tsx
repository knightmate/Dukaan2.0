"use client"
import React, { useState } from 'react';
import CategoriesNavBar from '../CategoriesNavbar/CategoriesNavBar';
import CategorySection from '../CategorySection';


const fake=[
    { id: 'DeliciousFruitsForYou',qnty:Math.floor(Math.random() * 100) + 1, isSelected: true },
    { id: 'VariousVegetables',qnty:Math.floor(Math.random() * 100) + 1,isSelected: false },
    { id: 'DairyDelights',qnty:Math.floor(Math.random() * 100) + 1, isSelected: false },
    { id: 'BakeryTreats', qnty:Math.floor(Math.random() * 100) + 1,isSelected: false },
    { id: 'CondimentsCollection',qnty:Math.floor(Math.random() * 100) + 1, isSelected: false },
    { id: 'FreshSeafoodOptions', qnty:Math.floor(Math.random() * 100) + 1,isSelected: false },
    // Add more categories with names between 20 and 40 characters
  ];
const Body: React.FC<any> = () => {

    const [fakeCategories,setFakeCategories] =useState(fake)
      

  return (
    <div  > 

     <div className='relative containerBorderBottom sticky top-16 z-20 bg-white '> 
    <CategoriesNavBar categories={fakeCategories} onClick={(selectedId)=>{

        const updatedData=fake.map((data)=>{
              if(data.id==selectedId){
                data.isSelected=true
              }else{
                data.isSelected=false
              }
              
            return data
       })
       setFakeCategories(updatedData)

   }}/>
   <CategorySection categoryId={''}/>
   </div>
     

      

  </div>

  );
};

export default Body;
