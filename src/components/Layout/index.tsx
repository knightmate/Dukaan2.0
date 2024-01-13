
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
  let title = 'Next.js App';

  switch (pathname) {
    case '/':
      title = 'Home | Next.js App';
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
    <div className="w-full max-w-300px" style={{maxWidth:'300px'}}>
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h1>{title}</h1>
  </header>
    </div>

    <div className={styles["hide-mobile"]}>
    <div className="max-w-300px w-full">
       <SearchBar/>
    </div>
    </div>

    <div className="">
       <Navbar/>
    </div>
  </div>

  
</div>
  )

};

export default Layout;
