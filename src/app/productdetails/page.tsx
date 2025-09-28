// pages/index.tsx

import Header from "@/components/header/Header";
import ProductList from "./customerviewed/ProductList";
import FrequentlyBoughtTogether from "./FrequentlyBroughtTogether";
import ProductDetails from "./ProductDetails";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import Footer from "@/components/footer/Footer";


export default function Page() {
  return (
    <main className="max-w-full mx-auto">
      <Header />
      <div className="max-w-[1220px] bg-white mx-auto flex flex-col md:flex-row gap-6 mt-10">
        <ProductGallery />
        <ProductInfo />
      </div>
      <div className="max-w-[1220px] mx-auto bg-white pt-4 mt-8">
        <ProductDetails />
        <FrequentlyBoughtTogether />
        <ProductList />
      </div>
      <Footer />
    </main>
  );
}
