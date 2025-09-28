
import React from "react";
import Custom404 from "./404";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const page = () =>{
    return(
        <div>
            <Header />
            <Custom404 />
            <Footer />
        </div>
    )
}

export default page;