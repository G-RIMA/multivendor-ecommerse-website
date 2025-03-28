// src/components/pages/ProductDetailsPage.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Star, Truck, Shield, Box, Heart } from 'lucide-react';

interface ProductDetailsPageProps {
  productId: string;
}

interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

interface ProductDetails {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  description: string;
  brand: string;
  sku: string;
  stock: number;
  images: ProductImage[];
  specifications: Record<string, string>;
  rating: number;
  reviewCount: number;
  seller: {
    name: string;
    rating: number;
    responseRate: number;
    id: string;
  };
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ productId }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);


  const handleAddToCart = () => {
    // Implement cart functionality
    console.log('Adding to cart:', { product, quantity });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>; // Add a proper loading spinner
  }

  if (!product) {
    return <div>Product not found</div>; // Add a proper error state
  }

  return (
    <div className="min-h-screen bg-mint">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <span className="text-gray-500">Home</span>
          <span className="mx-2">/</span>
          <span className="text-gray-500">Category</span>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>

        {/* Product Info Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg p-6 shadow-lg">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={product.images[selectedImage].url}
                alt={product.images[selectedImage].alt}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 
                    ${selectedImage === index ? 'border-raspberry' : 'border-transparent'}`}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">KSh {product.price.toLocaleString()}</span>
                <span className="text-lg text-gray-500 line-through">
                  KSh {product.originalPrice.toLocaleString()}
                </span>
                <span className="text-raspberry">-{product.discount}%</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Quantity:</span>
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-1 border-x">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <span className="text-sm text-gray-500">
                {product.stock} items available
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full py-3 bg-raspberry text-white rounded-lg hover:bg-opacity-90 transition"
              >
                Add to Cart
              </button>
              <button className="w-full py-3 border border-raspberry text-raspberry rounded-lg hover:bg-raspberry hover:text-white transition">
                Add to Wishlist
              </button>
            </div>

            {/* Delivery Info */}
            <div className="space-y-4 border-t pt-4">
              <div className="flex items-start space-x-3">
                <Truck className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-sm text-gray-600">For orders above KSh 1000</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium">Warranty</p>
                  <p className="text-sm text-gray-600">1 Year Manufacturer Warranty</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Box className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium">Return Policy</p>
                  <p className="text-sm text-gray-600">Easy 7 days return and exchange</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description and Specifications */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Product Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Specifications</h2>
              <div className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 gap-4 py-2 border-b">
                    <span className="text-gray-600">{key}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Seller Information */}
          <div className="bg-white rounded-lg p-6 shadow-lg h-fit">
            <h2 className="text-xl font-bold mb-4">Seller Information</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">{product.seller.name}</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm">{product.seller.rating} Rating</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>Response Rate: {product.seller.responseRate}%</p>
                <button className="mt-4 w-full py-2 border border-raspberry text-raspberry rounded hover:bg-raspberry hover:text-white transition">
                  Visit Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;