"use client";

import { ReactNode, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: HTMLButtonElement["type"];
  className?: HTMLButtonElement["className"];
}

export default function Button(props: ButtonProps) {
  const { children, onClick, type = "button", className } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        "bg-primary-yellow hover:bg-light_yellow px-3 py-2 lg:px-4 lg:py-3 text-sm font-semibold text-black transition-all rounded-md",
        className
      )}
    >
      {children}
    </button>
  );
}
