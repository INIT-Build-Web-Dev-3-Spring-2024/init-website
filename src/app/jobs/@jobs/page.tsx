import { headers } from "next/headers";
import { ReactNode } from "react";
import { CompanyPosting } from "../../api/Events_Tracker/companyPosting";
import { JobPosting, jobPostings } from "../../api/Events_Tracker/jobPostings";
import JobCard from "./JobCard";
import { PrismaClient } from "@prisma/client";

interface PageProps {
  companies: ReactNode;
}

export default async function page(
  {
    searchParams,
    }: {
      searchParams?: { [key: string]: string | undefined };
    }) {

    const prisma = new PrismaClient();

    const groupByCompany = false;
    const headersList = headers();
    const searchQuery = searchParams?.q || null;
    const decodedSearchQuery = decodeURI(searchQuery ?? "");
    const input = { q: decodedSearchQuery };

    const jobTypeQuery = searchParams?.jobType || null;
    const decodedJobTypeQuery = decodeURI(jobTypeQuery ?? "");

    const positionTypeQuery = searchParams?.positionType || null;
    const decodedPositionTypeQuery = decodeURI(positionTypeQuery ?? "");

    const jobLocationQuery = searchParams?.jobLocation || null;
    const decodedJobLocationQuery = decodeURI(jobLocationQuery ?? "");
    const filters = {
      jobType: decodedJobTypeQuery,
      positionType: decodedPositionTypeQuery,
      jobLocation: decodedJobLocationQuery
    }

    async function getJobs(input: { q: string | null }, filters: { jobType: string, positionType: string, jobLocation: string }) {
      if(input.q) {
        return await prisma.jobPosting.findMany({
          where: {
            OR: [
              { title: {contains: decodedSearchQuery, mode: "insensitive"} },
              { company: {contains: decodedSearchQuery, mode: "insensitive"} },
            ],
          },
        });
      } else if(filters.jobType || filters.positionType || filters.jobLocation){
        return await prisma.jobPosting.findMany({
          where: {
            AND: [
              filters.jobType ? { jobType: { in: filters.jobType.split(",") } } : {},
              filters.positionType ? { jobPosition: { in: filters.positionType.split(",") } } : {},
              filters.jobLocation ? { jobLocation: { in: filters.jobLocation.split(",") } } : {},
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
          return eventsData.jobPostings;
        };
    };

    const jobs: typeof jobPostings = await getJobs(input, filters);

    console.log("end result:",jobs);

    await prisma.$disconnect();

  return (
    <div className={`grid w-full grid-cols-1 place-items-center min-[980px]:grid-cols-2 min-[1320px]:grid-cols-3 `}>
    {jobs.length === 0 ? (
          <p>No matching jobs postings.</p>
        ) : (
          jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))
        )}
    </div>
  );
}
      // <main className="min-h-screen">
      //   {/* Container to keep everything in line */}
      //   <div className="mx-auto">
      //     {/* Filter Card and Jobs container */}
      //     <div className="flex flex-col md:flex-row">
      //       {/* Dropdown for small Screen sizes */}
      //       <div className="mx-auto mb-8 md:hidden">

      //       </div>

      //       {/* Normal Screen Sizes */}
      //       <div className="mr-[5%] hidden md:block">

      //       </div>

      //       <div className="w-full">
      //         <div
      //           className={`grid w-full grid-cols-1 place-items-center min-[980px]:grid-cols-2 min-[1320px]:grid-cols-3 `}
      //         >
      //           {jobPostings.map((job) => (
      //             <JobCard key={job.id} {...job} />
      //           ))}
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </main>


      // -----------

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
