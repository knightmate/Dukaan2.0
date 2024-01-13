
"use client"

import { usePathname } from 'next/navigation'

import React, { ReactNode } from 'react';
import SearchBar from '../SearchBar';
import styles from './styles.module.css';
import Header from '../header/header';
import Navbar from '../NavBar';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const pathname = usePathname();


  // Define the title based on the route using a switch statement
  let title = 'Gavran Misal';

  switch (pathname) {
    case '/':
      title = 'Gavran Misal';
      break;
    case '/about':
      title = 'About | Next.js App';
      break;
    case '/contact':
      title = 'Contact | Next.js App';
      break;
    default:
      break;
  }

  // Define conditions to display text based on the route
  const showText = pathname !== '/contact';

  return(

  <div className={styles["layoutContainer"]}>
  <div className="flex justify-between flex-1 items-center">
  <div className="w-full max-w-300px" style={{ maxWidth: '300px',flexDirection:"row",display:'flex' }}>
  <img
    alt="store-logo"
    className="logoStoreImg h-52 w-auto max-w-160"
    src="https://dukaan.b-cdn.net/420x280/webp/177/288e825b-f164-4a46-bc90-8f1ecb120ed0/icon-621803a8-8cd5-4b5e-b7e0-4eb031fdbb80.jpg"
    style={{ maxWidth: "160px" , height:'52px' ,width:"auto"}}
  />
  <header style={{minWidth:'50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h1>{title}</h1>
  </header>
</div>

    <div className={styles["hide-mobile"]}>
    <div  style={{width:"420px"}}>
       <SearchBar/>
    </div>
    </div>

        <Navbar/>
    
  </div>

  
</div>
  )

};

export default Layout;
