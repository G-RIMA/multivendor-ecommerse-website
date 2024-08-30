import React from 'react';
import Head from 'next/head';
import PromotionalSlider from './promotional-slider.component';
import GuaranteesAndPromo from './guarantees.component';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Your E-commerce Store</title>
        <meta name="description" content="Your one-stop shop for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold">Mega Menu</div>
              <div className="text-2xl font-bold">Logo</div>
            </div>
            <div className="flex-grow mx-8">
              <input type="text" placeholder="Search" className="w-full p-2 border rounded" />
            </div>
            <div className="flex items-center space-x-4">
              <div>Wishlist</div>
              <div>Cart</div>
              <div>Login</div>
            </div>
          </div>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
              {/* Add more categories as needed */}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <div className="bg-white p-4 mb-4 h-74">
              <PromotionalSlider />
            </div>
            <div className="bg-white p-4 mb-4">Brands Slider</div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="col-span-2 bg-white p-4 h-64">Top Category Products</div>
              <div className="bg-white p-4">Top Categories Banner</div>
            </div>
            <div className="bg-white p-4 mb-4">Promotion Banner</div>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="bg-white p-4">Best Performing Products Banner</div>
              <div className="col-span-3 bg-white p-4">Best Performing Products</div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="col-span-3 bg-white p-4">New Products Slider</div>
              <div className="bg-white p-4">New Products Banner</div>
            </div>
            <div className="bg-white p-4 mb-4">Deals Slider</div>
          </div>
          <div>
            <GuaranteesAndPromo />
          </div>
        </div>
        
        {/* Additional sections from Image 2 */}
        <div className="bg-white p-4 mb-4">Promotion Banner</div>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-white p-4">New Vendors Banner</div>
          <div className="col-span-3 bg-white p-4">New Vendors Slider</div>
        </div>
        <div className="bg-white p-4 mb-4">Banner</div>
        <div className="bg-white p-4 mb-4">Fashion Blog/ Website Blog</div>
        <div className="bg-white p-4 mb-4">Promotional Banner For Membership/ Advertising</div>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Our Story</a></li>
                <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Policies</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;