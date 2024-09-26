import { useState } from 'react';
import Link from 'next/link';

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* This is the user icon that toggles the dropdown */}
      <button onClick={toggleDropdown} className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-mint">
              <Link href="/auth">Login / Logout</Link>
            </li>
            <li className="px-4 py-2 hover:bg-mint">
              <Link href="/account">My Account</Link>
            </li>
            <li className="px-4 py-2 hover:bg-mint">
              <Link href="/orders">My Orders</Link>
            </li>
            <li className="px-4 py-2 hover:bg-mint">
              <Link href="/vendor-apply">Apply to be a Vendor</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
