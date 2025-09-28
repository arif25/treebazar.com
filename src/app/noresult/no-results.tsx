import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NoResultsPage: FC = () => {
  return (
    <div className="flex flex-col mt-8 items-center justify-center bg-gray-100 text-gray-800">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <img src="/images/product-item.jpg" alt="No results found" className="mx-auto mb-4" />  
        <h1 className="text-xl font-semibold">No results found</h1>
        <p className="mt-2 text-gray-500">
          Try adjusting your search or filter to find what you are looking for.
        </p>
        <div className="mt-4">
            <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Go Back to Home 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoResultsPage;
