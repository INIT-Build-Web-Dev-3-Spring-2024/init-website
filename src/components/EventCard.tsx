import React from 'react';
import Image from 'next/image';
import GradientBorder from './GradientBorder';
import { LuExternalLink } from 'react-icons/lu';
// import HoverEffect from "@/components/hoverEff";

export interface Event {
  id: string;
  name: string;
  description: string;
  picture: string;
  location: string;
  program: string;
  date: string;
  dateEnd: string;
  time: string;
  timeEnd: string;
  rsvpLink: string;
}

const color = {
  build: 'text-program-build',
  discover: 'text-program-discover',
  explore: 'text-program-explore',
  ingite: 'text-program-ignite',
  hack: 'text-program-hack',
  launch: 'text-program-launch',
  reach: 'text-program-reach',
  default: 'text-primary-yellow',
};

function displayCountdownUntilDateTime(date: string, time: string): string {
  const targetDateTime = new Date(`${date} ${time}`);

  if (isNaN(targetDateTime.getTime())) {
    return 'To Be Announced';
  }

  const currentTime = new Date();

  if (currentTime > targetDateTime) {
    return 'This event has already passed';
  }

  const timeDifference = targetDateTime.getTime() - currentTime.getTime();

  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return `${hours} hours ${minutes} minutes ${seconds} seconds`;
}

export default function EventCard({
  picture,
  description,
  location,
  name,
  program,
  rsvpLink,
  date,
  time,
}: Event) {
  return (
    <>
      <GradientBorder animatedOnHover className="p-0 rounded-2xl w-full">
        {/* <HoverEffect className="grid rounded-2xl"> */}
        <section className="rounded-2xl grid grid-cols-3 sm:grid-cols-7 grid-rows-7 sm:grid-rows-3 gap-1 h-96 sm:h-56">
          <div className="col-span-2 row-span-3 p-3">
            {
              <Image
                src={picture}
                alt={`${name} Event Image`}
                width={1000}
                height={1000}
                className="h-full w-full border-1 border-zinc-900 shadow-[0_0_15px_10px_rgba(170,170,170,0.2)] object-cover rounded-2xl"
              />
            }
          </div>
          <div className="col-span-3 row-span-4 col-start-1 row-start-4 sm:col-span-4 sm:row-span-3 sm:col-start-3">
            <div className="flex flex-col p-3 h-full w-full">
              <h3 className="relative flex text-md font-semibold text-gray-400">
                {time} | {location}
              </h3>
              <p className="text-2xl text-gray-300">{name}</p>
              <p className="h-full pt-3 text-gray-400 text-sm overflow-scroll">
                {description}
              </p>
              <div className="pt-1 flex flex-row justify-items-end basis-auto items-end justify-center">
                {displayCountdownUntilDateTime(date, time)}
              </div>
            </div>
          </div>
          <div className="row-span-3 col-start-3 row-start-1 sm:col-start-7">
            <div className="flex flex-col h-full">
              <span
                className={`pt-2 pr-3 flex flex-row-reverse text-md font-extrabold uppercase ${
                  color[program.toLowerCase() as keyof typeof color] ||
                  color.default
                }`}
              >
                {program}
              </span>
              <div className="flex align-middle justify-items-center aspect-square items-center content-center justify-center">
                {rsvpLink !== 'RSVP TBD' && (
                  <a href={rsvpLink}>
                    <LuExternalLink className="size-8">RSVP Now</LuExternalLink>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* </HoverEffect> */}
      </GradientBorder>
    </>
  );
}
