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
    name: 'Clothing',
    categories: {
      'CLOTHING': ['Swimwear(Men & Women)', 'Coats', 'Shirts', 'Dresses', 'Trousers'],
    },
  },
  {
    name: 'Jewelry',
    categories: {
      'JEWELRY': ['Earrings', 'Rings', 'Necklaces', 'Bracelets', 'Jewelry sets', 'Watches', 'Brooches', 'Badges $ Pins', 'Tie Clips', 'Cufflinks'],
    },
  },
  {
    name: 'Beauty & Hair',
    categories: {
      'Wigs': [''],
      'Skin Care': [''],
      'Bath & Body':['']
    },
  },
  {
    name: 'Fabrics',
    categories: {
      'Silk': [''],
    },
  },
  {
    name: 'Home',
    categories: {
      'Funiture': ['Chairs', 'Dinning'],
      'Kitchen Ware': ['Plates', 'Pans'],
    },
  },
  {
    name: 'Art',
    categories: {
      'ART': [''],
    },
  },
];

const MegaMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-2 bg-mint text-raspberry p-2 rounded-md"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Compact Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen max-h-[700px] w-96 bg-mint text-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-2 border-b border-mint-600">
          <span className="text-sm font-semibold">Categories</span>
          <button
            onClick={toggleMenu}
            className="text-black hover:text-raspberry"
          >
            <X size={18} />
          </button>
        </div>

        {/* Menu Content */}
        <div className="relative h-full overflow-y-auto">
          {/* Primary Menu */}
          <div className="w-full">
            <ul className="py-2">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  <Link href="/products/homestuff">
                    <span className="block px-4 py-2 text-sm hover:bg-raspberry hover:text-white cursor-pointer">
                      {item.name}
                    </span>
                  </Link>

                  {/* Submenu */}
                  {activeItem === item.name && (
                    <div className=" fixed absolute left-52 top-0 w-72 bg-white shadow-lg rounded-r-lg z-50">
                      <div className="p-4">
                        {Object.entries(item.categories).map(([category, items]) => (
                          <div key={category} className="mb-4">
                            <h3 className="text-raspberry font-semibold text-xs mb-2">
                              {category}
                            </h3>
                            <ul className="space-y-1">
                              {items.map((subItem) => (
                                <li key={subItem}>
                                  <Link href="/products/homestuff">
                                    <span className="block text-gray-600 hover:text-raspberry text-xs py-1 cursor-pointer">
                                      {subItem}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;