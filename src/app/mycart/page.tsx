

import React from "react";
import CartPage from "./cart";
import Header from "../header/Header";
import Footer from "@/components/Footer";

const page = ()=>{
    return(
        <div>
            <Header />
            <CartPage />
            <Footer />
        </div>
    )
}

export default page;