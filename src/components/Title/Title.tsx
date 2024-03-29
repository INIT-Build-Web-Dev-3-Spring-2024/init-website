import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TtileProps {
  children?: ReactNode;
  className?: HTMLHeadingElement["className"];
}

export default function Title({ children, className }: TtileProps) {
  return (
    <h1
      className={twMerge(
        "font-black text-5xl text-white text-center",
        className
      )}
    >
      {children}
    </h1>
  );
}
