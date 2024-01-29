import React, { useEffect, useRef, useState } from 'react';
import Product from '../Product';
import ProductSectionHeader from './ProductSectionHeader';

interface CategorySectionProps {
  categories: Category[],
  selectedCategory: number
}




interface Category {
  categoryId: string;
  categoryName: string;
  products: any[];
}



const CategorySection: React.FC<CategorySectionProps> = ({ categories, selectedCategory = 0 }) => {

  const categoryRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});
  const categoryContainerRef = useRef();

  const [categoryHeights, setCategoryHeights] = useState([]);

  console.log("categoryHeights", categoryHeights)

  useEffect(() => {
    const updateHeights = () => {
      const newHeights: [] = [];
      Object.keys(categoryRefs.current).forEach((categoryId) => {
        const categoryRef = categoryRefs.current[categoryId];

        if (categoryRef) {
          newHeights.push(categoryRef.getBoundingClientRect().height);
        }
      });

      setCategoryHeights(newHeights);

    }

    updateHeights()


  }, [])

  useEffect(() => {

    if (!selectedCategory) return;
    scrollToSelectedCategory(selectedCategory)

  }, [selectedCategory]);
  const calculateScrollPos = (categoryHeights: number[], targetIndex: number): number => {
    if (targetIndex < 0 || targetIndex >= categoryHeights.length) {
      return 0; // Invalid index
    }

    return categoryHeights.slice(0, targetIndex + 1).reduce((acc, height) => acc + height, 0);
  };
  const scrollToSelectedCategory = (idx: number) => {
    const pos = calculateScrollPos(categoryHeights, idx);

    window.scrollTo({ top: pos, behavior: "smooth" })
  }

  return (
    <div ref={categoryContainerRef} className="flex flex-col container">

 
      {
        categories?.map((category, index) => {
          return (
            <div  id={`#${category.categoryId}`} ref={(ref) => (categoryRefs.current[category.categoryId] = ref)}>
               <ProductSectionHeader category={category.categoryName} badgeCount={category.products.length} />
              <div  className=" productContainer">

                {
                  category.products.map((product) => {
                    const {productId,productName,productImage,productPrice,productActualPrice,discountPercent}=product;
                    return (
                     <Product categoryId={category.categoryId} productId={productId} productName={productName} productImage={productImage} productPrice={productPrice} productActualPrice={productActualPrice} discountPercent={discountPercent} />
                    
                    )
                  })
                }
              </div>
              <div style={{ height: '10px' }}></div>
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





