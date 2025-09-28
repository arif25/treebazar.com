
import React from "react";
import CheckoutPage from "./Checkout";
import ReviewSection from "./Review";
import Bodybg from "../assets/bodybg";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const page = () =>{
    return(
        <>
        <Bodybg />
        <section className="">
            <Header />
            <CheckoutPage />
            <ReviewSection />
            <Footer />
        </section>
        </>
    )
}

export default page;