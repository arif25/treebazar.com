
import Banner from "@/app/home/Banner";
import ProductGrid from "@/app/home/ProductGrid";
import RelatedBanner from "@/app/home/RelatedBanner";
import React from "react";
import HomeHeroBanner from "./homeBanner";  
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BannerList from "./homeBanner";

const HomePage = () =>{
    return(
        <section>
            <Header />
            <HomeHeroBanner />
            {/* <BannerList /> */}



            <ProductGrid />
            <RelatedBanner />
            <Footer />
        </section>
    )
}

export default HomePage;