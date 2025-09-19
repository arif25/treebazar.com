

import React from "react";
import ContactOptions from "./contactus";
import Header from "../header/Header";
import Footer from "@/components/Footer";

const page = () =>{
    return(
        <section>
            <Header />
            <ContactOptions />
            <Footer />
        </section>
    )
}

export default page;