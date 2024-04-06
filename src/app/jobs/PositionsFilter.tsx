"use client";

import Button from "@/components/Button";
import GradientBorder from "@/components/GradientBorder";
import useAutoQueryString from "@/hooks/useAutoQueryString";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const availablePositions = [
  "DevOps Engineer",
  "UI/UX Engineer",
  "Software Engineer (SWE)",
  "Back-end Developer",
  "Full-Stack Developer",
  "Product Manager",
  "Product Designer",
  "Marketing Coordinator",
  "Social Media Marketer",
];

export default function PositionsFilter() {
  const [positions, setPositions] = useAutoQueryString("postion", {
    isArray: true,
    debounce: 0,
  }) as [Set<string>, (va: string) => unknown];

  useEffect(() => {
    console.log(positions);
  }, [positions]);

  return (
    <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-4 max-w-[70%] mx-auto">
      {availablePositions.map((pos) => (
        <GradientBorder
          key={pos}
          className="p-0"
          disabled={!positions.has(pos)}
        >
          <Button
            onClick={() => setPositions(pos)}
            className={twMerge(positions.has(pos) && "border-transparent")}
          >
            {pos}
          </Button>
        </GradientBorder>
      ))}
    </div>
  );
}
