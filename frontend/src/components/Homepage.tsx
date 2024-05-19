import Head from 'next/head';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>E-commerce Website</title>
        <meta name="description" content="Welcome to our e-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">MyShop</div>
          <nav className="space-x-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Shop</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-mint to-raspberry text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-2">Welcome to MyShop</h1>
            <p className="text-lg mb-6">Find the best products here</p>
            <a href="#" className="bg-white text-gray-800 py-2 px-4 rounded-full hover:bg-gray-200">Shop Now</a>
          </div>
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
