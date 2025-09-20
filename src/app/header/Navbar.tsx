'use client';

import { useState } from 'react';

const Navbar = () => {
  const navItems = [
    'All', 'Home', 'Sell', "Today's deal", 'Customer service', 'Fresh', 'FOX B', 'shera plants', 'Yuccabe planters', 'fox a planters',, 'Sell', "Today's deal", 'Customer service', 'Fresh', 'FOX B', 'shera plants', 'Yuccabe planters',
  ];

  return (
    <nav className="bg-gray-800 text-white p-2 min-w-full mx-auto">
      <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="whitespace-nowrap px-4 py-2 hover:bg-gray-700 rounded"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
