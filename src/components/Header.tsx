import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';


const Header = () => {
  return (
    <>
      <header className="bg-white shadow w-[1220px] mx-auto">
        <div className="w-[1220px] mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">
            {/* <Image src="/images/logo.png" alt="Plant" className="" width={120} height={50} layout='responsive' /> */}
            <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={120}
                  height={100}
                  className="rounded"
                />
          </div>
          <div>
            <input type="text" placeholder="Search..." className="border rounded p-2"/>
          </div>
          <div className="flex space-x-4">
            <button className="text-sm">Account & Lists</button>
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
