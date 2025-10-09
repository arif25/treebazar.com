import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const accountdropdown = [
  'My Account',
  'Wishlist',
  'Notification',
  '404',
  'Payment Success',
  'No results',
  'Contact',
  'Sign in',
  'Sign Up', 
];


  res.status(200).json({ accountdropdown });
}
