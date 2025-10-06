import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const navItems = [
    'All',
    'Home',
    'Sell',
    "Today's deal", 
    'Customer service',
    'Fresh',
    'FOX B',
    'shera plants',
    'Yuccabe planters',
    'fox a planters',
  ];

  res.status(200).json({ navItems });
}
