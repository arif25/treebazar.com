import { NextResponse } from "next/server";

export async function GET() {
  const banners = [
    {
      id: 1,
      title: "Summer Sale",
      image_url: "https://treebazar.com/uploads/banners/summer.jpg",
      link: "https://treebazar.com/sale",
      active_from: "2025-09-01T00:00:00Z",
      active_until: "2025-09-30T23:59:59Z",
      priority: 10,
      position: "homepage_top",
    },
    {
      id: 2,
      title: "New Arrival",
      image_url: "https://treebazar.com/uploads/banners/newarrival.png",
      link: "https://treebazar.com/new",
      active_from: "2025-09-15T00:00:00Z",
      active_until: "2025-10-15T23:59:59Z",
      priority: 5,
      position: "homepage_sidebar",
    },
  ];

  return NextResponse.json({ banners });
}
