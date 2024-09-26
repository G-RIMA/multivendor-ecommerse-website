import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, ShoppingCart, Store, DollarSign, BarChart2, Settings, HelpCircle, Star, CircleMinus, MessageCircleQuestion, CircleOff, UserRoundCheck } from 'lucide-react';
import Image from 'next/image';
import SidebarLayout from '../sidebar/sidebar-component';

const Dashboard = () => {
  const revenueData = [
    { name: 'Jan', earnings: 2400, invested: 1800, expenses: 2200 },
    { name: 'Feb', earnings: 1398, invested: 2100, expenses: 1900 },
    { name: 'Mar', earnings: 3000, invested: 2300, expenses: 2600 },
    { name: 'Apr', earnings: 2780, invested: 2000, expenses: 2100 },
    { name: 'May', earnings: 3908, invested: 2400, expenses: 2050 },
    { name: 'Jun', earnings: 3800, invested: 2300, expenses: 2300 },
  ];

  const bestSellingProducts = [
    { id: 1, product: 'DJI Mavic Pro 2', category: 'Tech gadget', brand: 'Apple', price: '$990.00', stock: 20, rating: 4.8, order: 540, sales: '$34k' },
    { id: 2, product: 'iPad Pro 2017 Model', category: 'Tech gadget', brand: 'LG', price: '$220.00', stock: 20, rating: 4.8, order: 540, sales: '$34k' },
    { id: 3, product: 'Lego Star War edition', category: 'Tech gadget', brand: 'Karbon', price: '$140.00', stock: 20, rating: 4.8, order: 540, sales: '$34k' },
    { id: 4, product: 'Dell Curved Monitor', category: 'Tech gadget', brand: 'Lenovo', price: '$220.00', stock: 20, rating: 4.8, order: 540, sales: '$34k' },
  ];

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

        {/* Dashboard content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Total Users', value: '11,580', icon: <Users className="text-emerald-500" />, change: '+5.9%' },
              { title: 'Total Orders', value: '45,580', icon: <ShoppingCart className="text-blue-500" />, change: '+10.5%' },
              { title: 'Total Vendors', value: '8,580', icon: <Store className="text-purple-500" />, change: '-3.4%' },
              { title: 'Total Earnings', value: '$51,580', icon: <DollarSign className="text-rose-500" />, change: '+5.5%' },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                  </div>
                  <div className="p-3 rounded-full bg-gray-100">{stat.icon}</div>
                </div>
                <p className={`mt-2 text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </p>
              </div>
            ))}
          </div>

          {/* Revenue Report */}
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h3 className="text-lg font-semibold mb-4">Revenue Report</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="earnings" stroke="#8884d8" />
                <Line type="monotone" dataKey="invested" stroke="#82ca9d" />
                <Line type="monotone" dataKey="expenses" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Best Selling Product */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Best Selling Product</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  {['ID', 'PRODUCT', 'CATEGORY', 'BRAND', 'PRICE', 'STOCK', 'RATING', 'ORDER', 'SALES', 'ACTION'].map((header) => (
                    <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bestSellingProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.brand}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.rating}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.order}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.sales}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;