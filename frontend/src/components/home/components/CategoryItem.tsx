import React from 'react';
import Image from 'next/image';

interface CategoryItemProps {
  imageUrl: string;
  title: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <span className="text-sm font-medium text-center">{title}</span>
    </div>
  );
};

export default CategoryItem;