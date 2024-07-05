import Head from 'next/head';
import React from 'react';
import MegaMenu from './mega-menu';
import InfiniteScroll from 'react-infinite-scroll-component';


const HomePage:React.FC = () => {
  return (
    <div>
      <Head>
        <title>Aphrikea</title>
        <meta name="description" content="Welcome to our e-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-xl font-bold text-gray-800">
            <MegaMenu />
            <img src="/logo.png" alt="logo" className='w-40' />
          </div>
          <div className="flex-1">
            <input type="text" placeholder="Search" className="ml-10 w-1/2 p-2 border border-gray-300 rounded"/>
          </div>
          <nav className="flex space-x-4">
            <button className="p-4 text-gray-800 hover:text-gray-600 border rounded-md bg-raspberry">WishList</button>
            <button className="p-4 text-gray-800 hover:text-gray-600 border rounded-md bg-raspberry">Cart</button>
            <button className="p-4 text-gray-800 hover:text-gray-600 border rounded-md bg-raspberry">Login</button>
            <button className="p-4 text-gray-800 hover:text-gray-600 border rounded-md bg-raspberry">Sign Up</button>
            <button className="p-4 text-gray-800 hover:text-gray-600 border rounded-md bg-raspberry">Vendor</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="flex space-x-8 container mx-auto px-5 py-5">
          <div>
            <h3>Popular Categories: </h3>
          </div>
          <div className='flex space-x-4'>
            <a href="#" className="hover:text-gray-400">Clothes</a>
            <a href="#" className="hover:text-gray-400">Beauty And Hair</a>
            <a href="#" className="hover:text-gray-400">Fabrics</a>
            <a href="#" className="hover:text-gray-400">Accessories</a>
          </div>
        </section>
        <section className="bg-gradient-to-r from-mint to-raspberry text-white py-20">
           

        </section>

        <section className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Products</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Product Card */}
            {Array(6).fill(0).map((_, index) => (
              <div key={index} className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img className="w-full h-56 object-cover object-center" src={`/path/to/image${index + 1}.jpg`} alt={`Product ${index + 1}`} />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Product {index + 1}</h3>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ultricies felis.</p>
                    <a href="#" className="bg-mint text-white py-2 px-4 rounded-full hover:bg-raspberry">View Product</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">&copy; 2024 MyShop. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
