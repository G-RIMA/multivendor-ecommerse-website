// src/mock/products.ts

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  description: string;
  brand: string;
  category: string;
  subcategory: string;
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
  badge?: string;
  isOfficial?: boolean;
}

export const mockProducts: Product[] = [
  {
    id: "prod-001",
    name: "Samsung Galaxy A54",
    price: 45999,
    originalPrice: 52999,
    discount: 13,
    description: "Experience next-level technology with the Samsung Galaxy A54. Features include a stunning 6.4-inch Super AMOLED display, powerful 5G capability, and a versatile triple camera system.",
    brand: "Samsung",
    category: "Electronics",
    subcategory: "Smartphones",
    sku: "SAM-A54-128-BLK",
    stock: 45,
    images: [
      { id: "img1", url: "/api/placeholder/400/400", alt: "Samsung Galaxy A54 Front View" },
      { id: "img2", url: "/api/placeholder/400/400", alt: "Samsung Galaxy A54 Back View" },
      { id: "img3", url: "/api/placeholder/400/400", alt: "Samsung Galaxy A54 Side View" }
    ],
    specifications: {
      "Display": "6.4-inch Super AMOLED",
      "RAM": "8GB",
      "Storage": "128GB",
      "Battery": "5000mAh",
      "Camera": "50MP + 12MP + 5MP",
      "Processor": "Exynos 1380"
    },
    rating: 4.5,
    reviewCount: 128,
    seller: {
      name: "Samsung Official Store",
      rating: 4.8,
      responseRate: 98,
      id: "seller-samsung"
    },
    badge: "Official Store",
    isOfficial: true
  },
  {
    id: "prod-002",
    name: "Nike Air Max 270",
    price: 12999,
    originalPrice: 15999,
    discount: 19,
    description: "Step into comfort with Nike Air Max 270. These iconic sneakers feature Nike's largest Air unit yet in the heel for ultimate cushioning.",
    brand: "Nike",
    category: "Fashion",
    subcategory: "Footwear",
    sku: "NIKE-AM270-BLK-42",
    stock: 25,
    images: [
      { id: "img1", url: "/api/placeholder/400/400", alt: "Nike Air Max 270 Side View" },
      { id: "img2", url: "/api/placeholder/400/400", alt: "Nike Air Max 270 Top View" },
      { id: "img3", url: "/api/placeholder/400/400", alt: "Nike Air Max 270 Back View" }
    ],
    specifications: {
      "Size Range": "40-45 EU",
      "Material": "Mesh and Synthetic",
      "Sole": "Air Max Unit",
      "Style": "Casual/Athletic",
      "Closure": "Lace-up"
    },
    rating: 4.7,
    reviewCount: 256,
    seller: {
      name: "Nike Official Store",
      rating: 4.9,
      responseRate: 99,
      id: "seller-nike"
    },
    badge: "Bestseller",
    isOfficial: true
  },
  {
    id: "prod-003",
    name: "Xiaomi Smart TV X50",
    price: 32999,
    originalPrice: 39999,
    discount: 18,
    description: "Transform your entertainment with the Xiaomi Smart TV X50. Featuring a 4K HDR display, Android TV, and built-in Chromecast.",
    brand: "Xiaomi",
    category: "Electronics",
    subcategory: "TVs",
    sku: "MI-TV-X50-4K",
    stock: 15,
    images: [
      { id: "img1", url: "/api/placeholder/400/400", alt: "Xiaomi TV Front View" },
      { id: "img2", url: "/api/placeholder/400/400", alt: "Xiaomi TV Angle View" },
      { id: "img3", url: "/api/placeholder/400/400", alt: "Xiaomi TV Ports View" }
    ],
    specifications: {
      "Screen Size": "50 inches",
      "Resolution": "4K Ultra HD",
      "Smart Features": "Android TV",
      "Connectivity": "WiFi, Bluetooth",
      "Ports": "3 HDMI, 2 USB"
    },
    rating: 4.4,
    reviewCount: 89,
    seller: {
      name: "Xiaomi Kenya",
      rating: 4.6,
      responseRate: 95,
      id: "seller-xiaomi"
    },
    badge: "Hot Deal",
    isOfficial: true
  }
];