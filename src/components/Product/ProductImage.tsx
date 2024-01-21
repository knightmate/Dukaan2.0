import React from 'react';
import Styles from './styles.module.css'

const ProductImage = () => {
  const openPinchZoomModal = (index) => {
    // Your implementation for opening Pinch Zoom Modal
  };

  const handleShareButtonClick = () => {
    // Your implementation for handling Share button click
  };

  const renderShareButton=()=>{
    return(
        <div
        className="dkn-share-button-wrapper flex d-row a-c j-c d-flex flex-row justify-content-center align-items-center cursor-pointer"
        onClick={(event) => {
          event.stopPropagation();
          handleShareButtonClick();
        }}
        style={{top:'10px',right:"10px",alignItems:'center',alignContent:'center',display:'flex',justifyContent:'center',borderRadius:'50%',boxShadow:"0 2px 4px rgba(26,24,30,.24)",position:'absolute',zIndex:"100px",minWidth:"40px",height:'40px',border:"1px solid #e6e6e6"}}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" color="#808080" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.86042 24.0974C2.76821 24.0979 2.67655 24.0831 2.58917 24.0536C2.40643 23.9943 2.2483 23.8765 2.13918 23.7183C2.03006 23.5602 1.97603 23.3705 1.98542 23.1786C1.98542 23.0474 2.88667 10.3424 15.6267 9.34488V4.77738C15.6265 4.60342 15.6782 4.43336 15.7752 4.28892C15.8721 4.14449 16.0099 4.03223 16.171 3.96649C16.3321 3.90076 16.5091 3.88452 16.6794 3.91985C16.8497 3.95519 17.0057 4.0405 17.1273 4.16488L25.7635 12.9849C25.9239 13.1484 26.0137 13.3683 26.0137 13.5974C26.0137 13.8264 25.9239 14.0463 25.7635 14.2099L17.1273 23.0299C17.0057 23.1543 16.8497 23.2396 16.6794 23.2749C16.5091 23.3102 16.3321 23.294 16.171 23.2283C16.0099 23.1625 15.8721 23.0503 15.7752 22.9058C15.6782 22.7614 15.6265 22.5913 15.6267 22.4174V17.9374C7.12167 18.2611 3.6348 23.6249 3.5998 23.6905C3.52086 23.8152 3.41167 23.9178 3.2824 23.989C3.15313 24.0601 3.00797 24.0974 2.86042 24.0974ZM17.3767 6.92113V10.163C17.3768 10.3899 17.2888 10.6079 17.1313 10.7711C16.9738 10.9344 16.759 11.0301 16.5323 11.038C8.2898 11.3399 5.34105 16.8305 4.2823 20.3611C6.4698 18.4711 10.3679 16.1611 16.4492 16.1611H16.4885C16.7206 16.1611 16.9432 16.2533 17.1073 16.4174C17.2714 16.5815 17.3635 16.8041 17.3635 17.0361V20.278L23.926 13.6018L17.3767 6.92113Z" fill="currentColor"></path>
        </svg>
      </div>
    )
  }

  return (
    <div
    className={Styles.productContainer}
      data-video-image-link="https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/f68c8f38-d83f-4770-a09e-ceeb3547b599/1686808798094.jpeg"
       onClick={() => openPinchZoomModal(0)}
    >
    {renderShareButton()}
 
       <div style={{height:'450px',display:'flex',borderColor:'red',borderWidth:0}}>
       <img
        style={{objectFit:'contain',justifyContent:'center',alignItems:"center"}}
          src="https://dukaan.b-cdn.net/700x700/webp/upload_file_service/f68c8f38-d83f-4770-a09e-ceeb3547b599/1686808798094.jpeg"
          alt="Akha Masur"
           
        />
       </div>
    
    </div>
  );
};

export default ProductImage;
