import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ProductDeal {
  id: string;
  name: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  discountPercentage: number;
  specs: string;
}

interface BannerProps {
  title: string;
  subtitle?: string;
  seeAllLink?: string;
}

interface BannerDealsProps {
  banner: BannerProps;
  deals: ProductDeal[];
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, seeAllLink }) => (
  <div className="bg-mint text-white p-4 flex justify-between items-center">
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      {subtitle && <p className="text-sm">{subtitle}</p>}
    </div>
    {seeAllLink && (
      <Link href={seeAllLink} className="text-sm hover:underline">
        SEE ALL &gt;
      </Link>
    )}
  </div>
);

const BannerDeals: React.FC<BannerDealsProps> = ({ banner, deals }) => {
  return (
    <div className="w-full">
      <Banner {...banner} />
      <div className="bg-white p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-40">
                <Image
                  src={deal.image}
                  alt={deal.name}
                  layout="fill"
                  objectFit="contain"
                />
                <span className="absolute top-2 right-2 bg-raspberry text-white text-xs font-bold px-2 py-1 rounded">
                  -{deal.discountPercentage}%
                </span>
              </div>
              <div className="p-2">
                <h3 className="text-sm font-semibold truncate">{deal.name}</h3>
                <p className="text-xs text-gray-600 truncate">{deal.specs}</p>
                <p className="font-bold text-lg">KSh {deal.currentPrice.toLocaleString()}</p>
                <p className="text-sm text-gray-500 line-through">
                  KSh {deal.originalPrice.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerDeals;

