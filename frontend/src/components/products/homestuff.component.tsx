import React from 'react';
import ProductGrid from '@/components/products/product-grid.component';

const products = [
  {
    id: '1',
    name: '6pcs set Shower Caddy',
    price: 5850,
    image: 'https://link-to-image.com/shower-caddy.jpg',
    discount: 2700,
    isExpress: true,
  },
  {
    id: '2',
    name: 'Pointed Flat Bottom Pumps',
    price: 2736,
    image: 'https://link-to-image.com/pumps.jpg',
    isExpress: false,
  },
  {
    id: '3',
    name: '500ml Aroma Diffuser',
    price: 1800,
    image: 'https://link-to-image.com/aroma-diffuser.jpg',
    discount: 600,
    isExpress: true,
  },
  {
    id: '3',
    name: '500ml Aroma Diffuser',
    price: 1800,
    image: 'https://link-to-image.com/aroma-diffuser.jpg',
    discount: 600,
    isExpress: true,
  },
  {
    id: '3',
    name: '500ml Aroma Diffuser',
    price: 1800,
    image: 'https://link-to-image.com/aroma-diffuser.jpg',
    discount: 600,
    isExpress: true,
  },
  {
    id: '3',
    name: '500ml Aroma Diffuser',
    price: 1800,
    image: 'https://link-to-image.com/aroma-diffuser.jpg',
    discount: 600,
    isExpress: true,
  },
  {
    id: '3',
    name: '500ml Aroma Diffuser',
    price: 1800,
    image: 'https://link-to-image.com/aroma-diffuser.jpg',
    discount: 600,
    isExpress: true,
  },
  {
    id: '3',
    name: '500ml Aroma Diffuser',
    price: 1800,
    image: 'https://link-to-image.com/aroma-diffuser.jpg',
    discount: 600,
    isExpress: true,
  },
  // Add more products as needed
];

const HomeStuff: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Home & Kitchen Products</h1>
          <p className="text-sm text-gray-600">({products.length} products found)</p>
        </div>
        <div>
          <label htmlFor="sort" className="mr-2">Sort by:</label>
          <select id="sort" className="border border-gray-300 p-2 rounded">
            <option value="popularity">Popularity</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="flex space-x-2 mb-6">
        <button className="bg-orange-500 text-white px-4 py-2 rounded flex items-center">
          <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3-3 3 3M8 15l3 3 3-3" />
          </svg>
          EXPRESS
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded">Shipped from Kenya</button>
        <button className="border border-gray-300 px-4 py-2 rounded">Brand</button>
        <button className="border border-gray-300 px-4 py-2 rounded">Price</button>
      </div>
      
      <ProductGrid products={products} />
    </div>
  );
};

export default HomeStuff;
