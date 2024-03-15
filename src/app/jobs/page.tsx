import { headers } from "next/headers";
import { jobPostings } from "../api/Events_Tracker/jobPostings";
import JobCard from "./JobCard";
import FilterCard from './FilterJobsCard';
export default async function page() {
  const headersList = headers();

  const eventsRequest = await fetch(
    `${headersList.get("x-url")}/api/Events_Tracker`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const jobs: typeof jobPostings = await eventsRequest.json();

  console.log(jobs);
  return (
    <>
      {jobs.map((job) => (
        <JobCard {...job} />
      ))}
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
