import React from "react";
import Image from "next/image";

const Bodybg = () =>{
    return(
        <section className="fixed top-0 left-0 right-0 bottom-0 z-[-1] min-h-screen ">
            <div className="">
                <Image src="./images/bg-gradient-design-01.svg" className="min-h-screen " alt="" width={1920} height={1000} /> 
            </div>
        </section>
    )
}

export default Bodybg;