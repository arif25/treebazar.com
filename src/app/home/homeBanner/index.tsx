
import SimpleSlider from "./Slider";

import Image from "next/image";


export default function HomeHeroBanner() {
  const slides = [
    { src: '/images/banner-image-01.jpg', alt: 'Slide 1' },
    { src: '/images/banner-image-01.jpg', alt: 'Slide 2' },
    { src: '/images/banner-image-01.jpg', alt: 'Slide 3' },
  ];

  return (
    <main className="max-w-[1220px] mx-auto mt-8">
      <SimpleSlider slides={slides} interval={4000}/> 
    </main>
  );
}
