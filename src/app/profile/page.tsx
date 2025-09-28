
import React from "react";
import Profile from "./Profile";
import Bodybg from "../assets/bodybg";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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