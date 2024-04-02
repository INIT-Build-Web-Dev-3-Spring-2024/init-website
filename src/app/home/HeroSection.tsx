import Button from "@/components/Button";
import { Title, AnimatedTitle } from "@/components/Title";
import React from "react";
import UpcomingWorkshop from "./(UpcomingWorkshop)";
import GradientBorder from "@/components/GradientBorder";
import Link from "next/link";

const HeroSection = () => {
    return (
        <>
            <Title className="mx-auto max-w-[450px]">
                Your <AnimatedTitle>Tech</AnimatedTitle> Journey is about to
                start
            </Title>
            <div className="h-6"></div>
            <GradientBorder
                className="px-3 py-1 rounded-3xl mx-auto"
                animatedOnHover
            >
                <Link
                    href="https://airtable.com/appkfpQOssQZfmORj/shrNlrSaT073i6fog"
                    className="p-0"
                >
                    Get INIT
                </Link>
            </GradientBorder>
            <div className="h-12"></div>
            <UpcomingWorkshop />
        </>
    );
};

export default HeroSection;
