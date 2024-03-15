import { headers } from "next/headers";
//import { companyPosting } from "../api/Events_Tracker/copmanyPosting";
import { ReactNode } from "react";
import { CompanyPosting } from "../../api/Events_Tracker/companyPosting";
import { JobPosting } from "../../api/Events_Tracker/jobPostings";
import JobCard from "./JobCard";

interface PageProps {
  companies: ReactNode;
}

export default async function page() {
  const headersList = headers();

  const eventsRequest = await fetch(
    `${headersList.get("x-url")}/api/Events_Tracker/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  interface Data {
    companyPostings: CompanyPosting[];
    jobPostings: JobPosting[];
  }

  const { companyPostings, jobPostings }: Data = await eventsRequest.json();

  console.log(companyPostings, jobPostings);

  // const jobs: typeof jobPostings = responseBody;
  // console.log(jobs);

  // const companies: typeof companyPosting = responseBody;
  // console.log("Companies go here!!!:");
  // console.log(companies);

  return (
    <>
      <main className="min-h-screen">
        {/* Container to keep everything in line */}
        <div className="mx-auto">
          {/* Filter Card and Jobs container */}
          <div className="flex flex-col md:flex-row">
            {/* Dropdown for small Screen sizes */}
            <div className="mx-auto mb-8 md:hidden">
              {/* <Dropdown
              className="bg-[#1A1E22] text-white"
              label="Filter"
              placement="bottom"
              inline
            > */}
              {/* <FilterJobsCard
                onFilterChange={setSelectedFilters}
                onResetFilters={handleResetFilters}
              />
            </Dropdown> */}
            </div>

            {/* Normal Screen Sizes */}
            <div className="mr-[5%] hidden md:block">
              {/* <FilterJobsCard
              onFilterChange={setSelectedFilters}
              onResetFilters={handleResetFilters}
            /> */}
            </div>

            <div className="w-full">
              {/* {groupByCompany && jobPostings.length > 0 ? (
              <CompanyCard
                company={
                  companyDataArr
                    ? companyDataArr.map((company) => ({
                        name: company.company,
                        image: company.image,
                        id: company.id,
                      }))
                    : []
                }
                setJobPostings={setJobPostings}
                setGroupByCompany={setGroupByCompany}
                fetchJobsByCompany={fetchJobsByCompany}
              />
            ) : jobPostings && jobPostings.length > 0 ? ( */}
              <div
                className={`grid w-full grid-cols-1 place-items-center min-[980px]:grid-cols-2 min-[1320px]:grid-cols-3 `}
              >
                {jobPostings.map((job) => (
                  <JobCard {...job} />
                ))}
              </div>

              {/* ) : (
              <p className="flex h-3/6 items-center justify-center">
                No matching job postings.
              </p>
            ) */}
            </div>
          </div>
        </div>
      </main>

      {/* {jobs.map((job) => (
        <JobCard {...job} />
      ))} */}
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
