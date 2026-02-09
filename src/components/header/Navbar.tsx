'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type NavItem = {
  id: number;
  title: string;
  link: string;
};

const Navbar = () => {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const res = await fetch('/api/header/navitems');
        const data = await res.json();
        setNavItems(data.navItems);
      } catch (error) {
        console.error('Failed to fetch nav items', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNavItems();
  }, []);

  if (loading) {
    return (
      <nav className="bg-gray-800 text-white p-2">
        <span className="text-sm opacity-70">Loading menu...</span>
      </nav>
    );
  }

  return (
    <nav className="bg-gray-800 text-white p-2 w-full overflow-x-auto whitespace-nowrap hide-scrollbar">
      <div className="flex items-center space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="text-sm px-4 py-2 rounded hover:bg-gray-700 transition"
            target='_blank'
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
