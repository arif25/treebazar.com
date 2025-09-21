
import React from "react";
import Profile from "./Profile";
import Header from "../header/Header";
import Footer from "@/app/footer/Footer";
import Bodybg from "../assets/bodybg";

const page = () => {
    return(
        <>
            <Bodybg />
            <section className="">
                <Header />
                <Profile />
                <Footer />
            </section>
        </>
    )
}

export default page;