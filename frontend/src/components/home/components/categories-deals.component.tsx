import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
}

interface CategoryShowcaseProps {
  title: string;
  categories: Category[];
}

const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ title, categories }) => {
  return (
    <div className="w-full bg-mint p-4 rounded-lg">
      <h2 className="text-2xl font-bold text-white text-center mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link href={category.link} key={category.id} className="block">
            <div className="relative aspect-square rounded-lg overflow-hidden group">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <h3 className="absolute bottom-2 left-2 right-2 text-white font-semibold text-lg text-center">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryShowcase;