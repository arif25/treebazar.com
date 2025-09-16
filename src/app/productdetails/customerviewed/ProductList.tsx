// components/ProductList.tsx
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types';

const products: Product[] = [
  {
    id: 1,
    imageUrl: '/images/product-item.jpg', 
    title: 'Indoor Plants for Living Room Home Decor Set of 4 Plant Combo Live Plant with Pot - Jade Plant, Money Plant Golden, Broken Heart Plant',
    price: 1049,
    mrp: 1599,
    discount: 36,
    deliveryDate: 'Mon, 15 Sept',
  },
  {
    id: 2,
    imageUrl: '/images/product-item.jpg', 
    title: 'Indoor Plants for Living Room Home Decor Set of 4 Plant Combo Live Plant with Pot - Jade Plant, Money Plant Golden, Broken Heart Plant',
    price: 1049,
    mrp: 1599,
    discount: 36,
    deliveryDate: 'Mon, 15 Sept',
  },
  {
    id: 3,
    imageUrl: '/images/product-item.jpg', 
    title: 'Indoor Plants for Living Room Home Decor Set of 4 Plant Combo Live Plant with Pot - Jade Plant, Money Plant Golden, Broken Heart Plant',
    price: 1049,
    mrp: 1599,
    discount: 36,
    deliveryDate: 'Mon, 15 Sept',
  },
  {
    id: 4,
    imageUrl: '/images/product-item.jpg', 
    title: 'Indoor Plants for Living Room Home Decor Set of 4 Plant Combo Live Plant with Pot - Jade Plant, Money Plant Golden, Broken Heart Plant',
    price: 1049,
    mrp: 1599,
    discount: 36,
    deliveryDate: 'Mon, 15 Sept',
  },
  {
    id: 5,
    imageUrl: '/images/product-item.jpg', 
    title: 'Indoor Plants for Living Room Home Decor Set of 4 Plant Combo Live Plant with Pot - Jade Plant, Money Plant Golden, Broken Heart Plant',
    price: 1049,
    mrp: 1599,
    discount: 36,
    deliveryDate: 'Mon, 15 Sept',
  },
  {
    id: 6,
    imageUrl: '/images/product-item.jpg', 
    title: 'Indoor Plants for Living Room Home Decor Set of 4 Plant Combo Live Plant with Pot - Jade Plant, Money Plant Golden, Broken Heart Plant',
    price: 1049,
    mrp: 1599,
    discount: 36,
    deliveryDate: 'Mon, 15 Sept',
  },
  {
    id: 7,
    imageUrl: '/images/product-item.jpg', 
    title: 'Indoor Plants for Living Room Home Decor Set of 4 Plant Combo Live Plant with Pot - Jade Plant, Money Plant Golden, Broken Heart Plant',
    price: 1049,
    mrp: 1599,
    discount: 36,
    deliveryDate: 'Mon, 15 Sept',
  },
  {
    id: 8,
    imageUrl: '/images/product-item.jpg', 
    title: 'Indoor Plants for Living Room Home Decor Set of 4 Plant Combo Live Plant with Pot - Jade Plant, Money Plant Golden, Broken Heart Plant',
    price: 1049, 
    mrp: 1599,
    discount: 36,
    deliveryDate: 'Mon, 15 Sept',
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="px-6 py-8">
      <h2 className="text-xl font-bold mb-4">Customers who viewed this item also viewed</h2>
      <p className="text-sm text-gray-600 mb-6">
        Check each product page for other buying options. Price and other details may vary based on product size and colour.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
