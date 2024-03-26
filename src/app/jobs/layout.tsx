"use client"

import Button from "@/components/Button";
import { ReactNode, useState } from "react";
import SearchInput from "./SearchInput";
import FilterCard from "./FilterJobsCard";

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
    <div className="max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="relative -top-8">
          <FilterCard/>
        </div>
        <h1 className="font-poppins font-bold text-xl text-white md:mb-0 md:text-2xl lg:text-3xl">
          Upcoming Jobs
        </h1>
        <div className="flex items-center gap-6 h-24">
          {showCompanies || <SearchInput searchType="job" />}
          <Button onClick={() => setShowCompanies(!showCompanies)}>
            Group By {showCompanies ? "Jobs" : "Companies"}
          </Button>
          <Button onClick={() => alert("clicked add job button")}>Add Jobs</Button>
        </div>
        
      </div>

      {showCompanies ? companies : jobs}

      {children}
    </div>
  );
}