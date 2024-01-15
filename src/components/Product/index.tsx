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

const productCardContainerStyle:any = {
  maxWidth: 'calc(33.3333% - 24px)',
  border: '1px solid rgb(212 203 203)',
  borderRadius: '8px',
  flex: '1 0 calc(33.3333% - 24px)',
  margin: '12px',
  position: 'relative',
  display:'flex',
  padding:'16px'
  
};
const productImageStyle:any={
  width: "100px",
  height: "100px",
  borderRadius: "4px",
  border:"1px solid #cdcdcd"
}

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
  const {productActualPrice,productId,productImage,productName,productPrice,discountPercent}=fakeProduct;


  return (
    <div  style={productCardContainerStyle}>
      <a  href={`/products/${productId}`} className="flex flex-col justify-between flex-1">
           <div className="mb-4">
            <div className="text-lg font-semibold line-clamp-2">{productName}</div>
            <div className="text-sm text-gray-600">Per piece</div>
          </div>
          <div className='flex flex-row items-center'>
            <div className="text-2xl font-bold text-primary">${productPrice}</div>
            <div className="text-sm text-gray-500 flex row">
              <span className="line-through">${productActualPrice}</span>
              <span className="bg-secondary text-white px-2 py-1 ml-2">{discountPercent}% OFF</span>
            </div>
          
        </div>
      </a>
      <div className="flex flex-col justify-between">
        <div className="mb-4">
          <a href={`/products/${productId}`}>
            <img src={productImage} className="bordered object-contain" style={productImageStyle} alt="productImg" loading="lazy" />
          </a>
        </div>
        <div style={{display:'flex'}}>
        <CounterButton/>
        </div>
      </div>
    </div>
  );
};

export default Product;
