"use client";

import InitLogo from "@/images/icons/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
// import { motion } from "framer-motion";
import Button from "../Button";
import GradientBorder from "../GradientBorder";
import HoverEffect from "../hoverEff";

export const navLinks = [
  {
    label: "Home",
    href: "/home",
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
];

export default function Navbar() {
  const pathName = usePathname();
  const [scrollPos, setScrollPos] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const activeLink = useMemo(() => {
    for (const { href } of navLinks) {
      if (href === pathName) {
        return href;
      }
    }
  }, [pathName]);

  useEffect(() => {
    window.onscroll = function (event) {
      setScrollPos((prevScrollPos) => {
        if (prevScrollPos > window.scrollY) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }

        return window.scrollY;
      });
    };
  }, []);

  return (
    <nav
      className={twMerge(
        "flex justify-center items-center gap-2 sm:gap-4 md:gap-10 py-8 sticky top-0 transition-all duration-500 z-50",
        !showNav && "-top-52",
        scrollPos > 100 && "bg-gradient-to-b from-black/70 to-transparent"
      )}
    >
      <div
        className={twMerge(
          "my-auto gap-5 justify-self-end invisible sm:visible"
          // scrollPos > 100 && "justify-self-start"
        )}
      >
        <Link href="/home">
          <InitLogo className="w-16 hover:text-primary-yellow shadow-2xl shadow-black" />
        </Link>
      </div>

      <div>
        <ul className="flex mx-auto justify-center items-center gap-2 w-fit border border-secondary-gray rounded-3xl p-1 bg-page shadow-2xl shadow-black">
          {navLinks.map(({ label, href }) => (
            <li key={label} className="relative">
              {pathName == href && (
                <motion.span
                  layoutId="highlight"
                  className={"absolute bottom-full w-full"}
                >
                  <div className="bottom-full w-7 rounded-sm bg-gradient-to-r  from-primary-yellow to-primary-purple mb-[5px] h-1 mx-auto" />
                </motion.span>
              )}

              <HoverEffect className="z-10 rounded-3xl">
                <Button
                  href={href}
                  className={twMerge(
                    "rounded-3xl py-px border-none text-nowrap first-letter:capitalize bg-transparent",
                    activeLink === href && "bg-secondary-gray/30"
                  )}
                >
                  {label}
                </Button>
              </HoverEffect>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={twMerge(
          "justify-self-start my-auto transition-all duration-500 invisible sm:visible",
          pathName === "/" && scrollPos < 100 && "opacity-0"
          // scrollPos > 100 && "justify-self-end"
        )}
      >
        <GradientBorder
          className="px-3 py-1 rounded-3xl cursor-pointer"
          animatedOnHover
        >
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
