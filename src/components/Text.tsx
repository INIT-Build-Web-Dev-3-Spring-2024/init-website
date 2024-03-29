import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TextProps {
  children?: ReactNode;
  className?: HTMLDivElement["className"];
}

export default function Text({ children, className }: TextProps) {
  return <p className={twMerge("", className)}>{children}</p>;
}
