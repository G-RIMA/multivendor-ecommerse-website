// components/Layout.tsx
import React from 'react';
import HeadComponent from './Header';
import Header from './main/navigation/header.component';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='font-ubuntu' >
      {/* Header */}
      <HeadComponent/>
      <Header/>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 E-commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
