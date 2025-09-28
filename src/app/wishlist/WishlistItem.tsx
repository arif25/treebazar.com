'use client';

import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

interface WishlistItemProps {
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  available: boolean;
  assured?: boolean;
}

const WishlistItem: React.FC<WishlistItemProps> = ({
  image,
  title,
  price,
  originalPrice,
  discount,
  available,
  assured,
}) => {
  return (
    <div className="flex items-start justify-between p-4 border-b">
      <div className="flex items-start space-x-4">
        <img src={image} alt={title} className="w-16 h-16 object-cover rounded" />
        <div>
          <h3 className="font-medium">{title}</h3>
          {assured && <span className="text-blue-600 text-sm font-semibold">Assured</span>}
          <div className="mt-1">
            {!available && (
              <p className="text-sm text-red-500 font-semibold">Currently unavailable</p>
            )}
            <div className="flex items-center space-x-2 mt-1">
              <p className="text-lg font-semibold text-gray-900">₹{price}</p>
              <p className="line-through text-sm text-gray-500">₹{originalPrice}</p>
              <p className="text-green-600 text-sm font-semibold">{discount}% off</p>
            </div>
          </div>
        </div>
      </div>
      <button>
        <TrashIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
      </button>
    </div>
  );
};

export default WishlistItem;
