// components/Layout.tsx
import React from 'react';
import Sidebar from '@/components/products/sidebar.component';
import NavigationLayout from '@/components/main/app-component/admin-component/navigation/nav-component';

interface LayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Sidebar/>
      <NavigationLayout/>

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

export default AdminLayout;
