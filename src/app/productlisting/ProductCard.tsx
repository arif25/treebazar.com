import Image from 'next/image';

type Product = {
  id: number;
  title: string; 
  // image: '/images/product-item.jpg';
  image: string;
  price: string;
  tag: string;
  shipping: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-[#ccc] bg-white rounded-md p-4 shadow-sm hover:shadow-md transition">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="object-cover w-full h-60 rounded" 
      />
      <h2 className="mt-2 text-sm font-medium">{product.title}</h2>
      <p className="text-xs text-red-600 font-semibold mt-1">{product.tag}</p>
      <p className="text-sm font-bold mt-1">₹ {product.price}</p>
      <p className="text-xs text-gray-500">{product.shipping}</p>
    </div>
  );
}
