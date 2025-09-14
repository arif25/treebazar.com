// app/page.tsx

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import RelatedBanner from "@/components/RelatedBanner";

// Metadata for the page, including the favicon
export const metadata = {
  title: "Tree Bazar",
  description: "Welcome to Tree Bazar",
  icons: {
    icon: "/favicon-2.ico",
  },
};

export default function Home() {
  return (
    <div className="font-sans grid justify-items-center min-h-screen bg-[#f5f5f5]">
      <main className="flex flex-col w-full max-w-7xl">
        <Header />
        <Banner />
        <ProductGrid />
        <RelatedBanner />
        <Footer />
      </main>
    </div>
  );
}
