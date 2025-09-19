'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
        Account & Lists
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</Link>
            <Link href="/contactus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</Link>
            <Link href="/signin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign in</Link>
            <Link href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Up</Link>
          </div>
        </div>
      )}
    </div>
  );
}
