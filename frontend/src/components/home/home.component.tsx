import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ChevronDown, ShoppingCart, User, HelpCircle, Search } from 'lucide-react';

// Mock data
const categories = [
  "Supermarket", "Health & Beauty", "Home & Office", "Appliances", "Phones & Tablets",
  "Computing", "Electronics", "Fashion", "Baby Products", "Gaming", "Sporting Goods"
];

const featuredProducts = [
  { id: 1, name: "Vaseline Intensive Care Lotion", price: 599, image: "/vaseline.jpg", discount: 25 },
  { id: 2, name: "Nivea Body Lotion", price: 799, image: "/nivea.jpg", discount: 30 },
  // Add more products...
];

const brandDeals = [
  { id: 1, name: "Geisha", image: "/geisha.jpg" },
  { id: 2, name: "Vaseline", image: "/vaseline.jpg" },
  { id: 3, name: "Rexona", image: "/rexona.jpg" },
  { id: 4, name: "Dove", image: "/dove.jpg" },
];

const topDeals = [
  { id: 1, name: "Sunlight 2-in-1", price: 199, oldPrice: 250, image: "/sunlight.jpg" },
  { id: 2, name: "Dettol Cool Soap", price: 85, oldPrice: 100, image: "/dettol.jpg" },
  // Add more deals...
];

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Aphrikea</title>
        <meta name="description" content="Shop for all your beauty needs on Jumia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top banner */}
      <div className="bg-gradient-mint-raspberry text-white text-center py-2">
        <p>Beauty Experience - Up to 25% OFF | Brand Day</p>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Image src="/logo.png" alt="Jumia Logo" width={120} height={40} />
            <div className="flex-grow mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products, brands and categories"
                  className="w-full p-2 pl-10 border rounded-md"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="#" className="flex items-center text-gray-600 hover:text-raspberry-500">
                <User size={20} className="mr-1" />
                <span>Account</span>
                <ChevronDown size={16} className="ml-1" />
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-raspberry-500">
                <HelpCircle size={20} className="mr-1" />
                <span>Help</span>
                <ChevronDown size={16} className="ml-1" />
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-raspberry-500">
                <ShoppingCart size={20} className="mr-1" />
                <span>Cart</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-4">
          {/* Categories sidebar */}
          <aside className="w-1/5">
            <div className="bg-white rounded-md shadow-md p-4">
              <h2 className="font-bold text-lg mb-4">Categories</h2>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className="py-2 border-b last:border-b-0">
                    <a href="#" className="text-gray-600 hover:text-raspberry flex items-center justify-between">
                      {category}
                      <ChevronDown size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main content area */}
          <div className="w-4/5">
            {/* Main banner */}
            <section className="mb-8">
              <div className="relative h-80 rounded-md overflow-hidden">
                <Image src="/beauty-banner.jpg" alt="Beauty Experience" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h1 className="text-5xl font-bold text-white">Beauty Experience</h1>
                </div>
              </div>
            </section>

            {/* Featured products */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
              <div className="grid grid-cols-5 gap-4">
                {featuredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-md shadow-md p-4">
                    <div className="relative mb-2">
                      <Image src={product.image} alt={product.name} width={200} height={200} layout="responsive" />
                      <span className="absolute top-2 right-2 bg-mint text-white px-2 py-1 rounded-md text-sm">
                        -{product.discount}%
                      </span>
                    </div>
                    <h3 className="font-semibold mb-1">{product.name}</h3>
                    <p className="text-raspberry font-bold">KSh {product.price}</p>
                    <button className="mt-2 w-full bg-mint text-white py-2 rounded-md hover:bg-raspberry transition-colors">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Brand deals */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Brand Deals</h2>
              <div className="grid grid-cols-4 gap-4">
                {brandDeals.map((brand) => (
                  <div key={brand.id} className="bg-white rounded-md shadow-md p-4">
                    <Image src={brand.image} alt={brand.name} width={200} height={100} layout="responsive" objectFit="contain" />
                  </div>
                ))}
              </div>
            </section>

            {/* Top deals */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Top Deals</h2>
              <div className="grid grid-cols-5 gap-4">
                {topDeals.map((deal) => (
                  <div key={deal.id} className="bg-white rounded-md shadow-md p-4">
                    <Image src={deal.image} alt={deal.name} width={200} height={200} layout="responsive" />
                    <h3 className="font-semibold mt-2 mb-1">{deal.name}</h3>
                    <p className="text-raspberry font-bold">KSh {deal.price}</p>
                    <p className="text-raspberry line-through text-sm">KSh {deal.oldPrice}</p>
                    <button className="mt-2 w-full bg-mint text-white py-2 rounded-md hover:bg-raspberry transition-colors">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">LET US HELP YOU</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-500">How to shop on Jumia?</a></li>
                <li><a href="#" className="hover:text-orange-500">Delivery options and timelines</a></li>
                <li><a href="#" className="hover:text-orange-500">Report a Product</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">ABOUT JUMIA</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500">About us</a></li>
                <li><a href="#" className="hover:text-orange-500">Jumia careers</a></li>
                <li><a href="#" className="hover:text-orange-500">Jumia Express</a></li>
                <li><a href="#" className="hover:text-orange-500">Terms and Conditions</a></li>
                <li><a href="#" className="hover:text-orange-500">Privacy Notice</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">MAKE MONEY WITH JUMIA</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500">Sell on Jumia</a></li>
                <li><a href="#" className="hover:text-orange-500">Vendor hub</a></li>
                <li><a href="#" className="hover:text-orange-500">Become a Sales Consultant</a></li>
                <li><a href="#" className="hover:text-orange-500">Become a Logistics Service Partner</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">JUMIA INTERNATIONAL</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500">Algeria</a></li>
                <li><a href="#" className="hover:text-orange-500">Egypt</a></li>
                <li><a href="#" className="hover:text-orange-500">Ghana</a></li>
                <li><a href="#" className="hover:text-orange-500">Ivory Coast</a></li>
                <li><a href="#" className="hover:text-orange-500">Nigeria</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p>&copy; 2024 Jumia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;