"use client";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import InitLogo from "@/images/icons/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
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
      label: "Opportunities",
      href: "/jobs",
      isAuthRequired: false,
    },
    {
      label: "About Us",
      href: "/about",
      isAuthRequired: false,
    },
  ];

  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/init.fiu/",
      Icon: FaInstagram,
      style:
        "bg-gradient-to-tr from-orange-500 to-purple-500 hover:from-purple-600 hover:to-yellow-600",
    },
    {
      name: "Discord",
      href: "https://discord.gg/init",
      Icon: FaDiscord,
      style: "bg-primary-purple hover:bg-indigo-500",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/company/initofficial/",
      Icon: FaLinkedinIn,
      style: "bg-blue-600 hover:bg-blue-700",
    },
  ];

  return (
    <nav className="grid p-8 max-w-screen-2xl mx-auto lg:grid-cols-3 ">
      <div className="relative mb-7">
        <Link href="/">
          <InitLogo className="h-8 hover:text-primary-yellow" />
        </Link>

        <button
          className="absolute top-0 right-0 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMenu className="text-3xl" />
        </button>
      </div>

      <div className={twMerge(!isOpen && "hidden", "mb-7 lg:block")}>
        <ul className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-0">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={twMerge(!isOpen && "hidden", "lg:block")}>
        <ul className="flex items-center justify-start lg:justify-end gap-5">
          {socials.map(({ name, href, Icon, style }) => (
            <li key={name}>
              <Link
                href={href}
                target="_blank"
                className={twMerge(
                  "flex items-center justify-center w-8 h-8 rounded-full",
                  style
                )}
              >
                <Icon className="text-white text-xl" />
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="https://airtable.com/appkfpQOssQZfmORj/shrNlrSaT073i6fog"
              target="_blank"
              className="rounded bg-primary-yellow px-5 py-2 font-bold"
            >
              Join
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
