import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-12">
          At Besnik Consultancy, we take pride in our values – service, integrity, and excellence.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Content */}
          <div className="space-y-10">
            {/* 1 */}
            <div>
              <h3 className="text-3xl font-extrabold text-gray-800 mb-2">1.</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-1">Who We Are</h4>
              <p className="text-gray-600">You get a 2-week free trial to kick the Smarty tries. We want you to.</p>
            </div>

            {/* 2 */}
            <div>
              <h3 className="text-3xl font-extrabold text-gray-800 mb-2">2.</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-1">What Do We Do</h4>
              <p className="text-gray-600">We give you a free course that guides you through the process.</p>
            </div>

            {/* 3 */}
            <div>
              <h3 className="text-3xl font-extrabold text-gray-800 mb-2">3.</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-1">How Do We Help</h4>
              <p className="text-gray-600">Use our multimedia lecturers, videos, and coaching sessions.</p>
            </div>

            {/* 4 */}
            <div>
              <h3 className="text-3xl font-extrabold text-gray-800 mb-2">4.</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-1">Create success story</h4>
              <p className="text-gray-600">With access to online learning resources anyone can transfm.</p>
            </div>

            {/* Learn More Button */}
            <button className="mt-6 px-6 py-3 bg-white shadow-md text-gray-700 font-medium rounded-md hover:shadow-lg transition">
              Learn more
            </button>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <Image
              src="/images/product-item.jpg"
              alt="Room 1"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-md"
            />
            <Image
              src="/images/product-item.jpg"
              alt="Chair"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-md"
            />
            <Image
              src="/images/product-item.jpg"
              alt="Couch with pillows"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-md"
            />
            <Image
              src="/images/product-item.jpg"
              alt="Modern sofa"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
