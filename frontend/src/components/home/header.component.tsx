import React from 'react';
import Image from 'next/image';

const HeaderBanner: React.FC = () => {
  return (
    <div className="bg-orange-500 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold tracking-wider">BEAUTY experience</h1>
          <span className="text-xl">Your Routine</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Image
              src="/placeholder-products.png"
              alt="Beauty products"
              width={40}
              height={40}
              className="mr-2"
            />
            <div className="bg-purple-700 text-white px-3 py-1 rounded-md">
              <p className="text-sm">CALL OR WHATSAPP</p>
              <p className="text-lg font-bold">0711 011 011</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-1 flex justify-between text-sm">
        <a href="#" className="hover:underline flex items-center">
          <Image src="/sell-icon.png" alt="Sell on Jumia" width={16} height={16} className="mr-1" />
          Sell on Jumia
        </a>
        <div className="flex items-center space-x-4">
          <Image src="/jumia-logo.png" alt="Jumia" width={60} height={20} />
          <Image src="/jpay-logo.png" alt="JPay" width={40} height={20} />
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;