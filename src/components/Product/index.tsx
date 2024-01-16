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
  

const Product: React.FC<ProductProps> = ({

}) => {

  const fakeProduct = {
    productId: 'akha-masur',
    productName: 'Akha Masur',
    productImage: 'https://dukaan.b-cdn.net/280x280/webp/upload_file_service/f68c8f38-d83f-4770-a09e-ceeb3547b599/1686808798094.jpeg',
    productPrice: 75,
    productActualPrice: 80,
    discountPercent: 6,
  };
  const { productActualPrice, productId, productImage, productName, productPrice, discountPercent } = fakeProduct;


  return (
    <div  className='productCardContainer'>
      <a href={`/products/${productId}`} className="flex flex-col justify-between flex-1">
        <div className="mb-4">
          <div style={productText} className="text-sm font-semibold line-clamp-2">{productName}</div>
          <div  style={{...productQtyStyle}}className="text-sm text-gray-600">Per piece</div>
        </div>
        <div className='flex flex-row items-center flex-wrap'>
          <div style={productPriceText} className=''>
            ₹{productPrice}
            <span  style={{marginRight:'12px'}} className="line-through">₹{productActualPrice}</span>
            </div>
          <div  className="text-sm text-gray-500 flex row items-center">
             <span style={{backgroundColor:'#ee741f' ,borderRadius:'4px' ,padding:'2px 8px' }}   className="text-sm text-white">{discountPercent}% OFF</span>
          </div>

        </div>
      </a>
      <div className="flex flex-col justify-between">
        <div className="mb-4">
          <a href={`/products/${productId}`}>
            <img src={productImage} className="bordered object-contain" style={productImageStyle} alt="productImg" loading="lazy" />
          </a>
        </div>
        <div style={{ display: 'flex' }}>
          <CounterButton />
        </div>
      </div>
    </div>
  );
};

export default Product;
