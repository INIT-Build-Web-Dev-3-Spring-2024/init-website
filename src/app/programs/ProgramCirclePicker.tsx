"use client";

import InitLogo from "@/components/InitLogo";
import SubTitle from "@/components/SubTitle";
import { Title } from "@/components/Title";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import tailwindConfig from "@/root/tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const twConfig = resolveConfig(tailwindConfig);

const programs = [
  {
    id: 1,
    name: "Build",
  },
  {
    id: 2,
    name: "Ignite",
  },
  {
    id: 3,
    name: "Uplift",
  },
  {
    id: 4,
    name: "Reach",
  },
  {
    id: 5,
    name: "Hack",
  },
  {
    id: 6,
    name: "Explore",
  },
];

const ProgramCirclePicker: React.FC = () => {
  const [currentView, setCurrentView] = useLocalStorage("view");
  const [activeProgramIndex, setActiveProgramIndex] = useState(0);

  useEffect(() => {
    setActiveProgramIndex(
      programs.findIndex(({ name }) => currentView === name)
    );
  }, [currentView]);

  const handleProgramClick = (name: string) => {
    setCurrentView(name);
  };

  function getPosition(index: number) {
    const angle =
      (((index - activeProgramIndex + 3) * 360) / programs.length) *
      (Math.PI / 180);
    const radius = 40;
    const center = 50;

    const left = center + radius * Math.cos(angle);
    const top = center + radius * Math.sin(angle);

    return {
      left: `${left.toFixed(2)}%`,
      top: `${top.toFixed(2)}%`,
    };
  }

  function getColor(program: string) {
    const programName = program as keyof typeof twConfig.theme.colors.program; // so typescript can stop
    return twConfig.theme.colors.program[programName];
  }

  return (
    <div className="relative flex items-center justify-center w-[90%] h-[70vh] mx-auto mt-5">
      <Title>Programs</Title>

      <div className="absolute top-0 right-0 w-full h-full">
        {programs.map(({ name }, index) => (
          <div
            key={name}
            style={getPosition(index)}
            onClick={() => handleProgramClick(name)}
            className={twMerge(
              "absolute cursor-pointer transition-all duration-500 ease-in-out -translate-x-1/2 -translate-y-1/2",
              activeProgramIndex === index ? "z-10" : "z-0"
            )}
          >
            <svg
              width="221"
              height="167"
              viewBox="0 0 221 167"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: getColor(name.toLowerCase()) }}
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

            <span className="flex gap-2 justify-center items-center mt-2">
              <InitLogo className="w-9" />
              <SubTitle>
                <span style={{ color: getColor(name.toLowerCase()) }}>
                  {name}
                </span>
              </SubTitle>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramCirclePicker;
