// components/MegaMenu.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface MenuItem {
  name: string;
  categories: {
    [key: string]: string[];
  };
}

const menuItems: MenuItem[] = [
  {
    name: 'Phones & Tablets',
    categories: {
      'PHONES & ACCESSORIES': ['Samsung', 'Tecno', 'Infinix', 'FreeYond', 'Oraimo'],
      'ELECTRONICS': ['Vitron', 'Vision Plus', 'TCL', 'Hisense', 'Multichoice'],
      'APPLIANCES': ['Nunix', 'Roch', 'Ramtons', 'Hotpoint', 'Mika'],
    },
  },
  {
    name: 'TVs & Audio',
    categories: {
      'ELECTRONICS': ['Vitron', 'Vision Plus', 'TCL', 'Hisense', 'Multichoice'],
    },
  },
  // Add more menu items here
];

const MegaMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button 
        onClick={toggleMenu}
        className="flex items-center space-x-2 bg-mint text-raspberry px-4 py-2 rounded-md"
        >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-2/3 bg-mint text-raspberry p-4 transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button 
          onClick={toggleMenu}
          className="absolute top-4 w-64 right-4 text-raspberry"
        >
          <X size={24} />
        </button>


      {isOpen && (
        <div 
        className="bg-mint p-4 relative"
        onMouseLeave={() => setActiveItem(null)}
        >
        
        <div className="flex">
          <div className="w-64 pr-4">
            <ul>
              {menuItems.map((item) => (
                <Link href='/products/homestuff'>
                    <li
                    key={item.name}
                    className="py-2 px-3 cursor-pointer hover:bg-mint"
                    onMouseEnter={() => setActiveItem(item.name)}
                    >
                    {item.name}
                    </li>
                </Link>
                
              ))}
            </ul>
          </div>
          <div 
            className={`absolute left-52 right-4 top-4 bg-white p-4 transition-all duration-300 ease-in-out ${
              activeItem ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            {activeItem && (
              <div className="grid grid-cols-4 gap-4">
                {Object.entries(
                  menuItems.find((item) => item.name === activeItem)?.categories || {}
                ).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="font-bold mb-2">{category}</h3>
                    <ul>
                      {items.map((item) => (
                        <li key={item} className="py-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      )}
    </div>
    </div>
  );
};

export default MegaMenu;