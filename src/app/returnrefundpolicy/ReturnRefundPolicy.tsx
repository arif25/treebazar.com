import React from 'react';

export default function ReturnsPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Fast, Easy Returns Process */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Fast, Easy Returns Process</h2>
          <p className="mb-2">
            Free, easy returns on millions of items at over 18,000 drop-off locations. <br />
            You may return most new, unopened items sold and fulfilled by Treebazaar within 30 days of delivery for a full refund. <br />
            <a href="#" className="text-blue-600">Learn more about Treebazaar’s Return Policy</a>.
          </p>
          <a href="#" className="text-blue-600 font-medium">START A RETURN IN YOUR ORDERS</a>
        </div>

        {/* Manage Returns / Get Product Support */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Manage Returns</h3>
            <p className="mb-2">Print return labels and check the status of your recent returns</p>
            <a href="#" className="text-blue-600">VIEW YOUR RETURNS</a>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Get product support</h3>
            <p>You don not have any products eligible for support at this time. Support is available for products like cameras, laptops, and other electronics.</p>
          </div>
        </div>

        {/* Survey */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">How likely are you to recommend Treebazaar to a friend or colleague?</h3>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Not at all likely</span>
            <span>Extremely likely</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[...Array(11).keys()].map(num => (
              <button key={num} className="px-4 py-2 border rounded hover:bg-gray-100">
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Gift Returns */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Gift Returns</h3>
          <p className="mb-2">
            Start a gift return by using the <strong>order number</strong> e.g. 123-1234567-1234567
            <a href="#" className="text-blue-600 ml-1">How do I find this?</a>
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Order number (with dashes)"
              className="flex-1 px-4 py-2 border border-gray-300 rounded"
            />
            <button className="bg-black text-white px-4 py-2 rounded">Search</button>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">What can I return?</h4>
              <p>
                You may return most new, unopened items sold and fulfilled by Treebazaar within 30 days of delivery for a full refund.
                <a href="#" className="text-blue-600 ml-1">Return policy</a>.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">When will I get my refund?</h4>
              <p>
                Usually in about 2–3 weeks. Most refunds are fully refunded within 7 days after we receive and process your return.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
