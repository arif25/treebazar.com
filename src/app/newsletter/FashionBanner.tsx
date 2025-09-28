import Link from 'next/link';
import React from 'react';

const FashionBanner = () => {
  return (
    <section className="min-h-[60vh] relative bg-gradient-to-r from-pink-200 via-pink-300 to-pink-100 py-20 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <h3 className="uppercase text-sm tracking-widest text-gray-700 mb-2">
          Home Plant Sale
        </h3>
        <h2 className="text-5xl font-extrabold text-black mb-6">50% OFF</h2>
        <Link href="productlisting" className="mt-4 border border-black text-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default FashionBanner;
