"use client";
import Button from "@/components/Button";
import { Title, AnimatedTitle } from "@/components/Title";
import React from "react";
import UpcomingWorkshop from "./(UpcomingWorkshop)";
import LiveEventsParent from "@/app/home/(LiveEvents)/LiveEventsParent";
import { Event } from "@/components/EventCard";

interface HeroProps {
  events: any;
}
const HeroSection = (props: HeroProps) => {
  return (
    <>
      <Title className="mx-auto max-w-[450px]">
        Your <AnimatedTitle>Tech</AnimatedTitle> Journey is about to start
      </Title>
      <div className="h-6"></div>
      <Button
        className="mx-auto rounded-xl"
        borderGradient={"always"}
        href="https://google.com"
      >
        Get INIT
      </Button>
      {/* <div className="h-12"></div> */}
      <LiveEventsParent events={props.events} />
      <UpcomingWorkshop />
    </>
  );
};

export default HeroSection;