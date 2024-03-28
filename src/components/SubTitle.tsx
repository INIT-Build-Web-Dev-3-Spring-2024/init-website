import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SubTitleProps {
  children?: ReactNode;
  className?: HTMLElement["className"];
}

export default function SubTitle({ className, children }: SubTitleProps) {
  return (
    <h2 className={twMerge("font-bold text-xl ", className)}>{children}</h2>
  );
}
