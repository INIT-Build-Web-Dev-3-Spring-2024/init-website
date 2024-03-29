import Button from "@/components/Button";
import { Title, AnimatedTitle } from "@/components/Title";
import React from "react";
import UpcomingWorkshop from "./(UpcomingWorkshop)";

const HeroSection = () => {
    return (
        <>
            <Title className="mx-auto max-w-[450px]">
                Your <AnimatedTitle>Tech</AnimatedTitle> Journey is about to
                start
            </Title>
            <div className="h-6"></div>
            <Button
                className="mx-auto rounded-xl"
                gradientBorder
                href="https://google.com"
            >
                Get INIT
            </Button>
            <div className="h-12"></div>
            <UpcomingWorkshop />
        </>
    );
};

export default HeroSection;
