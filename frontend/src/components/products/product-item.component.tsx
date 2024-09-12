// components/ProductCard.tsx
import React from 'react';


interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  discount?: number;
  isExpress?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-gray-200 shadow-lg p-4 rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600">
        KSh {product.price.toLocaleString()} 
        {product.discount && (
          <span className="ml-2 text-raspberry line-through">
            KSh {(product.price + product.discount).toLocaleString()}
          </span>
        )}
      </p>
      {product.isExpress && (
        <span className="inline-block bg-mint text-white px-2 py-1 rounded-md text-sm mt-2">
          Express
        </span>
      )}
      <button className="mt-4 w-full bg-raspberry text-white py-2 rounded-md hover:bg-mint transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
