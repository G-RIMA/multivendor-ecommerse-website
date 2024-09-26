import React, { useState } from 'react';
import SidebarLayout from '@/components/main/app-component/admin-component/sidebar/sidebar-component';

const FeedBackTableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const mockData = [
    {
      key: 1,
      user: 'John Doe',
      description: 28,
      file: '',
      rating: '1234 Elm St, Springfield',
      date: ''
    }
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
        <div className="mx-auto bg-white p-6 m-10 mx-10 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Best Selling Product</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  {['ID', 'USERS', 'DESCRIPTION', 'FILE', 'RATING', 'DATE'].map((header) => (
                    <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockData.map((review) => (
                  <tr key={review.key}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{review.key}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{review.user}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{review.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{review.file}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{review.rating}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{review.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </div>
        
  );
};

export default FeedBackTableComponent;
