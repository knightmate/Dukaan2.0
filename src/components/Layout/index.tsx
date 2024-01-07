
"use client" 

import { usePathname} from 'next/navigation'

import React, { ReactNode } from 'react';
import SearchBar from '../SearchBar';
import styles from './styles.module.css';
 

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

  return (
    <div className={styles["layoutContainer"]}>
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h1>{title}</h1>
  </header>

     <SearchBar/>
      

  
    </div>
  );
};

export default Layout;
