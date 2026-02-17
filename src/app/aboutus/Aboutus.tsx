import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us – Treebazar</h2>
        <p className="text-gray-600 mb-12">
          Welcome to Treebazar — your trusted destination for healthy plants, beautiful greenery, and nature-inspired living. We are passionate about bringing people closer to nature by offering a wide range of live plants, succulents, cactus varieties, lucky bamboo, indoor plants, and gardening essentials — all carefully selected and nurtured with love. <br /><br />

At Treebazar, we believe that plants are more than decoration — they improve air quality, reduce stress, and bring positive energy into homes and workplaces. Our goal is to make plant ownership simple, affordable, and accessible for everyone, whether you are a beginner or an experienced plant lover.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Content */}
          <div className="space-y-10">
            {/* 1 */}
            <div>
              {/* <h3 className="text-3xl font-extrabold text-gray-800 mb-2">1.</h3> */}
              <h4 className="text-xl font-semibold text-gray-800 mb-1">We focus on:</h4>
              <ul>
                <li><p className="text-gray-600">• Healthy and well-rooted plants</p></li>
                <li><p className="text-gray-600">• Secure and safe packaging</p></li>
                <li><p className="text-gray-600">• Honest product descriptions</p></li>
                <li><p className="text-gray-600">• Customer-friendly support</p></li>
                <li><p className="text-gray-600">• Continuous quality improvement</p></li>                
              </ul>
            </div>

            <div>
              <p className="text-gray-600">Every plant we deliver is checked and packed with care to ensure it reaches you in the best possible condition. We continuously work to improve our growing methods and packaging standards so your plants stay fresh and safe during transit. <br /><br />
                Treebazar is not just a store — it’s a growing community of plant lovers. Thank you for supporting green living with us.</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-1">Grow Green. Live Better. 🌿</h4>
              <p className="text-gray-600">If you want, I can also give you a shorter version or a more premium / more friendly tone version for your website.</p>
            </div>

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
