import React from "react";
//import NextAuth from "next-auth";
import RsvpButton from "./RsvpButton";
import Image from "next/image";
//'use client'; //so do we need this or no because this component is rendering based on an api anyway, so it might have to be done on the client server

export interface Event {
  id: number;
  name: string;
  description: string;
  picture: string;
  location: string;
  program: string;
  time: Date;
  rsvpLink: string;
}

const programColor = (program: string) => {
  switch (program) {
    case "build":
      return "text-programs-build";
    case "discover":
      return "text-programs-discover";
    case "explore":
      return "text-programs-explore";
    case "ignite":
      return "text-programs-ignite";
    case "hack":
      return "text-programs-hack";
    case "launch":
      return "text-programs-launch";
    case "reach":
      return "text-programs-reach";
    default:
      return "text-primary_yellow";
  }
};

export default function EventCard({
  id,
  picture,
  description,
  location,
  name,
  program,
  rsvpLink,
  time,
}: Event) {
  const date = time.toLocaleDateString("en-us", {
    weekday: "short",
    month: "long",
    day: "numeric",
  });

  const realTime = time.toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  });

  return (
    <>
      {" "}
      {/*TODO: remove> do we need this fragment here??? */}
      <div className="group flex h-full flex-col rounded-sm border border-zinc-600 bg-zinc-900 shadow-lg shadow-zinc-900">
        <div className="relative h-52 overflow-hidden rounded-t-sm sm:h-56">
          {
            <Image
              src={picture}
              alt={`${name} Event Image`}
              width={1000}
              height={1000}
              className="absolute h-full w-full object-cover"
            />
          }
        </div>
        <div className="flex flex-grow flex-col justify-between p-4 md:p-6">
          <div>
            <span
              className={`mb-1 block text-xs font-semibold uppercase ${programColor(
                program.toLowerCase()
              )}`}
            >
              {program}
            </span>
            <h3 className="text-lg font-semibold text-gray-300 sm:text-xl">
              {name}
            </h3>
            <p className="sm:text-md mt-2 text-sm text-gray-500">
              {description}
            </p>
            <div>
              <p className="text-gray-400">{date}</p>
              <p className="text-xs text-gray-400">
                {location} | {realTime}
              </p>
            </div>
          </div>
          <div className="mt-4 flex">
            <RsvpButton rsvpLink={rsvpLink} />
          </div>
        </div>
      </div>
    </>
  );
}
