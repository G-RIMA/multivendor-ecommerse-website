import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ChevronDown, X, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  rating: number;
  reviews: number;
  isOfficial?: boolean;
  badge?: string;
}

interface Filter {
  name: string;
  options: string[];
}

interface CategoryPageProps {
  category?: string;
  subcategory?: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, subcategory }) => {
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popularity');

  // Sample filters - these would come from your backend
  const filters: Filter[] = [
    {
      name: 'Size',
      options: ['Small', 'Medium', 'Large', 'XL']
    },
    {
      name: 'Color',
      options: ['Red', 'Blue', 'Green', 'Black']
    },
    {
      name: 'Brand',
      options: ['Nike', 'Adidas', 'Puma', 'Under Armour']
    },
  ];

  // Sample products - these would come from your backend
  const products: Product[] = [
    {
      id: 1,
      name: "Summer Fashion Dress",
      price: 1499,
      originalPrice: 2999,
      discount: 50,
      image: "/api/placeholder/300/400",
      rating: 4.5,
      reviews: 128,
      badge: "Sale"
    },
    // Add more sample products
  ];

  return (
    <div className="min-h-screen bg-mint">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <div className="py-4 text-sm">
          <span className="text-gray-500">Home</span>
          <span className="mx-2">/</span>
          <span className="capitalize">{category}</span>
        </div>

        {/* Mobile Filter Button */}
        <button 
          className="md:hidden w-full bg-black text-white py-2 rounded-lg mb-4"
          onClick={() => setShowFilters(true)}
        >
          Show Filters
        </button>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className={`
            fixed md:relative top-0 left-0 h-full w-80 bg-white z-100 
            transform transition-transform duration-300 ease-in-out
            ${showFilters ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
            <div className="p-4 border rounded-lg bg-mint shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold">Filters</h2>
                <button 
                  className="md:hidden"
                  onClick={() => setShowFilters(false)}
                >
                  <X size={24} />
                </button>
              </div>

              {filters.map((filter) => (
                <div key={filter.name} className="mb-6">
                  <h3 className="font-medium mb-2">{filter.name}</h3>
                  <div className="space-y-2">
                    {filter.options.map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedFilters([...selectedFilters, option]);
                            } else {
                              setSelectedFilters(selectedFilters.filter(f => f !== option));
                            }
                          }}
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">{products.length} results found</p>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-lg p-2 text-sm bg-raspberry text-gray-800"
              >
                <option value="popularity">Sort by: Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <div key={product.id} className="bg-white border rounded-lg p-2 hover:shadow-lg transition-shadow">
                  <div className="relative">
                    {product.badge && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        {product.badge}
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-square object-cover rounded"
                    />
                    <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow">
                      <Heart size={18} className="text-gray-400 hover:text-red-500" />
                    </button>
                  </div>
                  <div className="p-2">
                    <h3 className="text-sm font-medium truncate">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-bold">KSh {product.price}</span>
                      {product.discount > 0 && (
                        <span className="text-sm text-gray-500 line-through">
                          KSh {product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.discount > 0 && (
                      <span className="text-xs text-red-500">-{product.discount}%</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;