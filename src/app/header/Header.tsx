import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import Link from 'next/link';


const Header = () => {
  return (
    <>
      <header className="bg-[#131921] shadow w-[1220px] mx-auto">
        <div className="w-[1220px] mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">
            <Link href="./home">
              <Image src="/images/logo.svg" alt="logo" width={180} height={90} />
            </Link>
          </div>
          <div>
            <SearchBar />
          </div>
          <div className="flex space-x-4">
            <Dropdown />
            <button className="text-sm">Returns & Orders</button>
            <button className="text-sm">Cart</button>
          </div>
        </div>
      </header>
      <Navbar />

    </>
  );
};

export default Header;










