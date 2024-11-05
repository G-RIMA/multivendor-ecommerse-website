import React from 'react';
import { HelpCircle, RefreshCw, Users } from 'lucide-react';
import Link from 'next/link';

const GuaranteesAndPromo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center space-x-3 text-gray-700">
          <HelpCircle className="w-6 h-6 text-orange-500" />
          <div>
            <div className="font-semibold">HELP CENTER</div>
            <div className="text-sm">Guide To Customer Care</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center space-x-3 text-gray-700">
          <RefreshCw className="w-6 h-6 text-orange-500" />
          <div>
            <div className="font-semibold">EASY RETURN</div>
            <div className="text-sm">Quick Refund</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center space-x-3 text-gray-700">
          <Users className="w-6 h-6 text-orange-500" />
          <div>
            <div className="font-semibold">
              <Link href='/vendor/auth'>
              SELL ON APHRIKEA
              </Link>
              
              </div>
            <div className="text-sm">Millions Of Visitors</div>
          </div>
        </div>
      </div>
      
      <div className="bg-mint p-4 rounded-lg shadow text-white">
        <div className="text-2xl font-bold mb-2">just<span className="text-raspberry">GOT</span>paid</div>
        <div className="text-xl font-semibold">EXTRA <span className="text-raspberry">20% OFF</span></div>
      </div>
    </div>
  );
};

export default GuaranteesAndPromo;