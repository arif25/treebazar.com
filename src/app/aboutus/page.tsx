
import React from "react";
import AboutUs from "./Aboutus";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const page = () =>{
    return(
        <section>
            <Header />
            <AboutUs />
            <Footer />
        </section>
    )
}

export default page;