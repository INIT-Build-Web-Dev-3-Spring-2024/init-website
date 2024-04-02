"use client";

import InitLogo from "@/images/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import GradientBorder from "./GradientBorder";
import HoverEffect from "./hoverEff";

export default function Navbar() {
  const pathName = usePathname();

  const navLinks = useMemo(
    () => [
      {
        label: "Home",
        href: "/",
        isAuthRequired: false,
      },
      {
        label: "Events",
        href: "/events",
        isAuthRequired: false,
      },
      {
        label: "Programs",
        href: "/programs",
        isAuthRequired: false,
      },
      {
        label: "Jobs",
        href: "/jobs",
        isAuthRequired: false,
      },
    ],
    []
  );

  const activeLink = useMemo(() => {
    for (const { href } of navLinks) {
      if (href === pathName) {
        return href;
      }
    }
  }, [navLinks, pathName]);

  return (
    <nav className="grid grid-cols-3 gap-10 p-8">
      <div className="justify-self-end my-auto">
        <Link href="/">
          <InitLogo className="w-16" />
        </Link>
      </div>

      <div className="mx-auto">
        <ul className="flex justify-center items-center w-fit border border-secondary-gray rounded-3xl p-1">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <HoverEffect className="z-10 rounded-3xl">
                <Button
                  href={href}
                  className={twMerge(
                    "rounded-3xl py-px border-none text-nowrap first-letter:capitalize bg-transparent",
                    activeLink === href && "bg-secondary-gray/20"
                  )}
                >
                  {label}
                </Button>
              </HoverEffect>
            </li>
          ))}
        </ul>
      </div>

      <div className="my-auto">
        <GradientBorder className="px-3 py-1 rounded-3xl" animatedOnHover>
          <Link
            href="https://airtable.com/appkfpQOssQZfmORj/shrNlrSaT073i6fog"
            className="p-0"
          >
            Get INIT
          </Link>
        </GradientBorder>
      </div>
    </nav>
  );
}
