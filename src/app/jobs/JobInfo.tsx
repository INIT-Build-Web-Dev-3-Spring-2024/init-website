"use client";

import { twMerge } from "tailwind-merge";
import Text from "@/components/Text";
import Image from "next/image";
import SubTitle from "@/components/SubTitle";
import Qualifications from "./Qualifications";
import { useState } from "react";
import GradientBorder from "@/components/GradientBorder";
import Link from "next/link";

export type Job = {
  id: number;
  title: string;
  description: string;
  roleDescription: string;
  salary: string;
  level: string;
  modal: string;
  company: {
    name: string;
    tags: string[];
    logo: string;
  };
  startDate?: string;
};

export default function JobInfo({ jobs }: { jobs: Job[] }) {
  const [jobIdx, setJobIdx] = useState(0);

  return (
    <div >
      <div
        className={twMerge(
          "relative flex items-center justify-center py-10 px-32 mb-10 max-sm:px-12"
        )}
      >
        <div className="absolute top-0 bottom-0 w-screen bg-page transition-all ease-in-out duration-500">
          <div
            className={twMerge(
              "top-0 left-0 w-full h-full",
              "bg-gradient-to-r from-transparent to-primary-yellow/15"
            )}
          />
        </div>

        <div
          className={twMerge(
            "relative flex gap-8 border border-secondary-gray rounded-xl p-5 w-[100%] max-sm:flex-col",
            "bg-gradient-to-b from-page to-page-dark"
          )}
        >
          <div className="w-full">
            <SubTitle className="py-3 text-xl font-2 font-bold">
              {jobs[jobIdx].title}
            </SubTitle>
            <Text className="py-3">{jobs[jobIdx].description}</Text>
            <Text className="bg-green-600  py-2 px-4 w-fit rounded-md">
              {jobs[jobIdx].salary}
            </Text>
            <Text className="py-3">{jobs[jobIdx].level}</Text>
            <Text className="py-3">{jobs[jobIdx].modal}</Text>
          </div>

          <div className="w-0.5 self-stretch bg-secondary-gray max-sm:w-full max-sm:h-0.5" />

          <div className="w-full flex flex-col items-center">
            <div className="relative w-24 h-24">
              <Image
                src={jobs[jobIdx].company.logo}
                alt="logo"
                className="object-contain"
                fill
              />
            </div>

            <SubTitle className="py-3">{jobs[jobIdx].company.name}</SubTitle>

            <div className="flex gap-2">
              {jobs[jobIdx].company.tags.map((tag) => (
                <div
                  key={tag}
                  className="border border-secondary-gray px-3 py-2 w-fit rounded-md"
                >
                  {tag}
                </div>
              ))}
            </div>

            <div className="mt-3 py-3 px-3 bg-green-600 justify-center rounded-md flex ">
              Open for Applications
            </div>
          </div>
        </div>
      </div>

      <Qualifications jobs={jobs} setJobIdx={setJobIdx} />

      <GradientBorder
        className="mt-16 relative w-[80%] mx-auto text-center mb-32"
        animatedOnHover
      >
        <SubTitle>
          <Link href="#">Apply</Link>
        </SubTitle>

        <div
          className={twMerge(
            "absolute w-screen h-screen -translate-y-56 -right-[80%] -z-50 max-sm:translate-y-0 max-sm:right-0",
            "bg-gradient-radial from-secondary-yellow/10 to-transparent to-70%"
          )}
        />
      </GradientBorder>
    </div>
  );
}
