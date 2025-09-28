'use client';

import Link from 'next/link';
import { useState } from 'react';
import SignupHeader from './SignupHeader';
import Bodybg from '../assets/bodybg';

export default function CreateAccountForm() {
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your verification logic here
    alert('Mobile verification initiated');
  };

  return (
    <>
      <Bodybg />
      <div className="min-h-screen flex flex-col items-center justify-start py-10">
       <SignupHeader />
        <div className=" w-full max-w-md bg-white border-gray-50 rounded-md shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Create Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Mobile Number */}
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium">
                Mobile number
              </label>
              <div className="flex space-x-2 mt-1">
                <select className="border rounded px-2 py-1">
                  <option value="+91">IN +91</option>
                </select>
                <input
                  id="mobile"
                  type="tel"
                  maxLength={10}
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="flex-1 border rounded px-3 py-2"
                  placeholder="9999999999"
                />
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Your name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1"
                placeholder="Enter full name"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password (at least 6 characters)
              </label>
              <input
                id="password"
                type="password"
                minLength={6}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1"
                placeholder="Enter password"
              />
              <p className="text-green-600 text-sm mt-1">
                ✔ Passwords must be at least 6 characters.
              </p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-green-600 text-white rounded-md py-2 font-medium hover:bg-green-700" >
              Verify mobile number
            </button>
          </form>

          {/* Sign in */}
          <p className="mt-4 text-sm">
            Already a customer?
            <Link href="./signin" className="text-blue-600 hover:underline">Sign in instead</Link>
          </p>
          <p className="text-xs text-gray-500 mt-4">
            By creating an account or{' '}
            <a href="#" className="text-blue-600 hover:underline">
              logging in
            </a>
            , you agree to Treebazaar{' '}
            <Link href="/termsandconditions" className="text-blue-600 hover:underline">
              Conditions of Use
            </Link>
            and{' '}
            <Link href="/privacypolicy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <footer className="text-xs text-gray-500 mt-10 space-x-4">
          <a href="#" className="hover:underline">
            Conditions of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Notice
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
          <div className="mt-2">© 1996–2025, Treebazaar.com, Inc. or its affiliates</div>
        </footer>
      </div>
    </>
  );
}
