import React, { useEffect, useRef, useState } from 'react';
import Product from '../Product';

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
            <div ref={(ref) => (categoryRefs.current[category.categoryId] = ref)}>
              <div style={{zIndex:80,height:'100px',paddingTop:"20px", paddingBottom:'20px' ,top:'120px',backgroundColor:'white'}} className="sticky   bg-white ">
                <h2 className="text-2xl font-bold">{category.categoryName}</h2>
              </div>
              <div className=" productContainer">

                {
                  category.products.map((product) => {
                    return (<Product productId={''} productName={''} productImage={''} productPrice={0} productActualPrice={0} discountPercent={0} />
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





