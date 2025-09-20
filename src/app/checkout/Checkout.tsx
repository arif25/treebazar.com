// pages/checkout.tsx
import React from 'react';

const CheckoutPage: React.FC = () => {
  return (
    <div className="  p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-md shadow-md space-y-6">
        {/* Delivery Info */}
        <div className="border border-[#ccc] p-4 rounded-md">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold">Delivering to SAYED ARIFUR RAHMAN</p>
              <p className="text-sm text-gray-700">
                ABP Pvt. Ltd., 6, Prafulla Sarkar Street, KOLKATA, WEST BENGAL, 700001, India
              </p>
              <button className="text-blue-600 text-sm mt-1 hover:underline">Add delivery instructions</button>
            </div>
            <button className="text-blue-600 text-sm hover:underline">Change</button>
          </div>
        </div>

        {/* Payment Method */}
        <div className="border border-[#ccc] p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Payment method</h2>

          <div className="space-y-4">
            <div className="border-t border-[#ccc] pt-4">
              <label className="flex items-start space-x-3">
                <input type="radio" name="payment" className="mt-1" />
                <div>
                  <p className="font-medium">Cash on Delivery/Pay on Delivery</p>
                  <p className="text-sm text-gray-600">Cash, UPI and Cards accepted. <span className="text-blue-600 hover:underline cursor-pointer">Know more</span></p>
                </div>
              </label>
            </div>

            <div className="border-t border-[#ccc] pt-4">
              <p className="font-semibold mb-2">CREDIT & DEBIT CARDS</p>
              <label className="flex items-start space-x-3">
                <input type="radio" name="payment" className="mt-1" />
                <div>
                  <p className="font-medium">ICICI Bank Credit Card ending in 0000</p>
                  <p className="text-sm text-gray-600">
                    CVV not needed <span className="text-blue-600 hover:underline cursor-pointer">Why?</span>
                  </p>
                </div>
              </label>
            </div>
          </div>

          <button className="mt-6 bg-green-100 text-green-800 font-medium py-2 px-4 rounded hover:bg-green-200 transition">
            Use this payment method
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-4 rounded-md">
          <div className="flex justify-between text-sm mb-1">
            <span>Items:</span>
            <span>---</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Delivery:</span>
            <span>---</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Total:</span>
            <span>---</span>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span>Promotion Applied</span>
            <span>---</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Order Total</span>
            <span>₹ 4,620.30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
