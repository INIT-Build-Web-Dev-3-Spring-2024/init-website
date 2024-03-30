"use client";

import Link from "next/link";
import { HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import GradientBorder from "./GradientBorder";

interface Base {
  children?: ReactNode;
  className?: HTMLElement["className"];
  borderGradient?: "onHover" | "always";
}

interface Link extends Base {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  // If it is a link, this Ensures these cannot be passed in
  onClick?: never;
  type?: never;
}

interface Action extends Base {
  type?: HTMLButtonElement["type"];
  onClick: MouseEventHandler;
  // If it is a button, this Ensures these cannot be passed in
  href?: never;
  target?: never;
}

type ButtonProps = Link | Action;

export default function Button(props: ButtonProps) {
  const { children, className, borderGradient, onClick, type, href, target } =
    props;

  // conditionaly render a link or a button based on if href is defined
  const ElementType = props.href !== undefined ? Link : "button";

  // pass the props to which ever element gets render
  const content = (
    <ElementType
      href={href || ""}
      target={target}
      onClick={onClick}
      type={type}
      className={twMerge(
        "border border-secondary-gray p-3 rounded-lg active:translate-y-1 bg-page inline-block",
        borderGradient ? "border-transparent" : className
      )}
    >
      {children}
    </ElementType>
  );

  return (
    <GradientBorder
      className={twMerge(
        "p-0 active:before:translate-y-1 active:after:translate-y-1 active:translate-y-1",
        className
      )}
      animatedOnHover={borderGradient === "onHover"}
      animated={borderGradient === "always"}
      disabled={borderGradient === undefined}
    >
      {content}
    </GradientBorder>
  );
}
