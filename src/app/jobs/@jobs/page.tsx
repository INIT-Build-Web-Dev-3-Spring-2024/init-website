import { headers } from "next/headers";
import { ReactNode } from "react";
import { CompanyPosting } from "../../api/Events_Tracker/companyPosting";
import { JobPosting, jobPostings } from "../../api/Events_Tracker/jobPostings";
import JobCard from "./JobCard";
import { PrismaClient } from "@prisma/client";

interface PageProps {
  companies: ReactNode;
}

export default async function page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
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
    jobLocation: decodedJobLocationQuery,
  };

  async function getJobs(
    input: { q: string | null },
    filters: { jobType: string; positionType: string; jobLocation: string }
  ) {
    if (input.q) {
      return await prisma.jobPosting.findMany({
        where: {
          OR: [
            { title: { contains: decodedSearchQuery, mode: "insensitive" } },
            { company: { contains: decodedSearchQuery, mode: "insensitive" } },
          ],
        },
      });
    } else if (filters.jobType || filters.positionType || filters.jobLocation) {
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
      const eventsRequest = await fetch(`${headersList.get("x-url")}/api/Events_Tracker`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const eventsData = await eventsRequest.json();
      return eventsData.jobPostings ?? [];
    }
  }

  const jobs: typeof jobPostings = await getJobs(input, filters);

  console.log("end result:", jobs);

  await prisma.$disconnect();

  return (
    <div className={`grid w-full grid-cols-1 place-items-center min-[980px]:grid-cols-2 min-[1320px]:grid-cols-3 `}>
      {jobs.length === 0 ? <p>No matching jobs postings.</p> : jobs.map((job) => <JobCard key={job.id} {...job} />)}
    </div>
  );
}
