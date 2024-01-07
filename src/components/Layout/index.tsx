import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

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
    <div>
      <header>
        <h1>{title}</h1>
      </header>

      {showText && <p>This text will be displayed on routes other than Contact.</p>}

      <main>{children}</main>

      <footer>
        <p>Footer content here.</p>
      </footer>
    </div>
  );
};

export default Layout;
