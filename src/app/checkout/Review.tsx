// pages/review.tsx
import React from 'react';
import Link from 'next/link';

const ReviewSection: React.FC = () => {
  return (
    <div className=" p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-md shadow-md space-y-6">
        <h1 className="text-xl font-semibold">Review items and shipping</h1>

        <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-800 space-y-4">
          <p>
            Need help? Check our
            <Link href='' className="text-blue-600 hover:underline">
              help pages
            </Link>
            or
            <Link href='' className="text-blue-600 hover:underline">
              contact us 24×7
            </Link>
          </p>

          <p>
            When your order is placed, we&apos;ll send you an e-mail message acknowledging receipt of your order.
            If you choose to pay using an electronic payment method (credit card, debit card or net banking),
            you will be directed to your bank&apos;s website to complete your payment. Your contract to purchase
            an item will not be complete until we receive your electronic payment and dispatch your item.
            If you choose to pay using Pay on Delivery (POD), you can pay using cash/card/net banking when you
            receive your item.
          </p>

          <p>
            See Treebazaar.in&apos;s
            <Link href='' className="text-blue-600 hover:underline">
              Return Policy.
            </Link>
          </p>

          <Link href="/cart" className="text-blue-600 hover:underline">Back to cart</Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
