import GradientBorder from "@/components/GradientBorder";
import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export interface User {
  index: number;
  name: string;
  avatarSrc: string;
  company: string;
  companyLogoSrc: string;
  position: string;
  review: string;
}

interface AvatarProps {
  className: string;
  user: User;
  avatarIndex: number;
  selectedIndex: number;
  animationState: {
    fadeInIndex: number;
    fadeOutIndex: number;
  };
  onClick: MouseEventHandler;
}

export default function Avatar(props: AvatarProps) {
  const {
    className,
    user: person,
    avatarIndex,
    selectedIndex,
    animationState,
    onClick,
  } = props;

  return (
    <GradientBorder
      className={twMerge(
        className,
        "p-0.5 rounded-full cursor-pointer",
        animationState.fadeInIndex === avatarIndex ? "animate-fadeIn" : "",
        animationState.fadeOutIndex === avatarIndex ? "animate-fadeOut" : ""
      )}
      disabled={avatarIndex !== selectedIndex}
    >
      <Image
        className="w-24 h-24 rounded-full"
        src={person.avatarSrc}
        alt={person.name}
        width="96"
        height="96"
        onClick={onClick}
      />
    </GradientBorder>
  );
}
