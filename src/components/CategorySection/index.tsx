import React from 'react';
import Product from '../Product';

interface CategorySectionProps {
  categoryId: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ categoryId }) => {
  return (
    <div className="flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white p-4 shadow z-10">
        <h2 className="text-2xl font-bold">{categoryId}</h2>
      </div>

      {/* Container */}
      <div className="flex">
        <Product productId={''} productName={''} productImage={''} productPrice={0} productActualPrice={0} discountPercent={0}/>
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">
          View All
        </button>
      </div>
    </div>
  );
};

export default CategorySection;
