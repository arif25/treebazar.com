import React from 'react';
// import { Order } from '../types';
import { Order } from './types';

interface Props {
  order: Order;
}

export default function OrderCard({ order }: Props) {
  return (
    <div className="flex border p-4 rounded-md shadow-sm mb-4 bg-white border-gray-200">
      <img src={order.image} alt={order.productName} className="w-20 h-20 object-contain mr-4" />
      <div className="flex-1">
        <h2 className="font-semibold">{order.productName}</h2>
        <p className="text-sm text-gray-500">₹{order.price}</p>
        {order.color && <p className="text-sm text-gray-500">Color: {order.color}</p>}
        {order.size && <p className="text-sm text-gray-500">Size: {order.size}</p>}

        {order.status === 'Delivered' ? (
          <p className="text-green-600 mt-1">● Delivered on {order.deliveryDate}</p>
        ) : (
          <p className="text-orange-500 mt-1">● Refund Completed</p>
        )}

        <button className="text-blue-600 mt-1 hover:underline">★ Rate & Review Product</button>

        {order.status === 'Refund Completed' && order.refundDetails && (
          <div className="mt-2 text-sm text-gray-600 bg-gray-100 p-2 rounded">
            <p>Refund ID: {order.refundDetails.refundId}</p>
            <p>Refunded on: {order.refundDetails.refundDate}, {order.refundDetails.refundTime}</p>
            <p>Reference #: {order.refundDetails.refundRef}</p>
          </div>
        )}
      </div>
    </div>
  );
}
