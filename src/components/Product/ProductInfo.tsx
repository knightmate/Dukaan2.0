// ProductInfo.tsx

import React from 'react';
import AddButton from '../AddButton';
import ButtonCounter from '../ButtonCounter';
import Styles from './styles.module.css';
import ProductItem from './Productitem';
  
interface ProductInfoProps {
  productName: string;
  productQty: string;
  productDiscountPrice: string;
  productActualPrice: string;
  productDiscount: string;
  discountPercent:string
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  productName,
  productQty,
  productDiscountPrice,
  productActualPrice,
  productDiscount,
  discountPercent
}) => {
  return (
    <div className={`${Styles['productDetailedInfo']}`}>
           <ProductItem 
       productQty={productQty}
       productDiscountPrice={productDiscountPrice} 
       productName={productName}
       discountPercent={discountPercent}
       />
      
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
