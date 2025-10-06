import type { NextApiRequest, NextApiResponse } from "next";

type Banner = {
  id: number;
  title: string;
  image_url: string;
  link: string;
  active_from: string;
  active_until: string;
  priority: number;
  position: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ banners: Banner[] }>
) {
  const banners: Banner[] = [
    {
      id: 1,
      title: "Summer Sale",
      image_url: "https://treebazar.com/images/banner-image-01.jpg",
      link: "https://treebazar.com/sale",
      active_from: "2025-09-01T00:00:00Z",
      active_until: "2025-09-30T23:59:59Z",
      priority: 10,
      position: "homepage_top",
    },
    {
      id: 2,
      title: "New Arrival",
      image_url: "https://treebazar.com/images/banner-image-01.jpg",
      link: "https://treebazar.com/new",
      active_from: "2025-09-15T00:00:00Z",
      active_until: "2025-10-15T23:59:59Z",
      priority: 5,
      position: "homepage_sidebar",
    },
  ];

  res.status(200).json({ banners });
}
