import Banner from "@/components/Banner";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import RelatedBanner from "@/components/RelatedBanner";

export default function Home() {
  return (
    <div className="font-sans grid justify-items-center min-h-screen bg-[#f5f5f5]">
      <main className="flex flex-col">
        <Header />
        <Banner />
        <ProductGrid />
        <RelatedBanner />
        <Footer />
      </main>
    </div>
  );
}
