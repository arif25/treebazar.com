

import React from "react";
import CartPage from "./cart";
import Header from "../header/Header";
import Footer from "@/components/Footer";

const page = ()=>{
    return(
        <div>
            <Header />
            <div className="bg-white mt-8 max-w-[1220px] mx-auto">
                <CartPage />
            </div>
            <Footer /> 
        </div>
    )
}

export default page;