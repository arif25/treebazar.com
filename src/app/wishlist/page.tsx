
import Header from "@/components/header/Header";
import WishlistItem from "./WishlistItem";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

const wishlistData = [
  {
    image: 'images/product-item.jpg', // Place images in public folder
    title: 'Bata Office Wear Shoes Slip On For Men',
    price: 786,
    originalPrice: 899,
    discount: 12,
    available: false,
    assured: true,
  },
  {
    image: 'images/product-item.jpg',
    title: 'Janasya Women Printed Flared Kurta',
    price: 583,
    originalPrice: 1899,
    discount: 69,
    available: false,
    assured: true,
  },
  {
    image: 'images/product-item.jpg', // Place images in public folder
    title: 'Bata Office Wear Shoes Slip On For Men',
    price: 786,
    originalPrice: 899,
    discount: 12,
    available: false,
    assured: true,
  },
  {
    image: 'images/product-item.jpg',
    title: 'Janasya Women Printed Flared Kurta',
    price: 583,
    originalPrice: 1899,
    discount: 69,
    available: false,
    assured: true,
  },
];

export default function WishlistPage() {
  return (
    <>
    <Header />
    <div className="max-w-2xl mx-auto my-8 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold border-b p-4">My Wishlist ({wishlistData.length})</h2>
      {wishlistData.map((item, idx) => (
        <WishlistItem key={idx} {...item} />
      ))}
    </div>
    <Footer />
    </>
  );
}
