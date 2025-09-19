import React from "react";
import Terms from "./termsandconditions";
import Header from "../header/Header";
import Footer from "@/components/Footer";

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