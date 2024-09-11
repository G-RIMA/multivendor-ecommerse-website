import React from 'react';
import CategoryItem from '../components/CategoryItem';

const categories = [
  { imageUrl: '/images/clearance-sale.jpg', title: 'Clearance Sale' },
  { imageUrl: '/images/beauty-experience.jpg', title: 'Beauty Experience' },
  { imageUrl: '/images/flash-sales.jpg', title: 'Flash Sales' },
  { imageUrl: '/images/new-arrivals.jpg', title: 'New Arrivals' },
  { imageUrl: '/images/phones.jpg', title: 'Phones' },
  { imageUrl: '/images/speaker-systems.jpg', title: 'Speaker Systems' },
  { imageUrl: '/images/tvs.jpg', title: 'TVs' },
  { imageUrl: '/images/computing-deals.jpg', title: 'Computing Deals' },
];

const CategoryBanner: React.FC = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center space-x-4 overflow-x-auto">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              imageUrl={category.imageUrl}
              title={category.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;