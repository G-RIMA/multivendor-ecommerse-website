import React, { useState } from 'react';
import SidebarLayout from '@/components/main/app-component/admin-component/sidebar/sidebar-component';

const BannedTableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const mockData = [
    {
      key: 1,
      name: 'John Doe',
      reason: 'Used fake images',
      duration: '60 days',
      address: '1234 Elm St, Springfield',
    },
    {
      key: 2,
      name: 'Jane Smith',
      reason: 'Does not deliver products',
      duration: '30 days',
      address: '5678 Oak St, Springfield',
    },
    {
      key: 3,
      name: 'Bob Johnson',
      reason: 'Lied about location',
      duration: '30 days',
      address: '910 Maple St, Springfield',
    },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <SidebarLayout />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        {/* Top navigation */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <h2 className="text-2xl font-semibold text-gray-800">Good morning, John Doe</h2>
              <div className="flex items-center">
                <input type="text" placeholder="Search..." className="mr-4 px-4 py-2 border rounded-lg" />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Get in touch</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto bg-white p-6 my-20 mx-20 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Banned Vendors</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  {['ID', 'NAME', 'REASON FOR BEING BANNED', 'DURATION(BANNED FOR HOW LONG)', 'ACTION'].map((header) => (
                    <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockData.map((banned) => (
                  <tr key={banned.key}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{banned.key}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{banned.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{banned.reason}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{banned.duration}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        id="dropdownDefaultButton"
                        onClick={handleToggle}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        Dropdown button{" "}
                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <div
                          id="dropdown"
                          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 inset-0"
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDefaultButton"
                          >
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Edit
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Increase Duration
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </div>
        
  );
};

export default BannedTableComponent;
