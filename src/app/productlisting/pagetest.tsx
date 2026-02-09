'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';


export default function PageTest() {

  const [productItems, setfeaturedProducts] = useState<string[]>([]);
  const [recommendedProducts, setrecommendedProducts] = useState<string[]>([]);

 useEffect(() => {
    const fetchProdItems = async () => {
      const res = await fetch('/api/productlisting/productlisting'); 
      const data = await res.json(); 
      setfeaturedProducts(data.featuredProducts);
      setrecommendedProducts(data.recommendedProducts);
    };

    fetchProdItems();
  }, []);

  return (
    <>
        <main className="p-4 max-w-7xl mx-auto mt-4 mb-8">
            <section className="mt-4">
              <h2 className="text-xl font-bold mb-4">Related to items you have viewed</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* {productItems.map((item) => (
                <Link href={`/productlisting/${item.id}`} key={item.id}>
                  <div className="p-4 border border-gray-300 rounded hover:shadow-lg bg:white background: white">
                    <img src={item.image} alt={item.title} className="w-full h-auto mb-2" />
                    <h2 className="font-semibold text-xs">{item.title}</h2>
                    <p className="text-sm text-gray-600">{item.tag}</p>
                    <p className="text-md font-bold">₹{item.price}</p>
                    <p className="text-sm text-green-600">{item.shipping}</p>
                  </div>
                </Link>
              ))} */}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold mb-4">Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* {recommendedProducts.map((item) => (
                <Link href={`/productlisting/${item.id}`} key={item.id}>
                  <div className="p-4 border border-gray-300 rounded hover:shadow-lg bg:white background: white">
                    <img src={item.image} alt={item.title} className="w-full h-auto mb-2" />
                    <h2 className="font-semibold text-xs">{item.title}</h2>
                    <p className="text-sm text-gray-600">{item.tag}</p>
                    <p className="text-md font-bold">₹{item.price}</p>
                    <p className="text-sm text-green-600">{item.shipping}</p>
                  </div>
                </Link>
              ))} */}
            </div>
          </section>
        </main>
    </>
  );
}
