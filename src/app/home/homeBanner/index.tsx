
import SimpleSlider from "./Slider";


export default function HomeHeroBanner() {
  const slides = [
    { src: '/images/slide1.jpg', alt: 'Slide 1' },
    { src: '/images/slide2.jpg', alt: 'Slide 2' },
    { src: '/images/slide3.jpg', alt: 'Slide 3' },
  ];

  return (
    <main>
      <SimpleSlider slides={slides} />
    </main>
  );
}
