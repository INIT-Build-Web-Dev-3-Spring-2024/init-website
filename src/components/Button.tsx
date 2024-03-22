"use client";
import React from "react";

export default function RsvpButton({
  buttonLink,
  buttonText,
}: {
  buttonLink: string;
  buttonText: string;
}) {
  return (
    <>
      <a
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary_yellow px-3 py-2 text-xs font-medium text-gray-700 shadow-sm transition-all hover:bg-light_yellow focus:outline-none focus:ring-2 focus:ring-light_yellow sm:rounded-lg sm:px-4 sm:py-3 sm:text-sm"
        href={buttonLink}
        target="_blank"
      >
        {buttonText}
      </a>
    </>
  );
}
