import React from 'react';

const ProductSectionHeader: React.FC<{ category: string; badgeCount: number }> = ({
  category,
  badgeCount,
}) => {
  return (
    <div
      className='SProductSectionHeader'
    >
      <div style={{display:"flex"}}>
        <h2 style={{textTransform:'capitalize',fontWeight:'bold' ,fontSize:"1.3rem"}}>{category}</h2>
        <p
          style={{
            margin: '0px 0.5rem',
            display: 'inline-block',
            padding: '0.25rem 0.5rem',
            borderRadius: '4px',
            backgroundColor: 'rgb(20, 110, 180)',
            color: 'rgb(255, 255, 255)',
            fontWeight:'500',
            fontSize:'1rem',
          }}
        >
          {badgeCount}
        </p>
      </div>
      <a style={{color:'rgb(20, 110, 180)' ,fontSize:"16px" , fontWeight:'500'}} href={`/details/${badgeCount}`}>See All</a>
    </div>
  );
};

export default ProductSectionHeader;
