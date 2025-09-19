
import Footer from "@/components/Footer";
import Header from "../header/Header";
import ProductCard from "./ProductCard";
import Link from "next/link";

type Product = {
  id: number;
  title: string; 
  image: string;
  price: string;
  tag: string;
  shipping: string;
};


const products: Product[] = [ 
// const products = [
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
];

export default function Page() {
  return (
    <>
    <Header />
    <main className="p-4 max-w-7xl mx-auto mt-8">
      <section>
        <h2 className="text-lg font-semibold mb-2">Related to items youve viewed</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {products.map((product) => (
            <div key={product.id} className="min-w-[200px] bg-white">
              <Link href='productdetails'>
                <ProductCard product={product} />     
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <Link href='productdetails' key={i}>
                <ProductCard key={i} product={products[i % products.length]} />
              </Link>
            ))}
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
