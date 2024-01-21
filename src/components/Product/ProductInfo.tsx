// ProductInfo.tsx

import React from 'react';
import AddButton from '../AddButton';
import ButtonCounter from '../ButtonCounter';

interface ProductInfoProps {
  productName: string;
  productQty: string;
  productDiscountPrice: string;
  productActualPrice: string;
  productDiscount: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  productName,
  productQty,
  productDiscountPrice,
  productActualPrice,
  productDiscount,
}) => {
  return (
    <div className="productDetailedInfo">
       
      <div style={{gap:'30px',borderColor:'red',borderWidth:0,display:'flex',flex:1,marginTop:'40px'}}>
      <ButtonCounter/>
       
      <AddButton  onClick={function (): void {
                  throw new Error('Function not implemented.');
              } } title={'Add to Cart'}/>
      
      </div>
    </div>
  );
};

export default ProductInfo;
