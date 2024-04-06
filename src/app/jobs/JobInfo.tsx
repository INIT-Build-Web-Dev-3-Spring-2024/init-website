"use client";

import { twMerge } from "tailwind-merge";
import Text from "@/components/Text";
import Image from "next/image";
import SubTitle from "@/components/SubTitle";
import { useEffect, useRef, useState } from "react";

export type Job = {
  title: string;
  description: string;
  salary: string;
  level: string;
  modal: string;
  company: {
    name: string;
    tags: string[];
    logo: string;
  };
};

export default function JobInfo(props: Job) {
  const { title, description, salary, level, modal, company } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(400);

  useEffect(() => {
    setContainerHeight(containerRef.current?.clientHeight || 400);
  }, [containerRef.current?.clientHeight]);

  return (
    <div
      className={twMerge("flex items-center justify-center py-10 px-32")}
      ref={containerRef}
    >
      <div
        className="absolute left-0 w-screen bg-page transition-all ease-in-out duration-500"
        style={{
          top: containerRef.current?.offsetTop,
          height: containerHeight,
        }}
      >
        <div
          className={twMerge(
            "top-0 left-0 w-full h-full",
            "bg-gradient-to-r from-transparent to-primary-yellow/15"
          )}
        />
      </div>

      <div
        className={twMerge(
          "relative flex gap-8 border border-secondary-gray rounded-xl p-5 w-[100%]",
          "bg-gradient-to-b from-page to-page-dark"
        )}
      >
        <div className="w-full">
          <SubTitle className="py-3 text-xl font-2 font-bold">{title}</SubTitle>
          <Text className="py-3">{description}</Text>
          <Text className="bg-green-600  py-2 px-4 w-fit rounded-md">
            {salary}
          </Text>
          <Text className="py-3">{level}</Text>
          <Text className="py-3">{modal}</Text>
        </div>

        <div className="w-0.5 self-stretch bg-secondary-gray" />

        <div className="w-full">
          <div className="relative w-24 h-24">
            <Image
              src={company.logo}
              alt="logo"
              className="object-contain"
              fill
            />
          </div>

          <SubTitle className="py-3">{company.name}</SubTitle>

          <div className="flex gap-2">
            {company.tags.map((tag) => (
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
  );
}
