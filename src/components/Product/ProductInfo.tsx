// ProductInfo.tsx

import React from 'react';
import AddButton from '../AddButton';
import ButtonCounter from '../ButtonCounter';
import Styles from './styles.module.css';
import Product from '.';

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
    <div className={`${Styles['productDetailedInfo']}`}>
          
      <div className={`${Styles['productInfo']}`}>
   
      <ButtonCounter/>
      <AddButton  onClick={function (): void {
                  throw new Error('Function not implemented.');
              } } title={'Add to Cart'}/>
      
      </div>
    </div>
  );
};

export default ProductInfo;
