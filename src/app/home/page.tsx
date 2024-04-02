import React from "react";
import HeroSection from "./HeroSection";
import Sponsors from "./(Sponsors)";
import Mission from "./Mission";
import Testimonial from "./Testimonial";
import Carousel from "./Carousel";
import Blurb from "./Blurb";

const page = () => {
    return (
        <>
            <HeroSection />
            <Sponsors />
            <Mission />
            <Testimonial />
            <div className="mx-0 mt-10 mb-10"><Carousel/></div>
            
            <Blurb />
        </>
    );
};

export default page;
