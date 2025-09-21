
import Banner from "@/app/home/Banner";
import Footer from "@/app/footer/Footer";
import Header from "@/app/header/Header";
import ProductGrid from "@/app/home/ProductGrid";
import RelatedBanner from "@/app/home/RelatedBanner";
import React from "react";
import HomeHeroBanner from "./homeBanner";

const HomePage = () =>{
    return(
        <section>
            <Header />
            <HomeHeroBanner />
            {/* <Banner /> */}
            <ProductGrid />
            <RelatedBanner />
            <Footer />
        </section>
    )
}

export default HomePage;