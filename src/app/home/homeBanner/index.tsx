

"use client"; // if using app directory


import SimpleSlider from "./Slider";

import Image from "next/image";


export default function HomeHeroBanner() {
  const slides = [
    { src: '/images/banner-image-01.jpg', alt: 'Slide 1' },
    { src: '/images/banner-image-01.jpg', alt: 'Slide 2' },
    { src: '/images/banner-image-01.jpg', alt: 'Slide 3' },
    { src: '/images/banner-image-01.jpg', alt: 'Slide 4' },
    { src: '/images/banner-image-01.jpg', alt: 'Slide 5' },
    { src: '/images/banner-image-01.jpg', alt: 'Slide 6' },
    { src: '/images/banner-image-01.jpg', alt: 'Slide 7' },
    { src: '/images/banner-image-01.jpg', alt: 'Slide 8' },
    { src: '/images/banner-image-01.jpg', alt: 'Slide 9' },
  ];

  return (
    <main className="max-w-[1220px] mx-auto mt-8">
      <SimpleSlider slides={slides} interval={4000}/> 
    </main>
  );
}




// import { useEffect, useState } from "react";

// type Banner = {
//   id: number;
//   title: string;
//   image_url: string;
//   link: string;
//   active_from: string;
//   active_until: string;
//   priority: number;
//   position: string;
// };

// export default function BannerList() {
//   const [banners, setBanners] = useState<Banner[]>([]);

//   useEffect(() => {
//     fetch("/api/banners")
//       .then((res) => res.json())
//       .then((data) => setBanners(data.banners));
//   }, []);

//   return (
//     <div className="grid gap-4 md:grid-cols-2">
//       {banners.map((banner) => (
//         <a
//           key={banner.id}
//           href={banner.link}
//           className="block overflow-hidden rounded-2xl shadow-lg hover:opacity-90 transition"
//         >
//           <img
//             src={banner.image_url}
//             alt={banner.title}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4 text-lg font-semibold">{banner.title}</div>
//         </a>
//       ))}
//     </div>
//   );
// }

