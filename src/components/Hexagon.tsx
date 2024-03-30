"use client";

import { ReactNode, SVGProps, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface HexagonProps {
  children?: ReactNode;
  className?: HTMLElement["className"];
  fill?: SVGProps<SVGRectElement>["fill"];
  borderGradient?: "always" | "onHover";
}

export default function Hexagon(props: HexagonProps) {
  const { children, className, fill } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.0818442 -0.100004 208.2 192.2"
      className={twMerge("w-60 text-secondary-gray", className)}
    >
      <path
        d="M 207 99.84 l -48.18 88 a 8 8 90 0 1 -7 4.16 h -95.64 a 8 8 90 0 1 -7 -4.16 l -48.18 -88 a 8 8 90 0 1 0 -7.68 l 48.18 -88 a 8 8 90 0 1 7 -4.16 H 151.82 a 8 8 90 0 1 7 4.16 l 48.18 88 A 8 8 90 0 1 207 99.84 Z"
        fill={fill || "none"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
      <foreignObject className="w-full h-full">
        <div className="h-full flex items-center justify-center text-primary-gray">
          {children}
        </div>
      </foreignObject>
    </svg>
  );
}
