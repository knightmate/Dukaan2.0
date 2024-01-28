// components/CounterButton.tsx

import React, { useState } from 'react';

interface CounterButtonProps {
  cartItemCount?: number;
  addtoCart:any;
  removeFromCart:any
}
const buttonsStyles: any = {
  minHeight: '28px',
  minWidth: '83px',
  width: '100%',
  background: '0 0',
  border: 'none',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  padding: '0',
  display: 'flex',
  position: 'relative',
};

const CounterButton: React.FC<CounterButtonProps> = ({ cartItemCount = 0,removeFromCart,addtoCart }) => {
 
 
  console.log("Addtoar",addtoCart,removeFromCart,)
  return (
    <div style={buttonsStyles}>

      <div
        onClick={()=>{
          //restrict to negatie value
          if(cartItemCount==0)return;
          removeFromCart()
        }}
        style={{
          border: '1px solid #146eb4',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
          borderRadius: "4px",
          maxHeight:'48px',
          maxWidth:'48px'   
        }}
      >
        <span style={{}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
            <rect x="1" y="5" width="10" height="2" fill="#146eb4" />
          </svg>
        </span>
      </div>
      <div
        style={{
          border: "none",
          display: 'flex',
          justifyContent:'center',
          alignItems:'center',
          flex:1.5
        }}
      >
        {cartItemCount}
      </div>
      <div
  onClick={addtoCart}
  style={{
    border: '1px solid #146eb4',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    borderRadius: '4px',
    backgroundColor: '#146eb4',
    maxWidth:'48px' 
  }}
>
  <span style={{}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" alt="+">
  <path fill="white" d="M6 0c.385 0 .702.29.745.663L6.75.75v10.5c0 .414-.336.75-.75.75-.385 0-.702-.29-.745-.663l-.005-.087V.75C5.25.336 5.586 0 6 0z" />
  <path fill="white" d="M11.25 5.25c.414 0 .75.336.75.75 0 .385-.29.702-.663.745l-.087.005H.75C.336 6.75 0 6.414 0 6c0-.385.29-.702.663-.745L.75 5.25h10.5z" />
</svg>

  </span>
</div>

    </div>
  );
};

export default CounterButton;
