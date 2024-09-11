import React from 'react';
import Image from 'next/image';

export interface Deal {
  id: string;
  title: string;
  priceFrom?: string;
  price?: number;
  originalPrice?: number;
  image: string;
  category?: string;
}

interface DealsProps {
  deals: Deal[];
}

const DealsSlider: React.FC<DealsProps> = ({ deals }) => {
  return (
    <div className="w-full bg-mint p-4">
      <h2 className="text-2xl font-bold text-white text-center mb-4">Jumia Festival | Top Deals</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-lg overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-6 bg-repeat-x" style={{backgroundImage: "url('/path/to/bunting.png')"}}></div>
            <div className="p-4">
              <h3 className="text-white font-bold text-lg mb-2">{deal.title}</h3>
              {deal.priceFrom && (
                <p className="bg-raspberry text-white rounded-full px-3 py-1 text-sm inline-block mb-2">
                  FROM {deal.priceFrom}
                </p>
              )}
              <div className="relative h-40 mb-2">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  layout="fill"
                  objectFit="contain"
                  className="bg-white p-2 rounded-lg"
                />
              </div>
              {deal.price && deal.originalPrice && (
                <div className="bg-raspberry text-white p-2 rounded-lg">
                  <p className="font-bold">KSH {deal.price.toLocaleString()}</p>
                  <p className="text-sm line-through">KSH {deal.originalPrice.toLocaleString()}</p>
                </div>
              )}
              {deal.category && (
                <p className="text-white text-sm mt-2">{deal.category}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSlider;