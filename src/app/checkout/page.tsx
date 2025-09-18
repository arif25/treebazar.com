
import React from "react";
import CheckoutPage from "./Checkout";
import ReviewSection from "./Review";
import Header from "../header/Header";
import Footer from "@/components/Footer";

const page = () =>{
    return(
        <section className="bg-gray-50">
            <Header />
            <CheckoutPage />
            <ReviewSection />
            <Footer />
        </section>
    )
}

export default page;