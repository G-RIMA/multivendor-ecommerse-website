// components/SidebarLayout.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BarChart2, CircleOff, CircleMinus, ShoppingCart, Users, Store, Star, UserRoundCheck, MessageCircleQuestion, HelpCircle, Settings } from 'lucide-react';

const SidebarLayout: React.FC = ({}) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <Image src='/logo.png' alt='logo' width={200} height={100} />
        </div>
        <nav className="mt-6">
          {[
            { name: 'Dashboard', href: '/vendor/dashboard', icon: <BarChart2 size={20} /> },
            { name: 'Products', href: '/vendor/products', icon: <Store size={20} /> },
            { name: 'Customers', href: '/vendor/customers', icon: <Users size={20} /> },
            { name: 'Orders', href: '/vendor/products', icon: <ShoppingCart size={20} /> },
            { name: 'Reviews', href: '/vendor/reviews', icon: <UserRoundCheck size={20} /> },
            { name: 'Help', href: '/vendor/help', icon: <HelpCircle size={20} /> },
            { name: 'Settings', href: '/vendor/settings', icon: <Settings size={20} /> },
          ].map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
                {item.icon}
                <span className="mx-4">{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SidebarLayout;
