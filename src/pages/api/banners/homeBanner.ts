// pages/api/slides.ts

import type { NextApiRequest, NextApiResponse } from 'next';

const slides = [
  { src: '/images/banner-03.jpg', alt: 'Slide 3' },
  { src: '/images/banner-04.jpg', alt: 'Slide 4' },
  { src: '/images/banner-05.jpg', alt: 'Slide 5' },
  { src: '/images/banner-06.jpg', alt: 'Slide 6' },
  { src: '/images/banner-01.jpg', alt: 'Slide 1' },
  { src: '/images/banner-02.jpg', alt: 'Slide 2' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(slides);
}

export type Slide = {
  src: string;
  alt: string;
};