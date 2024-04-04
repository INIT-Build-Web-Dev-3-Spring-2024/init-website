"use client";
import { ReactNode, useState } from "react";
import { Title, AnimatedTitle } from "@/components/Title";
import Text from "@/components/Text";

export type Job = {
  title: string,
  text: string,
  salary: string,
  level: string,
  modality: string,
  logo: string,
  companyKind: string,
  emplyeeCount: string
  openApps: boolean
  roleDescription: string
};

export default function JobsCard(props: Job) {
  const {
    title,
    text,
    salary,
    level,
    modality,
    logo,
    companyKind,
    emplyeeCount,
    openApps,
    roleDescription,
  } = props;


  const [jobCard, setJobCard] = useState(true);

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
            <h1 className=" py-3 text-xl font-2 font-bold">
              Front-end Software Engineer
            </h1>

            <Text className="py-3">
              Participate and learn how to do this and taht with the web or evne
              building robotics and stuf like that. TECH TECH TECH
            </Text>

            <div className=" bg-green-600  py-2 px-4 w-fit rounded-md">
              $89K - $100K
            </div>

            <Text className="py-3">Junior-Mid level</Text>

            <Text className="py-3">Hybrid</Text>
          </div>

          <div className="flex">
            <div className="inline-block w-0.5 self-stretch bg-secondary-gray"></div>
          </div>

          <div className="pl-8">
            <img
              src="/assets/images/Amazonlogo.png"
              alt="logo"
              className="py-3 h-20 w-15"
            />

            <h1 className="py-3"> Tech company </h1>

            <h1 className="py-3"> 40,000 Employess </h1>

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
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              illum perspiciatis impedit nulla aut exercitationem qui
              reprehenderit praesentium. Nisi, possimus qui consequatur officiis
              voluptatem architecto. Culpa aliquam iste animi veritatis! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Eius illum
              perspiciatis impedit nulla aut exercitationem qui reprehenderit
              praesentium. Nisi, possimus qui consequatur officiis voluptatem
              architecto. Culpa aliquam iste animi veritatis! Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Eius illum perspiciatis
              impedit nulla aut exercitationem qui reprehenderit praesentium.
              Nisi, possimus qui consequatur officiis voluptatem architecto.
              Culpa aliquam iste animi veritatis! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Eius illum perspiciatis impedit
              nulla aut exercitationem qui reprehenderit praesentium. Nisi,
              possimus qui consequatur officiis voluptatem architecto. Culpa
              aliquam iste animi veritatis! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Eius illum perspiciatis impedit
              nulla aut exercitationem qui reprehenderit praesentium. Nisi,
              possimus qui consequatur officiis voluptatem architecto. Culpa
              aliquam iste animi veritatis! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Eius illum perspiciatis impedit
              nulla aut exercitationem qui reprehenderit praesentium. Nisi,
              possimus qui consequatur officiis voluptatem architecto. Culpa
              aliquam iste animi veritatis!{" "}
            </Text>
          </div>

          <div></div>
        </div>
      )}
    </>
  );
}
