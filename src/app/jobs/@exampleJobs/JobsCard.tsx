"use client";
import { ReactNode, useState } from "react";
import { Title, AnimatedTitle } from "@/components/Title";
import Text from "@/components/Text";
import { twMerge } from "tailwind-merge";

export type Job = {
  title: string;
  // text: string;
  // salary: string;
  jobLocation: string;
  image: string;
  // companyType: string;
  // employeeCount: string;
  // openApps: boolean;
  // roleDescription: string;
  jobPosition: string;
  date: string;
};

export default function JobsCard(props: Job) {
  // // text,
  // salary,
  // companyType,
  // employeeCount,
  const {
    title,
    // text,
    // salary,
    image,
    // companyType,
    // employeeCount,
    // openApps,
    // roleDescription,
    jobPosition,
    jobLocation,
    date,
  } = props;

  const [jobCard, setJobCard] = useState(true);
  // const [counter, setCounter] = useState(count)

  function changeJob() {
    setJobCard(false);
  }
  function changeDescription() {
    setJobCard(true);
  }

  return (
    <div
      className={twMerge(
        "flex items-center justify-center py-10 px-32 border-y border-secondary-gray",
        "bg-gradient-radial from-page to-95% to-primary-purple"
      )}
    >
      <div
        className={twMerge(
          "relative flex gap-8 border border-secondary-gray rounded-xl p-5 w-[80vw]",
          "bg-gradient-to-b from-page to-page-dark"
        )}
      >
        <div className="w-full">
          <h1 className=" py-3 text-xl font-2 font-bold">{title}</h1>

          <Text className="py-3">
            {/* This is where text is supposed to gO, not in DATA!!!!! */}
            Participate and learn how to do this and taht with the web or evne
            building robotics and stuf like that. TECH TECH TECH
          </Text>

          <div className=" bg-green-600  py-2 px-4 w-fit rounded-md">
            {/* Where salary is supposed ot go, not in Data!!!!!!! */}
            $89K - $100K
          </div>

          <Text className="py-3">{jobPosition}</Text>

          <Text className="py-3">{jobLocation}</Text>
        </div>

        <div className="w-0.5 self-stretch bg-secondary-gray" />

        <div className="w-full">
          <img src={image} alt="logo" className="py-3 h-20 w-15" />

          <h1 className="py-3">
            {/* Where companyType is supposed to go, no DATA!!!!!!!!!!!!!!!!! */}
            Tech Company
          </h1>

          <h1 className="py-3">
            {/* Where employee cound ti suppsoed to go, no DATA!!!!!!!!! */}
            40,000 Employess
          </h1>

          <div className=" flex gap-2">
            <div className="border border-secondary-gray px-3 py-2 w-fit rounded-md">
              B2B
            </div>
            <div className="border border-secondary-gray px-3 py-2 w-fit rounded-md">
              SAAS
            </div>
            <div className="border border-secondary-gray px-3 py-2 w-fit rounded-md">
              Internal Tools
            </div>
          </div>
          <div className="mt-3 py-3 px-3 bg-green-600 justify-center rounded-md flex ">
            Open for Applications
          </div>
        </div>
      </div>
    </div>
  );
}
