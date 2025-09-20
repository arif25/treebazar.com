'use client'



import React, { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * SimpleSlider.tsx
 * A minimal responsive image slider with autoplay (slide effect) using Next.js (TypeScript) + Tailwind CSS.
 */

interface Slide {
  src: string;
  alt: string;
}

interface SimpleSliderProps {
  slides: Slide[];
  interval?: number; // autoplay interval in ms
  className?: string;
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ slides, interval = 4000, className = '' }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Autoplay effect
  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [interval, slides.length]);

  return (
    <div className={`relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg ${className}`}>
      {/* Slides wrapper with translateX */}
      <div
        className="flex transition-transform duration-[1500ms] ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-64 sm:h-96 flex-shrink-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === current}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        aria-label="Previous slide"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        aria-label="Next slide"
      >
        ▶
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleSlider;
