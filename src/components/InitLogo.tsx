"use client";

import Logo from "@/images/logo.svg";

interface InitLogoProps {
  className?: HTMLElement["className"];
}

export default function InitLogo({ className }: InitLogoProps) {
  return <Logo className={className} />;
}
