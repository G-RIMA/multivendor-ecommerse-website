import React from 'react';
import Head from 'next/head';
import PromotionalSlider from './items/promotional-slider.component';
import GuaranteesAndPromo from './components/guarantees.component';
import CategoryBanner from './items/category.component';
import BestProducts from './items/best-products.component';
import NewProducts from './items/new-products.component';
import NewVendors from './items/new-vendors';
import FlashSalesSection from './items/flash-items.component';
import DealsSection from './items/deals.items.component';
import DealProductSection from './items/topdeals.banner.component';
import Categories from './items/category-items.component';
import TopDealSection from './items/topdeals.banner.component';
import TopCategories from './items/product.categories.component';
import Image from 'next/image';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-mint-raspberry">
      <Head>
        <title>Your E-commerce Store</title>
        <meta name="description" content="Your one-stop shop for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              </div>
              <Link href='/home' className="text-2xl font-bold">
                <Image src='/logo.png' alt='logo' width={200} height={100} />
              </Link>
            </div>
            <div className="flex-grow mx-8">
              <input type="text" placeholder="Search" className="w-full p-2 border rounded" />
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>

              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
              <Link href='/auth'>Login</Link>
            </div>
          </div>
          <nav className="mt-4">
            <ul className="flex space-x-4 font-bold">
              <li>Official Stores</li>
              <li>Clothing</li>
              <li>Beauty and Hair</li>
              <li>Fabrics</li>
              <li>Accessories</li>
              <li>Home</li>
              <li>Art</li>
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
            <div className="bg-white p-4 mb-4">
              <CategoryBanner />
            </div>
            <div className="bg-white p-4 mb-4">
              <FlashSalesSection />
            </div>
            <div className="grid gap-6 mb-4">
              <div className="bg-white">
                <TopDealSection />
              </div>
            </div>
            <div className="bg-white p-4 mb-4">
              <Categories />
              </div>
            <div className="grid gap-4 mb-4">
              <div className="bg-white p-4">
                <BestProducts />
              </div>
            </div>
            <div className="grid gap-4 mb-4">
              <div className="bg-white p-4">
                <NewProducts />
              </div>
            </div>
            <div className="bg-white p-4 mb-4">
              <DealsSection />
            </div>
          </div>
          <div>
            <GuaranteesAndPromo />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="col-span-3 bg-white p-4">
            <DealProductSection />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="col-span-3 bg-white p-4">
            <NewVendors />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="col-span-3 bg-white p-4">
            <TopCategories />
          </div>
        </div>
        
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