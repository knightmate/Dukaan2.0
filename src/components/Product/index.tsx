import React, { useState } from 'react';
import ButtonAdd from '../AddButton';
import CounterButton from '../ButtonCounter';
import ProductItem from './Productitem';
import ButtonCounter from '../ButtonCounter';

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
  

const Product: React.FC<ProductProps> = ({categoryId,productId,productActualPrice,productImage,productName,productPrice,discountPercent}) => {
  const [counter,setCounter]=useState(0);

     
   return (
    <div  className='productCardContainer'>
   <a href={`/products/${categoryId}?id=${productId} `} className='productItem' >
     <ProductItem productId={productId} categoryId={categoryId} productName={productName}  productPrice={productPrice} productActualPrice={productActualPrice} discountPercent={discountPercent}/>
     </a>

      <div className="flex flex-col justify-between">
        <div className="mb-4">
          <a href={`/products/${productId}`}>
            <img src={productImage} className="bordered object-contain" style={productImageStyle} alt="productImg" loading="lazy" />
          </a>
        </div>
        <div style={{ display: 'flex' }}>
        <CounterButton cartItemCount={counter} addtoCart={()=>{                  
        setCounter((counter)=>counter+1);
      }} removeFromCart={()=>{
        setCounter((counter)=>counter-1);
      }}/>        </div>
      </div>
    </div>
  );
};

export default Product;


  
 