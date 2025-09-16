import Image from 'next/image';
import Link from 'next/link';

const products = [
  { id: 1, title: 'Revamp your home in style', img: '/images/product-item.jpg' },
  { id: 2, title: 'Revamp your home in style', img: '/images/product-item.jpg' },
  { id: 3, title: 'Revamp your home in style', img: '/images/product-item.jpg' },
  { id: 4, title: 'Revamp your home in style', img: '/images/product-item.jpg' },
  { id: 5, title: 'Revamp your home in style', img: '/images/product-item.jpg' },
  { id: 6, title: 'Revamp your home in style', img: '/images/product-item.jpg' }, 
  { id: 7, title: 'Revamp your home in style', img: '/images/product-item.jpg' },
  { id: 8, title: 'Revamp your home in style', img: '/images/product-item.jpg' },
];

const ProductGrid = () => {
  return (
    <section className="w-[1220px] mx-auto mt-8 ">
      <h3 className="text-xl font-semibold mb-4">Revamp your home in style</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded shadow hover:shadow-lg transition p-4">
          <Link href='./productdetails'>
            <Image
              src={product.img}
              alt={product.title}
              width={300}
              height={200}
              className="rounded"
            />
            <h4 className="mt-2 text-gray-800">{product.title}</h4>
            <button className="mt-2 text-green-600 text-sm">See all offers</button>
          </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
