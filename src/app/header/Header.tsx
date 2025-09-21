import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import Link from 'next/link';
import Bodybg from '../assets/bodybg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineShoppingCart } from 'react-icons/hi';


const Header = () => {
  const cartCount = 10; // You can make this dynamic
  return (
    <>
      <Bodybg />
      <header className="bg-[#131921] shadow min-w-full mx-auto">
        <div className="min-w-full mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">
            <Link href="./home">
              <Image src="/images/logo5whiteGreenleaf2.svg" alt="logo" width={180} height={90} />
            </Link>
          </div>

          <div className="flex items-center gap-2 text-white">
            <HiOutlineLocationMarker className="w-5 h-5 text-white/70" />
            <div className="leading-tight">
              <p className="text-sm text-white/60">Delivers to Sayed</p>
              <p className="text-lg font-semibold text-white">
                Kolkata <span className="font-bold">700001</span>
              </p>
            </div>
          </div>

          <div>
            <SearchBar />
          </div>
          <div className="flex min-w-[600px] gap-12">
            <Dropdown />   
            
             <div className="flex items-center gap-12 text-white">
              {/* Returns & Orders */}
              <Link href="orders">
                <div className="leading-tight text-right">
                  <p className="text-sm text-white/60">Returns</p>
                  <p className="text-base font-semibold">& Orders</p>
                </div>
              </Link>

              {/* Cart */}
              <div className="relative ">
                <Link href="/mycart" className='flex items-center gap-1'>
                  <HiOutlineShoppingCart className="w-7 h-7 text-white" />
                  <span className="text-base font-medium">Cart</span>
                  {/* Cart Count */}
                  <span className="absolute top-[-6px] left-2.5 text-[8px] font-bold text-green-500 bg-white rounded-full p-0.5">
                    {cartCount}
                  </span>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </header>
      <Navbar />

    </>
  );
};

export default Header;










