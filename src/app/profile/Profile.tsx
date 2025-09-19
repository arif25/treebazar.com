'use client'


import React, { useState } from 'react';

const Profile = () => {
  const [email, setEmail] = useState('testmail@mail.com');
  const [mobile, setMobile] = useState('+91 8888 8888 88');

  return (
    <div className="w-[1220px] mx-auto p-6 space-y-6 bg-white mt-8"> 
      <h1 className="text-2xl font-semibold">Personal Information</h1>

      <div className="bg-white shadow-md p-6 rounded-lg space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First name"
            className="border rounded p-2 flex-1"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border rounded p-2 flex-1"
          />
        </div>

        <div className="flex items-center gap-4">
          <span>Your gender</span>
          <label className="flex items-center gap-1">
            <input type="radio" name="gender" /> Male
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="gender" /> Female
          </label>
        </div>
      </div>

      {/* Email Section */}
      <div className="bg-white shadow-md p-6 rounded-lg space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Email Address</h2>
          <button className="text-blue-600 text-sm">Edit</button>
        </div>
        <input
          value={email}
          disabled
          className="w-full border rounded p-2 bg-gray-100 text-gray-700"
        />
      </div>

      {/* Mobile Section */}
      <div className="bg-white shadow-md p-6 rounded-lg space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Mobile Number</h2>
          <button className="text-blue-600 text-sm">Edit</button>
        </div>
        <input
          value={mobile}
          disabled
          className="w-full border rounded p-2 bg-gray-100 text-gray-700"
        />
      </div>

      {/* FAQs */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">FAQs</h2>

        <div>
          <p className="font-semibold">
            What happens when I update my email address (or mobile number)?
          </p>
          <p className="text-gray-700">
            Your login email id (or mobile number) changes, likewise. You will receive all your account related communication on your updated email address (or mobile number).
          </p>
        </div>

        <div>
          <p className="font-semibold">
            When will my Treebazaar account be updated with the new email address (or mobile number)?
          </p>
          <p className="text-gray-700">
            Your login email id (or mobile number) changes, likewise. You will receive all your account related communication on your updated email address (or mobile number).
          </p>
        </div>

        <div>
          <p className="font-semibold">
            What happens when I update my email address (or mobile number)?
          </p>
          <p className="text-gray-700">
            Updating your email address (or mobile number) does not invalidate your account. Your account remains fully functional. You will continue seeing your Order history, saved information and personal details.
          </p>
        </div>

        <div>
          <p className="font-semibold">
            What happens to my existing Treebazaar account when I update my email address (or mobile number)?
          </p>
          <p className="text-gray-700">
            Updating your email address (or mobile number) does not invalidate your account. Your account remains fully functional. You will continue seeing your Order history, saved information and personal details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
