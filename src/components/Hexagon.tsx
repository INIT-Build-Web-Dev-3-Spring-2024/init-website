"use client";

import { ReactNode, SVGProps, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/root/tailwind.config";

const twConfig = resolveConfig(tailwindConfig);

interface HexagonProps {
  children?: ReactNode;
  className?: HTMLElement["className"];
  fillOpacity?: SVGProps<SVGRectElement>["fillOpacity"];
  hiddenStroke?: boolean;
  borderGradient?: "always" | "onHover";
  offset?: ("top" | "left" | "bottom" | "right")[];
}

export default function Hexagon(props: HexagonProps) {
  const { children, className, fillOpacity, hiddenStroke, borderGradient } =
    props;

  const [rotation, setRotation] = useState(90);
  const [isHovering, setHovering] = useState(false);

  useEffect(() => {
    // give the hexagon an animation thaat rotates the gradient across the stroke
    if (borderGradient) {
      const animation = window.setInterval(() => {
        setRotation((prev) => (prev + 1) % 360);
      }, 10);

      return () => {
        window.clearInterval(animation);
      };
    }
  }, [borderGradient]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-3 -3 213 196"
      className={twMerge(
        "w-60 text-opacity-40 text-secondary-gray m-1",
        className
      )}
      onMouseOver={(e) => setHovering(true)}
      onMouseOut={(e) => setHovering(false)}
    >
      <defs>
        <linearGradient
          id={"yellow-red-purple"}
          gradientTransform={`rotate(${rotation}, 0.45, 0.3)`}
          className="blur"
        >
          <stop offset="5%" stopColor={twConfig.theme.colors.primary.yellow} />
          <stop
            offset="55%"
            stopColor={twConfig.theme.colors.secondary.yellow}
          />
          <stop offset="95%" stopColor={twConfig.theme.colors.primary.purple} />
        </linearGradient>
      </defs>

      <path
        d="M 207 99.84 l -48.18 88 a 8 8 90 0 1 -7 4.16 h -95.64 a 8 8 90 0 1 -7 -4.16 l -48.18 -88 a 8 8 90 0 1 0 -7.68 l 48.18 -88 a 8 8 90 0 1 7 -4.16 H 151.82 a 8 8 90 0 1 7 4.16 l 48.18 88 A 8 8 90 0 1 207 99.84 Z"
        fill={fillOpacity ? "white" : "none"}
        fillOpacity={fillOpacity}
        stroke={
          borderGradient == "always" ||
          (borderGradient === "onHover" && isHovering)
            ? "url(#yellow-red-purple)"
            : "currentColor"
        }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={
          borderGradient == "always" ||
          (borderGradient === "onHover" && isHovering)
            ? 3
            : 1
        }
        strokeOpacity={hiddenStroke ? 0 : 1}
      />
      <foreignObject className="w-full h-full">
        <div className="h-full flex items-center justify-center text-primary-gray">
          {children}
        </div>
      </foreignObject>
    </svg>
  );
}
