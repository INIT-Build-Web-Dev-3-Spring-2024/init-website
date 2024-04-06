"use client";

import Button from "@/components/Button";
import GradientBorder from "@/components/GradientBorder";
import SubTitle from "@/components/SubTitle";
import Image from "next/image";
import { useMemo } from "react";

interface ProjectCardProps {
  name: string;
  lead: string;
  tools: string[];
  images: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
  const { name, lead, tools, images } = props;

  function randInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const [projectName, projectDifficulty] = useMemo(() => {
    const pattern = /^([\w\s]+)[\s\(]?([\w\s]+)?\)?/;

    return pattern.exec(name)!.slice(1, 3);
  }, [name]);

  return (
    <GradientBorder key={name} className="w-96 p-0" animatedOnHover>
      <div className="relative w-full h-36">
        <Image
          src={
            images[randInt(0, images.length - 1)] ||
            "/assets/images/programs/build/code-fallback-image.png"
          }
          alt={name}
          fill
          className="w-auto h-auto object-cover"
        />
      </div>
      <div className="p-4">
        <div className="mb-5">
          <div className="mb-2">
            <SubTitle>{projectName}</SubTitle>
            <SubTitle>{projectDifficulty}</SubTitle>
          </div>
          <SubTitle className="text-lg font-normal opacity-50">{lead}</SubTitle>
        </div>

        <div className={"flex items-center overflow-x-scroll pb-2 no-srollbar"}>
          {tools.map((tool) => (
            <Button
              key={tool}
              onClick={() => {}}
              className="py-px z-10 whitespace-pre active:translate-y-0 cursor-default"
            >
              {tool}
            </Button>
          ))}
        </div>
      </div>
    </GradientBorder>
  );
}
