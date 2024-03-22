import React from "react";
import Button from "./Button";
import Image from "next/image"; //

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

const programColor = (program: string) => {
  switch (program) {
    case "build":
      return "text-program-build";
    case "discover":
      return "text-program-discover";
    case "explore":
      return "text-program-explore";
    case "ignite":
      return "text-program-ignite";
    case "hack":
      return "text-program-hack";
    case "launch":
      return "text-program-launch";
    case "reach":
      return "text-program-reach";
    default:
      return "text-primary-yellow";
  }
};

export default function EventCard({ picture, description, location, name, program, rsvpLink, date, time }: Event) {
  return (
    <>
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
            <span className={`mb-1 block text-xs font-semibold uppercase ${programColor(program.toLowerCase())}`}>
              {program}
            </span>
            <h3 className="text-lg font-semibold text-gray-300 sm:text-xl">{name}</h3>
            <p className="sm:text-md mt-2 text-sm text-gray-500">{description}</p>
            <div>
              <p className="text-gray-400">{date}</p>
              <p className="text-xs text-gray-400">
                {location} | {time}
              </p>
            </div>
          </div>
          <div className="mt-4 flex">
            {rsvpLink !== "RSVP TBD" && <Button buttonText="RSVP Now" buttonLink={rsvpLink} />}
          </div>
        </div>
      </div>
    </>
  );
}
