'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';


const Navbar = () => {
  const [navItems, setNavItems] = useState<string[]>([]);

  useEffect(() => {
    const fetchNavItems = async () => {
      const res = await fetch('/api/navitems');
      const data = await res.json();
      setNavItems(data.navItems);
    };

    fetchNavItems();
  }, []);

  return (
    <nav className="bg-gray-800 text-white p-2 mx-auto w-full overflow-x-auto whitespace-nowrap custom-scrollbar hide-scrollbar">
      <div className="flex items-center space-x-4 scrollbar-hide">
        {navItems.map((item, index) => (
          <Link href="/" 
            key={index}
            className="text-sm whitespace-nowrap px-4 py-2 hover:bg-gray-700 rounded">
            {item}
          </Link>
        ))}
        </div>
    </nav>
  );
};

export default Navbar;











