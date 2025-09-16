// components/FrequentlyBoughtTogether.tsx
import Image from 'next/image';

type Product = {
  id: number;
  imageUrl: string;
  price: number;
  label: string;
};

const products: Product[] = [
  {
    id: 1,
    imageUrl: '/images/product-item.jpg',
    price: 299,
    label: 'Limited time deal',
  },
  {
    id: 2,
    imageUrl: '/images/product-item.jpg',
    price: 299,
    label: 'Limited time deal',
  },
  {
    id: 3,
    imageUrl: '/images/product-item.jpg',
    price: 299,
    label: 'Limited time deal',
  },
  {
    id: 4,
    imageUrl: '/images/product-item.jpg',
    price: 299,
    label: 'Limited time deal',
  },
  {
    id: 5,
    imageUrl: '/images/product-item.jpg',
    price: 299,
    label: 'Limited time deal',
  },
];

export default function FrequentlyBoughtTogether() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Frequently bought together</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded shadow-sm overflow-hidden"
          >
            <div className="relative w-full h-48 bg-gray-100">
              <Image
                src={product.imageUrl}
                alt={`Plant ${product.id}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-2">
              <span className="text-sm bg-red-600 text-white px-2 py-1 rounded">
                {product.label}
              </span>
              <p className="mt-2 font-semibold">₹ {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
