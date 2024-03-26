import React from "react";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { jobPostings } from "../app/api/Events_Tracker/jobPostings";
import JobCard from "../app/jobs/@jobs/JobCard";
import FilterCard from '../app/jobs/FilterJobsCard';
import SearchInput, { setWasSearchBtnClicked } from "../app/jobs/SearchInput";
import { getWasSearchBtnClicked } from "../app/jobs/SearchInput";



export default async function page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined; };
}) {

  const prisma = new PrismaClient();

  const groupByCompany = false;
  const headersList = headers();
  const searchQuery = searchParams?.q || null;
  const decodedSearchQuery = decodeURI(searchQuery ?? "");
  const input = { q: decodedSearchQuery };

  async function getJobs(input: { q: string | null; }) {
    if (input.q) {
      console.log(decodedSearchQuery);
      return await prisma.jobPosting.findMany({
        where: {
          OR: [
            { title: { contains: decodedSearchQuery, mode: "insensitive" } },
            { company: { contains: decodedSearchQuery, mode: "insensitive" } },
          ],
        },
      });
    } else {
      const eventsRequest = await fetch(
        `${headersList.get("x-url")}/api/Events_Tracker`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const eventsData = await eventsRequest.json();
      return eventsData;
    };
  };

  const jobs: typeof jobPostings = await getJobs(input);

  console.log(jobs);

  await prisma.$disconnect();

  return (
    <>
      {/* Container to keep everything in line */}
      <div className="mx-auto max-w-screen-xl">
        {/* Title and Search Bar */}
        <div className="mb-4 flex flex-col items-center justify-between  md:mb-8 md:flex-row">
          <h1 className="mb-4 text-xl text-white md:mb-0 md:text-2xl lg:text-3xl">
            Upcoming Jobs
          </h1>
          <div className="flex w-full flex-col items-center space-y-4 md:w-auto md:flex-row md:space-x-5 md:space-y-0">
            {
              <button
                className="cursor-pointer hover:text-primary_yellow hover:underline"
              //onClick={handleResetFilters}
              >
                See All Jobs
              </button>
            }
            {!groupByCompany && <SearchInput searchType="job" />}
            <button
              className="hover:bg-light-yellow inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary_yellow px-3 py-2 text-sm font-semibold text-black transition-all hover:bg-light_yellow focus:outline-none focus:ring-2 focus:ring-light_yellow md:w-auto lg:px-4 lg:py-3"
              type="button"
            //onClick={() => setGroupByCompany(!groupByCompany)}
            >
              {groupByCompany ? "Group By Postings" : "Group By Company"}
            </button>
            {/*{isSignedIn && <JobModal setPostings={setJobPostings} />}*/}
          </div>
        </div>
        {jobs.length === 0 ? (
          <p>No jobs available</p>
        ) : (
          jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))
        )}
      </div>
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import CompanyCard, { getWasViewJobsClicked } from "./CompanyCard";
// import {
//   type GetServerSideProps,
//   type InferGetServerSidePropsType,
// } from "next";
// // import type {
// // 	CompanyCardType,
// // 	JobPostingType,
// //   } from "~/server/api/routers/jobRouter";
// import JobModal from "./JobModal";
// import { getWasApplyFilterClicked } from "./FilterJobsCard";
// import FilterJobsCard from "./FilterJobsCard";
// import type { FilterInput } from "./FilterJobsCard";
// import JobCard from "./JobCard";
// import { getSession } from 'next-auth/react';
// // import superjson from 'superjson';
// // import { db } from '~/server/db';

// // Define a type fore the selected filters
// export type SelectedFilters = {
// 	jobType: string[];
// 	jobPosition: string[];
// 	jobLocation: string[];
// };

// let companyDataArr: CompanyCardType[] | undefined = [];

// // GetServerSideProps implementation
// export const getServerSideProps: GetServerSideProps = async (context) => {
// 	// Get the authentication context
// 	const session = await getSession(context.req);

// 	// Creeate the context for server-side helpers
// 	const trpcContext = {
// 		auth, // Auth context
// 		db, // Database connection
// 	};

// 	const helpers = createServerSideHelpers({
// 		router: appRouter,
// 		ctx: trpcContext,
// 		transformer: superjson,
// 	});

// 	await helpers.jobs.getAll.prefetch();
// };
