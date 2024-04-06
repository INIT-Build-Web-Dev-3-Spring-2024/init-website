"use client";

import Button from "@/components/Button";
import GradientBorder from "@/components/GradientBorder";
import useAutoQueryString from "@/hooks/useAutoQueryString";
import { twMerge } from "tailwind-merge";

interface Props {
  positions: string[];
}

export default function PositionsFilter({
  positions: availablePositions,
}: Props) {
  const [positions, setPositions] = useAutoQueryString("position", {
    isArray: true,
    debounce: 0,
  }) as [Set<string>, (va: string) => unknown];

  return (
    <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-4 max-w-[70%] mx-auto">
      {availablePositions.map((pos) => (
        <GradientBorder
          key={pos}
          className={twMerge(
            "p-0 border border-secondary-gray",
            positions.has(pos) && "border-none"
          )}
          disabled={!positions.has(pos)}
        >
          <Button onClick={() => setPositions(pos)} className={"border-none"}>
            {pos}
          </Button>
        </GradientBorder>
      ))}
    </div>
  );
}
