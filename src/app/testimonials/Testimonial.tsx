'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

type Testimonial = {
  name: string;
  location: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Emily Taylor',
    location: 'Berlin, Germany',
    image: '/images/emily.jpg',
    quote:
      'SP Page Builder 2, it’s a great extension, easy to use, beautiful design, fast and light. JoomShaper makes a great work with this version!',
  },
  {
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    image: '/images/michael.jpg',
    quote:
      'I love how intuitive and powerful the tools are. Our team productivity improved thanks to this tool!',
  },
  {
    name: 'Sara Ali',
    location: 'Dubai, UAE',
    image: '/images/sara.jpg',
    quote:
      'From design to performance, this is one of the best tools we’ve used. Highly recommended!',
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide(); // reset
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  return (
    <div className="bg-yellow-100 min-h-screen flex items-center justify-center px-6 py-10">
      <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl w-full overflow-hidden">
        {/* Left Side Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Increase Credibility <br /> by Showing Testimonials <br /> and Clients
          </h2>
        </div>

        {/* Right Side Carousel */}
        <div className="relative w-full md:w-1/2 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  <span className="border-b-4 border-yellow-400">
                    What Our Client Says
                  </span>
                </h3>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm mb-2">{testimonial.location}</p>
                  <div className="flex space-x-1 text-yellow-400 mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => {
              handlePrev();
              startAutoSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 text-2xl z-10"
          >
            &#8592;
          </button>
          <button
            onClick={() => {
              handleNext();
              startAutoSlide();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-500 text-2xl z-10"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel; 
