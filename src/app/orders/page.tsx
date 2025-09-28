import React from 'react';
import SearchBar from './SearchBar'; 
import OrderCard from './OrderCard';
import { Order } from './types';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const orders: Order[] = [
  {
    id: '1',
    productName: 'Mamaearth Gentle Cleansing Baby Shampoo',
    price: 157,
    status: 'Delivered',
    deliveryDate: 'Jan 20',
    image: '/images/product-item.jpg',
  },
  {
    id: '2',
    productName: 'Mamaearth Daily Glow Face Cream',
    price: 223,
    status: 'Delivered',
    deliveryDate: 'Jun 12, 2024',
    image: '/images/product-item.jpg',
  },
  {
    id: '3',
    productName: 'REFFER latest Unisex Winter Woolen Beanie',
    price: 299,
    status: 'Delivered',
    deliveryDate: 'Nov 14, 2023',
    color: 'Black',
    size: 'Free',
    image: '/images/product-item.jpg',
  },
  {
    id: '4',
    productName: 'My Book Of Knowledge In English - Picture Book',
    price: 399,
    status: 'Delivered',
    deliveryDate: 'Nov 11, 2023',
    image: '/images/product-item.jpg',
  },
  {
    id: '5',
    productName: 'CLOUD LOOK Full Sleeve Solid Men Jacket',
    price: 487,
    status: 'Refund Completed',
    color: 'Black',
    size: 'XL',
    image: '/images/product-item.jpg',  
    refundDetails: {
      refundDate: 'Nov 17, 2023',
      refundTime: '04:54 PM',
      refundRef: '332028133280',
      refundId: '12302968831306545454',
    },
  },
];

export default function page() {
  return (
    <>
    <Header />
    <div className="max-w-4xl mx-auto p-6">
      <SearchBar />
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
    <Footer />
    </>
  );
}
