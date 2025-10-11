

"use client"; 
import { useEffect, useState } from 'react';

import SimpleSlider from "./Slider";

type Slide = {
  src: string;
  alt: string;
};

export default function HomeHeroBanner() {
  
  const [slidesTest, setSlidesTest] = useState<Slide[]>([]);

    useEffect(() => {
    fetch('/api/banners/homeBanner')
      .then((res) => res.json())
      .then((data) => setSlidesTest(data));
  }, []);

  return (
    <>
      <main className="max-w-[1220px] mx-auto mt-8">
        <SimpleSlider slides={slidesTest} interval={4000}/> 
      </main>
    </>
  );
}