import React from "react";
import HeroSection from "./HeroSection";
import Sponsors from "./(Sponsors)";
import Mission from "./(Mission)";
import Testimonial from "./Testimonial";
import Carousel from "./Carousel";
import Blurb from "./Blurb";
import fetchEvents from "../lib/fetchEvents";

const page = async () => {
  const events = await fetchEvents("", true);
  return (
    <>
      <HeroSection events={events} />
      <Sponsors />
      <Mission />
      <Testimonial />
      <Carousel />
      <Blurb />
    </>
  );
};

export default page;
