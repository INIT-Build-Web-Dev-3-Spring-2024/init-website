import React from "react";
import HeroSection from "./HeroSection";
import Sponsors from "./(Sponsors)";
import Mission from "./(Mission)";
import Testimonials from "./(Testimonials)";
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
      <Testimonials />
      <Carousel />
      <Blurb />
    </>
  );
};

export default page;
