import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const OrderConfirmation: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-xl font-semibold mb-2">Thank you for your purchase</h1>
        <p className="text-gray-600 mb-4">
          We&apos;ve received your order will ship in 5–7 business days. <br />
          Your order number is <span className="font-medium text-gray-800">#B6CT3</span>
        </p>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-left font-semibold mb-2">Order Summary</h2>
          <div className="space-y-3">
            {/* Item 1 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/product-item.jpg" // Replace with your actual image path
                  alt="Cotton Shirt"
                  width={50}
                  height={50}
                  className="rounded"
                />
                <p className="text-sm text-left">Half Sleeve 100% Cotton Shirts<br />For Women</p>
              </div>
              <p className="text-sm font-medium">₹ 800</p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/product-item.jpg" // Replace with your actual image path
                  alt="Scarf Combo"
                  width={50}
                  height={50}
                  className="rounded"
                />
                <p className="text-sm text-left">Stylish womens scarfs combo</p>
              </div>
              <p className="text-sm font-medium">₹ 800</p>
            </div>

            {/* Total */}
            <div className="border-t pt-3 flex justify-between font-semibold text-gray-800">
              <span>Total</span>
              <span>₹ 1600</span>
            </div>
          </div>
        </div>
        <Link href="/" className="mt-6 px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
