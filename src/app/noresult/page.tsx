
import React from "react";
import NoResultsPage from "./no-results";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const page = () =>{
    return(
        <>
        <Header />
        <section>
            <NoResultsPage />   
        </section>
        <Footer />
        </>
    )
}

export default page; 