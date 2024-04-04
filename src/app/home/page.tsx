import React from "react";
import HeroSection from "./HeroSection";
import Sponsors from "./(Sponsors)";
import Mission from "./(Mission)";
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
      <Carousel />
      <Blurb />
    </>
  );
};

export default page;
