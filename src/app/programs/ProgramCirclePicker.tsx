"use client";

import InitLogo from "@/components/InitLogo";
import { Title } from "@/components/Title";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const programs = [
  {
    id: 1,
    name: "Ignite",
    color: "red",
  },
  {
    id: 2,
    name: "Uplift",
    color: "blue",
  },
  {
    id: 3,
    name: "Reach",
    color: "green",
  },
  {
    id: 4,
    name: "Hack",
    color: "yellow",
  },
  {
    id: 5,
    name: "Explore",
    color: "pink",
  },
  {
    id: 6,
    name: "Build",
    color: "orange",
  },
];

const ProgramCirclePicker: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState(programs[0].name);

  const handleProgramClick = (program: (typeof programs)[0]["name"]) => {
    setActiveProgram(program);
  };

  const getRotationAngle = () => {
    const activeIndex = programs.findIndex((p) => p.name === activeProgram);
    return (
      ((activeIndex + programs.length + 3) % programs.length) *
      (360 / programs.length)
    );
  };

  function getPosition(index: number) {
    const left =
      50 + 40 * Math.cos(((index * 360) / programs.length) * (Math.PI / 180));

    const top =
      50 + 40 * Math.sin(((index * 360) / programs.length) * (Math.PI / 180));

    return {
      left: `${left.toFixed(2)}%`,
      top: `${top.toFixed(2)}%`,
    };
  }

  return (
    <div className="relative flex items-center justify-center h-[80vh] w-[80vw] mx-auto">
      <Title>Programs</Title>

      <div
        className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `rotate(-${getRotationAngle()}deg)`,
        }}
      >
        {programs.map(({ id, name, color }, index) => (
          <div
            className={twMerge(
              "absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 "
            )}
            key={name}
            style={getPosition(index)}
            onClick={() => handleProgramClick(name)}
          >
            <svg
              width="221"
              height="167"
              viewBox="0 0 221 167"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color }}
            >
              <path
                d="M182.991 103.641C182.991 143.316 149.42 167 108.217 167C67.0143 167 6.52821e-05 115.183 5.83449e-05 75.507C5.14078e-05 35.8312 102.205 24 143.408 24C184.61 24 182.991 63.9647 182.991 103.641Z"
                fill={`url(#program-blob-primary-${name})`}
              />
              <path
                d="M220.991 79.6406C220.991 119.316 187.42 143 146.217 143C105.014 143 38.0001 91.1828 38.0001 51.507C38.0001 11.8312 140.205 6.27475e-06 181.408 -9.2936e-07C222.61 -8.13347e-06 220.991 39.9647 220.991 79.6406Z"
                fill={`url(#program-blob-alt-${name})`}
              />
              <defs>
                <linearGradient
                  id={`program-blob-primary-${name}`}
                  x1="208.821"
                  y1="150.735"
                  x2="59.6128"
                  y2="150.735"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D9D9D9" />
                  <stop offset="1" stopColor="currentColor" />
                </linearGradient>
                <linearGradient
                  id={`program-blob-alt-${name}`}
                  x1="246.821"
                  y1="126.735"
                  x2="97.6128"
                  y2="126.735"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D9D9D9" stopOpacity="0.53" />
                  <stop offset="1" stopColor="currentColor" />
                </linearGradient>
              </defs>
            </svg>

            <span className="flex gap-2 justify-center mt-2">
              <InitLogo className="w-10" />
              <h1 className="">{name}</h1>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramCirclePicker;
