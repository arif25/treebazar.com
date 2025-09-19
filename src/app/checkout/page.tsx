
import React from "react";
import CheckoutPage from "./Checkout";
import ReviewSection from "./Review";
import Header from "../header/Header";
import Footer from "@/components/Footer";
import Bodybg from "../assets/bodybg";

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