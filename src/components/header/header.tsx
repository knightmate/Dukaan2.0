// Header.tsx
import React from 'react';
import SearchBar from '../SearchBar';

const Header: React.FC = () => {
  const hideMobileStyle:any= {
    '@media (max-width: 767px)': {
      display: 'none',
    },
  };

  return (
    
    <div className='hide-mobile'>
    <div className="flex justify-between">
      <header>
        <SearchBar />
      </header>
     
    </div>
  </div>
  );
};

export default Header;
