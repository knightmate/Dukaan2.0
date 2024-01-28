import React from 'react';
import ButtonAdd from '../AddButton';
import CounterButton from '../ButtonCounter';

interface ProductProps {
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  productActualPrice: number;
  discountPercent: number;
  categoryId:string
}

const productCardContainerStyle: any = {
  maxWidth: 'calc(33.3333% - 24px)',
  border: '1px solid rgb(212 203 203)',
  borderRadius: '8px',
  flex: '1 0 calc(33.3333% - 24px)',
  margin: '12px',
  position: 'relative',
  display: 'flex',
  padding: '16px'

};
const productImageStyle: any = {
  width: "100px",
  height: "100px",
  borderRadius: "4px",
  border: "1px solid #cdcdcd"
}
const productText = {
  color: " #1a181e",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
}
 
const productQtyStyle:any = {
  color: 'gray',
  textTransform: 'lowercase',
  marginTop: '8px',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '18px',
};
const productPriceText :any= {
  marginRight: '6px',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '26px',
  color:"black",
   
};
  
export const ProductItem = ({productId, productName, categoryId,productPrice, productActualPrice, discountPercent }:any) => {
   
    return (
<div> 
<div className="mb-4">
          <div style={productText} className="text-sm font-semibold line-clamp-2">
            {productName}
          </div>
          <div style={{ ...productQtyStyle }} className="text-sm text-gray-600">
            Per piece
          </div>
        </div>
        <div className="flex flex-row items-center flex-wrap">
          <div style={productPriceText} className="">
            ₹{productPrice}
            <span style={{ marginRight: '12px' }} className="line-through">
              ₹{productActualPrice}
            </span>
          </div>
          <div className="text-sm text-gray-500 flex row items-center">
            <span
              style={{ backgroundColor: '#ee741f', borderRadius: '4px', padding: '2px 8px' }}
              className="text-sm text-white"
            >
              {discountPercent}% OFF
            </span>
          </div>
        </div>
      </div>
    );
  };


 export default ProductItem
 
 

 