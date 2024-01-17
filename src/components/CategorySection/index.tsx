import React, { useEffect, useRef, useState } from 'react';
import Product from '../Product';

interface CategorySectionProps {
  categoryId: string;
}

const fakeProduct = {
  productId: 'akha-masur',
  productName: 'Akha Masur',
  productImage: 'https://dukaan.b-cdn.net/280x280/webp/upload_file_service/f68c8f38-d83f-4770-a09e-ceeb3547b599/1686808798094.jpeg',
  productPrice: 75,
  productActualPrice: 80,
  discountPercent: 6,
};

const generateRandomNumber = (min:any, max:any) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProductsForCategory = (categoryId:any, minProducts:any, maxProducts:any) => {
  const numProducts = generateRandomNumber(minProducts, maxProducts);
  const products = [];
  for (let i = 1; i <= numProducts; i++) {
    products.push({
      ...fakeProduct,
      productId: `${fakeProduct.productId}-${categoryId}-${i}`,
    });
  }
  return products;
};

const generateCategories = (numCategories:any, minProductsPerCategory:any, maxProductsPerCategory:any) => {
  const categories = [];
  for (let i = 1; i <= numCategories; i++) {
    const categoryId = `category${i}`;
    const categoryProducts = generateProductsForCategory(categoryId, minProductsPerCategory, maxProductsPerCategory);
    categories.push({
      categoryId,
      categoryName: `Category ${i}`,
      products: categoryProducts,
    });
  }
  return categories;
};
interface Category {
  categoryId: string;
  categoryName: string;
  products: any[];
}

const calculateScrollPosition = (
  categories: Category[],
  maxProductsPerCategory: number,
  categoryHeight: number,
  productHeight: number
): number => {
  const totalProducts = categories.reduce((total, category) => total + category.products.length, 0);
  const numRows = Math.ceil(totalProducts / maxProductsPerCategory);
  const remainder = totalProducts % maxProductsPerCategory;

  const scrollPosition = numRows * categoryHeight + (remainder > 0 ? remainder * productHeight : 0);

  return scrollPosition;
};


const CategorySection: React.FC<CategorySectionProps> = ({ categoryId }) => {

  const categories = generateCategories(10, 5, 20);
  const categoryRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});
  const categoryContainerRef=useRef();

  const [categoryHeights, setCategoryHeights] = useState([]);
   
  console.log("categoryHeights",categoryHeights)
  
  useEffect(()=>{
    const updateHeights = () => {
      const newHeights:[] = [];
      Object.keys(categoryRefs.current).forEach((categoryId) => {
        const categoryRef = categoryRefs.current[categoryId];
         
        if (categoryRef) {
          newHeights.push(categoryRef.getBoundingClientRect().height);
        }
      });
          
      setCategoryHeights(newHeights);

    }
     
    updateHeights()
     

  },[])
  const calculateScrollPos = (categoryHeights: number[], targetIndex: number): number => {
    if (targetIndex < 0 || targetIndex >= categoryHeights.length) {
      return 0; // Invalid index
    }
  
    return categoryHeights.slice(0, targetIndex + 1).reduce((acc, height) => acc + height, 0);
  };
  
  return (
    <div ref={categoryContainerRef} className="flex flex-col container">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white p-4  z-10">
        <h2 className="text-2xl font-bold">{categoryId}</h2>
      </div>

      {
        categories.map((category,index)=>{
          return(
            <div onClick={()=>{

              const pos=calculateScrollPos(categoryHeights,0);
              
              window.scrollTo({ top: pos, behavior: "smooth" })

              
            }} ref={(ref) => (categoryRefs.current[category.categoryId] = ref)}>
               <span>{category.categoryName}</span>
               <div className="flex flex-wrap">

               {
                category.products.map((product)=>{
                  return(<Product productId={''} productName={''} productImage={''} productPrice={0} productActualPrice={0} discountPercent={0}/>
                  )
                })
              }
                </div>
              <div style={{height:'10px'}}></div>
        </div>
          )
        })
      }
       
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">
          View All
        </button>
      </div>
    </div>
  );
};

export default CategorySection;




 
