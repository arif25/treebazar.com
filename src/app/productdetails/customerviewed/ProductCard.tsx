// components/ProductCard.tsx
import React from 'react';
import { Product } from '../../types';



const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="border border-[#ccc] rounded-md shadow-sm p-4">
      <img src={product.imageUrl} alt={product.title} className="w-full h-64 object-cover mb-4" />
      
      <h3 className="text-sm font-medium mb-1">{product.title}</h3>

      <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded mb-2">
        Limited time deal
      </span>

      <div className="text-sm text-gray-700 mb-1">
        M.R.P: <span className="line-through">₹{product.mrp.toLocaleString()}</span> 
        <span className="text-green-600 ml-2">({product.discount}% off)</span>
      </div>

      <div className="text-sm font-semibold text-gray-900 mb-1">
        FREE delivery <span className="font-bold">{product.deliveryDate}</span>
      </div>

      <div className="text-xl font-bold text-black">₹{product.price.toLocaleString()}</div>
    </div>
  );
};

export default ProductCard;
