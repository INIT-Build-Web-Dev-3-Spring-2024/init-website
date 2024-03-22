import React from "react";
import Button from "./Button";
import Image from "next/image";

export interface Event {
  id: string;
  name: string;
  description: string;
  picture: string;
  location: string;
  program: string;
  date: string;
  time: string;
  rsvpLink: string;
}

const color = {
  build: "text-program-build",
  discover: "text-program-discover",
  explore: "text-program-explore",
  ingite: "text-program-ignite",
  hack: "text-program-hack",
  launch: "text-program-launch",
  reach: "text-program-reach",
  default: "text-primary-yellow",
};

export default function EventCard({ picture, description, location, name, program, rsvpLink, date, time }: Event) {
  return (
    <>
      <section className="group flex h-full flex-col rounded-2xl bg-zinc-900 overflow-hidden">
        <div className="relative w-full h-52">
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
        <div className="flex flex-grow flex-col font-semibold justify-between p-4 md:p-6">
          <div>
            <span
              className={`mb-1 block text-xs font-semibold uppercase ${
                color[program.toLowerCase() as keyof typeof color] || color.default
              }`}>
              {program}
            </span>
            <h3 className="text-lg font-semibold text-gray-300 sm:text-xl">{name}</h3>
            <p className="sm:text-md mt-2 text-sm text-gray-500">{description}</p>
            <div className="mt-2 space-y-1 text-sm text-gray-400 sm:mt-4">
              <p>{date}</p>
              <p className="text-xs">
                {location} | {time}
              </p>
            </div>
          </div>
          <div className="mt-4 flex">
            {rsvpLink !== "RSVP TBD" && <Button buttonText="RSVP Now" buttonLink={rsvpLink} />}
          </div>
        </div>
      </section>
    </>
  );
}
