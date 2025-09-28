
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import TestimonialCarousel from "./Testimonial";

export default function Home() {
  return (
    <>
        <Header />
        <main>
            <TestimonialCarousel />
        </main>
        <Footer />
    </>
  );
}
