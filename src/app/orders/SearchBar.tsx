import React from 'react';

export default function SearchBar() {
  return (
    <div className="mb-4 flex justify-between items-center bg-white">
      <input
        type="text"
        placeholder="Search your  orders here"
        className="w-full  px-4 py-2 "
      />
      <button className="ml-4 px-6 py-2 flex-none w-[160px] bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        Search Orders
      </button>
    </div>
  );
}
