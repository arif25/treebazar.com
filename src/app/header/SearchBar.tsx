'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    alert(`Search for "${query}" in "${category}"`);
  };

  return (
    <div className="flex items-stretch border border-black rounded-md overflow-hidden w-full max-w-3xl mx-auto">
      {/* Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-white text-sm px-3 py-2  outline-none border-r border-gray-300 w-[500px]"
      >
        <option value="all">Select an option</option>
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
      </select>
      <Link href="productlisting" className="bg-green-600 hover:bg-green-700 text-white px-4 flex items-center justify-center">
        <FiSearch className="text-xl" />      
      </Link>
    </div>
  );
}
