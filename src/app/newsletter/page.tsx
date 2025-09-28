
import Header from "@/components/header/Header";
import FashionBanner from "./FashionBanner";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
        <Header />
        <main>
            <FashionBanner />
        </main>
        <Footer />
    </>
  );
}
