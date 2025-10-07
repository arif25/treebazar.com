import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const navItems = [
  'All',
  'Home',
  'Shop Plants',
  'Indoor Plants',
  'Outdoor Plants',
  'Flowering Plants',
  'Succulents & Cactus',
  'Herbs & Medicinal',
  'Planters & Pots',
  'Soil & Fertilizers',
  'Gardening Tools',
  'Seeds',
  "Today's Deals",
  'New Arrivals',
  'Best Sellers',
  'Gift Plants',
  'Customer Service',
  'Contact Us',
  'About Us',
];


  res.status(200).json({ navItems });
}
