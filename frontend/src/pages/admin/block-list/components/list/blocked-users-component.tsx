import React, { useState } from 'react';
import SidebarLayout from '@/components/main/app-component/admin-component/sidebar/sidebar-component';

const BlockedUsersComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const mockData = [
    {
      key: 1,
      name: 'John Doe',
      vendor: 'Africaans',
      product: 'Shoes',
      reason: 'Lied to customers'
    },
    {
      key: 2,
      name: 'Jane Smith',
      vendor: 'Pink Shop',
      product: 'Hats',
      reason: 'Couldnt provide product image'
    },
    {
      key: 3,
      name: 'Bob Johnson',
      vendor: 'Baby',
      product: 'Bags',
      reason: 'Couldnt provide the right materials'
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
            <h3 className="text-lg font-semibold mb-4">Blocked Vendors</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  {['ID', 'NAME', 'VENDOR', 'PRODUCT', 'REASON', 'ACTION'].map((header) => (
                    <th key={header} className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockData.map((blocked) => (
                  <tr key={blocked.key}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blocked.key}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{blocked.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blocked.vendor}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blocked.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blocked.reason}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button">Unblock</button>
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

export default BlockedUsersComponent;
