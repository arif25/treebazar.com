// components/ContactOptions.tsx
import React from 'react';
import { ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/outline';

const ContactOptions = () => {
  return (
    <div className=" py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl font-semibold text-gray-900 mb-8">
        Want to chat now or get a call from us?
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chat Option */}
        <div className="bg-white rounded-md shadow p-6 flex flex-col items-start">
          <div className="flex items-center mb-4">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Chat right now</h3>
          </div>
          <p className="text-gray-700 mb-2">
            Our messaging assistant can quickly solve many issues or direct you to the right person or place.
          </p>
          <p className="text-sm font-semibold text-gray-800 mb-4">Instant chat and always available.</p>
          {/* <button className="mt-auto bg-white border border-gray-300 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-100 transition">
            Start chatting
          </button>  */}
          <a href="https://wa.me/9144291647?text=Hello!" target="_blank" rel="noopener noreferrer" className="mt-auto bg-white border border-gray-300 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-100 transition"> 💬 Start chatting</a>
        </div>

        {/* Call Option */}
        <div className="bg-white rounded-md shadow p-6 flex flex-col items-start">
          <div className="flex items-center mb-4">
            <PhoneIcon className="h-6 w-6 text-gray-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Have us call you</h3>
          </div>
          <p className="text-gray-700 mb-4">
            We will first get a few details about your issue and then someone will call you right away.
          </p>
          {/* <button className="mt-auto bg-white border border-gray-300 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-100 transition"> 
            Call me
          </button> */}
          <a href="tel:9144291647" className="mt-auto bg-white border border-gray-300 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-100 transition">
            Call Us: 91442 91647
          </a>

        </div>
      </div>
    </div>
  );
};

export default ContactOptions;
