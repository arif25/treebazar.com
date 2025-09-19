import React from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import Header from "../header/Header";
import Footer from "@/components/Footer";

const page = () =>{
    return(
        <section  className="bg-gray-50">
            <Header />
            <PrivacyPolicy />
            <Footer />
        </section>
    )
}

export default page;