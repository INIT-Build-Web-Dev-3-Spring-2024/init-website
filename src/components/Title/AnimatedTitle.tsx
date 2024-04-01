import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface AnimatedTitleProps {
  children?: ReactNode;
  className?: HTMLHeadingElement["className"];
}

export default function AnimatedTitle({
  children,
  className,
}: AnimatedTitleProps) {
  return (
    <span className={twMerge("animated-text", className)}>{children}</span>
  );
}
