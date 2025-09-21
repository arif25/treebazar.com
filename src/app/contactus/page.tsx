

import React from "react";
import ContactOptions from "./contactus";
import Header from "../header/Header";
import Footer from "@/app/footer/Footer";

const page = () =>{
    return(
        <section>
            <Header />
            <div className="min-h-[500px]">
                <ContactOptions />
            </div>
            <Footer />
        </section>
    )
}

export default page;