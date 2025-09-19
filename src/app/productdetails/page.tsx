// pages/index.tsx

import Footer from "@/components/Footer";
import Header from "../header/Header";
import ProductList from "./customerviewed/ProductList";
import FrequentlyBoughtTogether from "./FrequentlyBroughtTogether";
import ProductDetails from "./ProductDetails";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";


export default function Page() {
  return (
    <main className="max-w-full mx-auto px-4">
      <Header />
      <div className="max-w-[1220px] mx-auto flex flex-col md:flex-row gap-6">
        <ProductGallery />
        <ProductInfo />
        <ProductDetails />
        <FrequentlyBoughtTogether />
        <ProductList />
      </div>
      <Footer />
    </main>
  );
}
