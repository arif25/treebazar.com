import React from "react";
import Terms from "./termsandconditions";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const page = () =>{
    return(
        <section className="bg-gray-50">
            <Header />
            <Terms />
            <Footer />
        </section>
    )
}

export default page;