import Link from "next/link";

// components/ProductInfo.tsx
export default function ProductInfo() {
  return (
    <div className="w-full md:w-1/2 p-4">
      <h1 className="text-2xl font-bold">
        Kyari Vastu Plants Combo of 4 for Home Decor
      </h1>
      <p className="text-sm text-gray-600 mb-2">
        50+ bought in past month
      </p>

      <div className="flex items-center space-x-3 mb-2">
        <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
          Limited time deal
        </span>
        <span className="text-green-600 font-semibold text-lg">
          -42% Rs. 1099
        </span>
        <span className="line-through text-gray-400 text-sm">
          Rs. 1899
        </span>
      </div>

      <ul className="text-sm mb-4 space-y-1">
        <li><strong>Brand:</strong> Tree Bazar</li>
        <li><strong>Usage:</strong> Indoor</li>
        <li><strong>Material:</strong> Organic</li>
        <li><strong>Color:</strong> White</li>
        <li><strong>Weight:</strong> 1680 grams</li>
        <li><strong>Sunlight:</strong> Partial Sun</li>
      </ul>

      <select className="border rounded px-2 py-1 mb-3">
        <option>Quantity: 1</option>
        <option>Quantity: 2</option>
      </select>

      <div className="space-y-2">        
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            <Link href="./mycart">Add to Cart</Link>
          </button>        
          <button className="w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600">
            <Link href="./checkout">Buy Now</Link>
          </button>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        Earn 50% cashback up to Rs. 200 when you shop for Rs.1 or more
      </p>
    </div>
  );
}
