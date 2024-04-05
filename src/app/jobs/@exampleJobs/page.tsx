"use client";
import { ReactNode, useState } from "react";
import { Title, AnimatedTitle } from "@/components/Title";
import Text from "@/components/Text";
import JobsCard, { Job } from "./JobsCard";
import CounterComopnent from "./CounterComponent";

interface PageProps {
  exampleJobs: ReactNode;
}

export default function page() {
  const job1: Job = {
    title: "Hello bruh",
    // text: "Participate and learn how to do this and taht with the web or evne building robotics and stuf like that. TECH TECH TECH",
    // salary: "$89K - $100K",
    jobPosition: "Junior-Mid level",
    jobLocation: "Hybrid",
    image: "/assets/images/Amazonlogo.png",
    // companyType: "Tech Company",
    // employeeCount: "40,000 Employess",
    // openApps: true,
    // roleDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius illum perspiciatis impedit nulla aut exercitationem quireprehenderit praesentium. Nisi, possimus qui consequatur officiisvoluptatem architecto. Culpa aliquam iste animi veritatis! Loremipsum dolor sit amet consectetur, adipisicing elit. Eius illumperspiciatis impedit nulla aut exercitationem qui reprehenderit praesentium. Nisi, possimus qui consequatur officiis voluptatem",
    date: "soon",
  };

  return (
    <>
      <h1> Hello </h1>
      {/* small component for the huge paragrpah */}
      <div>
        <Title>
          We're <AnimatedTitle> here </AnimatedTitle> to give you the
          opportunities you are looking for
        </Title>
      </div>

      <JobsCard {...job1} />
    </>
  );
}
