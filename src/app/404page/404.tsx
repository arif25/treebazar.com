// pages/404.tsx
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4 bg-gray-100">
      <div className="relative">
        {/* Background shapes */}
        <div className="absolute -left-10 bottom-0 w-16 h-16 bg-red-500 rotate-45 z-0" />
        <div className="absolute -right-10 bottom-0 w-16 h-16 bg-blue-500 z-0" />
        <div className="absolute left-8 top-0 w-10 h-10 bg-yellow-400 rotate-12 z-0" />

        {/* Laptop image placeholder */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-48 h-32 bg-white border border-gray-400 rounded-md flex items-center justify-center shadow-md">
            <span className="text-4xl text-red-500">!</span>
          </div>

          {/* Thunderstorm cloud */}
          <div className="absolute -top-16 flex flex-col items-center">
            <div className="w-14 h-8 bg-yellow-300 rounded-full shadow" />
            <div className="w-2 h-6 bg-red-500 mt-1 transform rotate-12" />
            <div className="mt-1 text-xs text-gray-400">☔</div>
          </div>
        </div>
      </div>

      <p className="mt-10 text-lg text-gray-700">
        Unfortunately the page you are looking for has been moved or deleted
      </p>

      <Link href="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Go to Homepage
      </Link>
    </div>
  );
}
