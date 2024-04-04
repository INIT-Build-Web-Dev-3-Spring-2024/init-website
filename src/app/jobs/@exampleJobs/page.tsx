"use client";
import { ReactNode, useState } from "react";
import { Title, AnimatedTitle } from "@/components/Title";
import Text from "@/components/Text";
import JobsCard from "./JobsCard";

interface PageProps {
  exampleJobs: ReactNode;
}

export default function page() {


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

      <JobsCard/> 
    </>
  ) 
}
