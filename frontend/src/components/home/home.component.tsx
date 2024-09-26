import React from 'react';

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
import Header from './header.component';
import HeadComponent from '../Header';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-mint-raspberry">
      <>
       <HeadComponent/>
       <Header/>
      </>

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