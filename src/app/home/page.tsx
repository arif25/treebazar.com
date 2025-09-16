
import Banner from "@/app/home/Banner";
import Footer from "@/components/Footer";
import Header from "@/app/header/Header";
import ProductGrid from "@/app/home/ProductGrid";
import RelatedBanner from "@/app/home/RelatedBanner";
import React from "react";

const HomePage = () =>{
    return(
        <section>
            <Header />
            <Banner />
            <ProductGrid />
            <RelatedBanner />
            <Footer />
        </section>
    )
}

export default HomePage;