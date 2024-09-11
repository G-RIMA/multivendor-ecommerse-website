import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface Product {
  id: string;
  name: string;
  image: string;
  discount: number;
  currentPrice: number;
  originalPrice: number;
  itemsLeft: number;
}

interface FlashSalesProps {
  timeLeft: string;
  products: Product[];
}

const FlashSales: React.FC<FlashSalesProps> = ({ timeLeft, products }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-red-600 text-white px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          <h2 className="text-xl font-bold">Flash Sales</h2>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Time Left: {timeLeft}</span>
          <Link href="/all-sales" className="text-sm underline">
            SEE ALL &gt;
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="relative">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={200} 
                height={200} 
                className="w-full h-auto"
              />
              <span className="absolute top-0 left-0 bg-raspberrys text-white px-2 py-1 text-xs">
                -{product.discount}%
              </span>
            </div>
            <h3 className="text-sm mt-2 line-clamp-2">{product.name}</h3>
            <div className="mt-auto">
              <p className="font-bold">KSh {product.currentPrice}</p>
              <p className="text-sm text-gray-500 line-through">KSh {product.originalPrice}</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-orange-500 h-2 rounded-full" 
                  style={{width: `${(product.itemsLeft / 1000) * 100}%`}}
                ></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">{product.itemsLeft} items left</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSales;
