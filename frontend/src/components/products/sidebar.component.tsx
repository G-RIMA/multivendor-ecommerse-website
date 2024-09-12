import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  // State to handle price range filter
  const [minPrice, setMinPrice] = useState<number>(1);
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  
  return (
    <div className="w-64 bg-white p-4 shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-4">CATEGORY</h2>
      <ul className="space-y-2 mb-6">
        <li>Home & Office</li>
        <li>Arts, Crafts & Sewing</li>
        <li>Home & Furniture</li>
        <li>Home & Kitchen</li>
        <li>Office Products</li>
        <li>Tools & Home Improvement</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">BRAND</h2>
      <input
        type="text"
        placeholder="Search Brand"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <div className="max-h-40 overflow-y-auto space-y-2 mb-6">
        <div>
          <input type="checkbox" id="4you" />
          <label className="ml-2" htmlFor="4you">4you</label>
        </div>
        <div>
          <input type="checkbox" id="915 Generation" />
          <label className="ml-2" htmlFor="915 Generation">915 Generation</label>
        </div>
        <div>
          <input type="checkbox" id="AICO" />
          <label className="ml-2" htmlFor="AICO">AICO</label>
        </div>
        <div>
          <input type="checkbox" id="AILYONS" />
          <label className="ml-2" htmlFor="AILYONS">AILYONS</label>
        </div>
        <div>
          <input type="checkbox" id="Always" />
          <label className="ml-2" htmlFor="Always">Always</label>
        </div>
        {/* Add more brands as needed */}
      </div>

      <h2 className="text-xl font-bold mb-4">PRICE (KSH)</h2>
      <div className="mb-4">
        <input
          type="range"
          min="1"
          max="10000"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-full"
        />
        <input
          type="range"
          min="1"
          max="10000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm">
          <span>KSh {minPrice}</span>
          <span>KSh {maxPrice}</span>
        </div>
      </div>
      <button className="w-full bg-raspberry text-white py-2 rounded">Apply</button>

      <h2 className="text-xl font-bold mt-6 mb-4">DISCOUNT PERCENTAGE</h2>
      <div className="space-y-2">
        <div>
          <input type="checkbox" id="50PercentOrMore" />
          <label className="ml-2" htmlFor="50PercentOrMore">50% or more</label>
        </div>
        <div>
          <input type="checkbox" id="40PercentOrMore" />
          <label className="ml-2" htmlFor="40PercentOrMore">40% or more</label>
        </div>
        {/* Add more discount filters as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
