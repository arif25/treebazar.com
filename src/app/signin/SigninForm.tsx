'use client';

import { useState } from 'react';

import Link from 'next/link';

export default function SignInForm() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-md shadow border-gray-50">
      <h2 className="text-xl font-semibold mb-6">Sign-In</h2>

      <label className="block text-sm font-medium mb-1">Email or mobile number</label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4"
        placeholder="Enter email or mobile number"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
      />

      <label className="block text-sm font-medium mb-1">Password</label>
      <input
        type="password"
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-2"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          className="mr-2"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label className="text-sm">Keep me signed in</label>
      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 rounded mb-4">
        Sign In
      </button>

      <p className="text-sm text-gray-700 text-center">
        New to Tree Bazar?

        <Link href="./signup" className="text-blue-600 hover:underline">Create your account</Link>
      </p>

      <p className="text-xs text-gray-500 mt-4 border-t pt-4 text-center">
        By signing in, you agree to Treebazaar
        <Link href="termsandconditions" className="text-blue-600 hover:underline">
          Conditions of Use
        </Link>
        and
        <Link href="privacypolicy" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>.
      </p>
    </div>
  );
}
