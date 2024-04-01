"use client";

import tailwindConfig from "@/root/tailwind.config";
import { ReactNode, SVGProps, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import resolveConfig from "tailwindcss/resolveConfig";

const twConfig = resolveConfig(tailwindConfig);

interface HexagonProps {
  children?: ReactNode;
  className?: HTMLElement["className"];
  fillOpacity?: SVGProps<SVGRectElement>["fillOpacity"];
  hiddenStroke?: boolean;
  borderGradient?: "always";
  offset?: ("top" | "sides")[];
}

const INITIAL_MARGIN_OFFSETS = {
  marginTop: 4,
  marginLeft: 4,
  marginBottom: 4,
  marginRight: 4,
};

const SVG = {
  path: "M 207 99.84 l -48.18 88 a 8 8 90 0 1 -7 4.16 h -95.64 a 8 8 90 0 1 -7 -4.16 l -48.18 -88 a 8 8 90 0 1 0 -7.68 l 48.18 -88 a 8 8 90 0 1 7 -4.16 H 151.82 a 8 8 90 0 1 7 4.16 l 48.18 88 A 8 8 90 0 1 207 99.84 Z",
  viewBox: "-3 -3 213 196",
};

export default function Hexagon(props: HexagonProps) {
  const {
    children,
    className,
    fillOpacity,
    hiddenStroke: hidden,
    borderGradient,
    offset,
  } = props;

  const [rotation, setRotation] = useState(90);

  const hexagonRef = useRef<SVGPathElement>(null);

  const [margins, setMargins] = useState(
    structuredClone(INITIAL_MARGIN_OFFSETS)
  );

  useEffect(() => {
    // give the hexagon an animation thaat rotates the gradient across the stroke
    const animation = window.setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 10);

    return () => {
      window.clearInterval(animation);
    };
  }, []);

  useEffect(() => {
    // reposition hexagon so that they are in a honeycomb pattern
    const marginOffsets = structuredClone(INITIAL_MARGIN_OFFSETS);

    if (!hexagonRef.current) return;

    const { width, height } = hexagonRef.current.getBoundingClientRect();

    offset?.forEach((ofs) => {
      switch (ofs) {
        case "top":
          marginOffsets.marginTop -= height * 1.08;
          break;
        case "sides":
          marginOffsets.marginLeft -= width / 4;
          marginOffsets.marginRight -= width / 4;
      }
    });

    setMargins(marginOffsets);
  }, [offset]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={SVG.viewBox}
      className={twMerge(
        "w-60 text-opacity-40 text-secondary-gray duration-1000 transition-all",
        className
      )}
      style={margins}
    >
      <defs>
        <linearGradient
          id={"yellow-red-purple"}
          gradientTransform={`rotate(${rotation}, 0.45, 0.5)`}
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

      <defs>
        <radialGradient id={"white-transparent"}>
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="white" />
        </radialGradient>
      </defs>

      <defs>
        <clipPath id="hexagon-clip">
          <path d={SVG.path} />
        </clipPath>
      </defs>

      <path
        d={SVG.path}
        fill={fillOpacity ? "url(#white-transparent)" : "none"}
        fillOpacity={fillOpacity}
        ref={hexagonRef}
        stroke={
          borderGradient == "always"
            ? "url(#yellow-red-purple)"
            : "currentColor"
        }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        strokeOpacity={hidden ? 0 : 1}
        className="m-10"
      />
      <foreignObject className="w-full h-full" clipPath="url(#hexagon-clip)">
        <div className="h-full flex items-center justify-center text-primary-gray">
          {children}
        </div>
      </foreignObject>
    </svg>
  );
}
