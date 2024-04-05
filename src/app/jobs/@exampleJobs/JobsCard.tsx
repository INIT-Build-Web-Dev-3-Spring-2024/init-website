"use client";
import { ReactNode, useState } from "react";
import { Title, AnimatedTitle } from "@/components/Title";
import Text from "@/components/Text";

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
    <>
      {/* Component for each inidivdual job tldr */}

      {jobCard && (
        <div
          onClick={changeJob}
          className="flex  border border-secondary-gray rounded-xl p-3 hover:cursor-pointer"
        >
          <div className="w-1/2 pl-6 pr-2">
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

          <div className="flex">
            <div className="inline-block w-0.5 self-stretch bg-secondary-gray"></div>
          </div>

          <div className="pl-8">
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
            {/* Can't apply since boolean not in data! */}
            {/* {openApps && (
            <div className="mt-3 py-3 px-3 bg-green-600 justify-center rounded-md flex ">
              Open for Applications
            </div>
            )
            }
            {!openApps && (
            <div className="mt-3 py-3 px-3 bg-green-600 justify-center rounded-md flex ">
              Closed for Applications
            </div>
            )
            } */}
          </div>
        </div>
      )}

      {/* Component for Job description and stuff */}
      {!jobCard && (
        <div
          onClick={changeDescription}
          className="flex border border-secondary-gray px-10 pt-10 pb-20 rounded-xl mt-5 hover:cursor-pointer"
        >
          <div className="">
            <h1 className="text-xl font-2 font-bold"> Role </h1>
            <h2 className="mb-5"> Who you are </h2>
            <Text>
              {/* Role descrpition, NOt in DATA!!!!!!! */}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              illum perspiciatis impedit nulla aut exercitationem
              quireprehenderit praesentium. Nisi, possimus qui consequatur
              officiisvoluptatem architecto. Culpa aliquam iste animi veritatis!
              Loremipsum dolor sit amet consectetur, adipisicing elit. Eius
              illumperspiciatis impedit nulla aut exercitationem qui
              reprehenderit praesentium. Nisi, possimus qui consequatur officiis
              voluptatem
            </Text>
            <h2 className="mt-2">Start Date: {date} </h2>
          </div>

          <div></div>
        </div>
      )}
    </>
  );
}
