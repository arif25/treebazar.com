import type { NextApiRequest, NextApiResponse } from 'next';

export interface ProductItem {
  id: number;
  title: string;
  image: string;
  price: string;
  tag: string;
  shipping: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const featuredProducts: ProductItem[] = [
    {
      id: 1,
      title: 'Indoor Plants for Living Room Decoration',
      image: '/images/product-item.jpg',
      price: '1,049',
      tag: 'PLANT SET OF 3 (10 Inch)',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
    {
      id: 2,
      title: 'ZZ Plant for Office Desk or Home',
      image: '/images/product-item.jpg',
      price: '1,299',
      tag: 'PLANT SET OF 2',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
    {
      id: 3,
      title: 'Indoor Plants for Living Room Decoration',
      image: '/images/product-item.jpg',
      price: '1,049',
      tag: 'PLANT SET OF 3 (10 Inch)',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
    {
      id: 4,
      title: 'ZZ Plant for Office Desk or Home',
      image: '/images/product-item.jpg',
      price: '1,299',
      tag: 'PLANT SET OF 2',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
    {
      id: 5,
      title: 'Indoor Plants for Living Room Decoration',
      image: '/images/product-item.jpg',
      price: '1,049',
      tag: 'PLANT SET OF 3 (10 Inch)',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
    {
      id: 6,
      title: 'ZZ Plant for Office Desk or Home',
      image: '/images/product-item.jpg',
      price: '1,299',
      tag: 'PLANT SET OF 2',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
    {
      id: 7,
      title: 'Indoor Plants for Living Room Decoration',
      image: '/images/product-item.jpg',
      price: '1,049',
      tag: 'PLANT SET OF 3 (10 Inch)',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
    {
      id: 8,
      title: 'ZZ Plant for Office Desk or Home',
      image: '/images/product-item.jpg',
      price: '1,299',
      tag: 'PLANT SET OF 2',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
  ];

  const recommendedProducts: ProductItem[] = [
    {
      id: 1,
      title: 'Indoor Plants for Living Room Decoration',
      image: '/images/product-item.jpg',
      price: '1,049',
      tag: 'PLANT SET OF 3 (10 Inch)',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
    {
      id: 2,
      title: 'ZZ Plant for Office Desk or Home',
      image: '/images/product-item.jpg',
      price: '1,299',
      tag: 'PLANT SET OF 2',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
    {
      id: 3,
      title: 'Indoor Plants for Living Room Decoration',
      image: '/images/product-item.jpg',
      price: '1,049',
      tag: 'PLANT SET OF 3 (10 Inch)',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
    {
      id: 4,
      title: 'ZZ Plant for Office Desk or Home',
      image: '/images/product-item.jpg',
      price: '1,299',
      tag: 'PLANT SET OF 2',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
    {
      id: 5,
      title: 'Indoor Plants for Living Room Decoration',
      image: '/images/product-item.jpg',
      price: '1,049',
      tag: 'PLANT SET OF 3 (10 Inch)',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
    {
      id: 6,
      title: 'ZZ Plant for Office Desk or Home',
      image: '/images/product-item.jpg',
      price: '1,299',
      tag: 'PLANT SET OF 2',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
    {
      id: 7,
      title: 'Indoor Plants for Living Room Decoration',
      image: '/images/product-item.jpg',
      price: '1,049',
      tag: 'PLANT SET OF 3 (10 Inch)',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
    {
      id: 8,
      title: 'ZZ Plant for Office Desk or Home',
      image: '/images/product-item.jpg',
      price: '1,299',
      tag: 'PLANT SET OF 2',
      shipping: 'FREE delivery Sep 15 - Sep 18',
    },
  ];

  res.status(200).json({
    featuredProducts,
    recommendedProducts,
  });
}
