import React, { useState } from 'react';
import SidebarLayout from '@/components/main/app-component/admin-component/sidebar/sidebar-component';

const ProductsTableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const mockData = [
    { id: 1, product: 'DJI Mavic Pro 2', category: 'Tech gadget', customer: 'Apple', price: '$990.00', stock: 20, rating: 4.8, orderStatus: 'Delivered', payment: 'Done' },
    { id: 2, product: 'iPad Pro 2017 Model', category: 'Tech gadget', customer: 'LG',price: '$220.00', stock: 20, rating: 4.8, orderStatus: 'On-route', payment: 'On Delivery' },
    { id: 3, product: 'Lego Star War edition', category: 'Tech gadget',customer: 'Karborn', price: '$140.00', stock: 20, rating: 4.8, orderStatus: 'pending', payment: 'Not Paid' },
    { id: 4, product: 'Dell Curved Monitor', category: 'Tech gadget',customer: 'Lenovo', price: '$220.00', stock: 20, rating: 4.8, orderStatus: 'delivered', payment: 'Done' },
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
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  {['ID', 'PRODUCT', 'CATEGORY','CUSTOMER','PRICE', 'STOCK', 'RATING', 'ORDER STATUS', 'PAYMENT'].map((header) => (
                    <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockData.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td> 
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.rating}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.orderStatus}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.payment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </div>
        
  );
};

export default ProductsTableComponent;