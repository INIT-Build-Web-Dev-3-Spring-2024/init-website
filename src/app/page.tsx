"use client";

import Image from "next/image";
import Link from "next/link";
import { IoLogoDiscord as DiscordLogo } from "react-icons/io5";
import Carousel from "../components/Carousel";
import ThisWeekCard from "../components/ThisWeekCard";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-primary">
        <div className="grid grid-cols-1 space-x-0 md:grid-cols-2 md:space-x-5 lg:space-x-0">
          <div className="flex justify-center md:justify-start">
            <div className="max-w-md p-4 text-center md:text-left">
              <p className="text-white font-bold pt-3 text-center text-4xl leading-tight md:text-left md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Empowering tech talent in Miami and beyond 🚀
              </p>
              <p className="text-md pt-5 text-center md:text-left lg:text-lg">
                INIT empowers underserved communities to launch careers in
                technology, closing the talent gap and helping individuals
                achieve economic mobility
              </p>
              <div className="flex flex-col justify-start gap-2 pt-8 md:flex-row md:space-x-3">
                <Link
                  href="https://airtable.com/appkfpQOssQZfmORj/shrNlrSaT073i6fog"
                  target="_blank"
                  type="button"
                  className="flex items-center justify-center rounded-lg bg-primary_yellow px-6 py-3.5 font-bold text-black  hover:bg-primary-yellow focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                  Join Now
                </Link>
                <Link href="https://discord.gg/init">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-lg bg-discord_purple px-6 py-3.5 text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  >
                    <div className="mr-2 h-6 w-6">
                        <DiscordLogo className="size-7"/>
                    </div>
                    Join our Discord
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5 max-w-lg md:mt-0 lg:max-w-xl overflow-clip">
            <Carousel />
          </div>
        </div>
        <div className="w-full max-w-6xl px-4">
          <ThisWeekCard />
        </div>
        <section>
          <a
            href="programs"
            className="xl:mt-30 mt-10 flex justify-center text-3xl hover:text-yellow-200 md:text-4xl lg:mt-10"
          >
            🧠 Programs
          </a>
          <div className="grid grid-cols-1 space-x-0 md:grid-cols-2 md:space-x-5 lg:space-x-0">
            <div className="grid-span-1 flex justify-center md:justify-start">
              <div className="max-w-xl p-4 text-center md:text-left">
                <p className="text-md pt-5 text-left lg:text-lg">
                  INIT chapters carry out our signature experiential learning
                  and career development programs within their communities.
                  These programs attract thousands of individuals annually,
                  helping them gain technical skills, work on projects, improve
                  their resume, prepare for interviews, connect with industry,
                  and much more. &nbsp;
                  <a
                    href="https://shellhacks.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-span-3 text-yellow-200 hover:text-yellow-400 hover:underline"
                  >
                    ShellHacks
                  </a>
                  , hosted by our INIT FIU chapter, is the largest hackathon in
                  Florida and brings together 1,500 students to innovate each
                  year.
                </p>
              </div>
            </div>
            <Image
              src="/assets/images/programs.png"
              alt="INIT Programs Card"
              width={600}
              height={416}
              className="grid-span-1 mt-5 w-full"
            />
          </div>
        </section>
      </main>
    </>
  );
}
