import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface GradientBorderProps {
  children?: ReactNode;
  className?: HTMLElement["className"];
  animated?: boolean;
  animatedOnHover?: boolean;
  disabled?: boolean;
}

export default function GradientBorder(props: GradientBorderProps) {
  const { children, className, animated, animatedOnHover, disabled } = props;

  return (
    <div
      className={twMerge(
        "relative w-fit bg-page rounded-md p-3 m-[2px]",
        !disabled && "gradient-border",
        animated === true && "animated-border",
        animatedOnHover && "hover:animated-border",
        className
      )}
    >
      {children}
    </div>
  );
}
