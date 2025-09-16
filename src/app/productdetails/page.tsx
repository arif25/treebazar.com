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
    <main className="max-w-6xl mx-auto px-4">
      <Header />
      <div className="flex flex-col md:flex-row gap-6">
        <ProductGallery />
        <ProductInfo />
      </div>
      <ProductDetails />
      <FrequentlyBoughtTogether />
      <ProductList />
      <Footer />
    </main>
  );
}
