"use client"
import FilterCard from "./FilterJobsCard";
import { ReactNode, useState } from "react";
import SearchInput from "./SearchInput";

interface JobsLayoutProps {
  children: ReactNode;
  companies: ReactNode;
  jobs: ReactNode;
}

export default function JobsLayout({
  children,
  companies,
  jobs,
}: JobsLayoutProps) {
  const [showCompanies, setShowCompanies] = useState(false);

  return (
    <div className="bg-primary text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          {/* Filters Section (Left side) */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <h1 className="order-1 md:order-none">Upcoming Jobs</h1>
          </div>

          {/* Search Input (Top Right) */}
          <div className="order-2 md:order-none md:ml-auto mt-4 md:mt-0">
            <SearchInput searchType="job"/>
          </div>

          {/* Buttons Section (Right side) */}
          <div className="ml-auto">
            <button
              type="button"
              className="hover:bg-light-yellow inline-flex items-center justify-center gap-2 rounded-md bg-primary_yellow px-3 py-2 text-sm font-semibold text-black transition-all hover:bg-light_yellow focus:outline-none focus:ring-2 focus:ring-light_yellow md:w-auto lg:px-4 lg:py-3"
              onClick={() => setShowCompanies(!showCompanies)}
            >
              Group By {showCompanies ? "Jobs" : "Companies"}
            </button>
          </div>
        </div>

        {/* Jobs Section (Below Search Input) */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          {showCompanies ? companies : jobs}
          <FilterCard />
        </div>
      </div>
    </div>
  );
}