"use client";

import { ReactNode, useState } from "react";

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
        <div className="flex items-center justify-between">
          <h1>Upcoming Jobs</h1>

          <div>
            <input type="text" name="" id="" placeholder="search" />
            <button
              type="button"
              className="hover:bg-light-yellow inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary_yellow px-3 py-2 text-sm font-semibold text-black transition-all hover:bg-light_yellow focus:outline-none focus:ring-2 focus:ring-light_yellow md:w-auto lg:px-4 lg:py-3"
              onClick={() => setShowCompanies(!showCompanies)}
            >
              Group By {showCompanies ? "Jobs" : "Companies"}
            </button>
            <button type="button">Add jobs</button>
          </div>
        </div>

        {showCompanies ? companies : jobs}
      </div>
    </div>
  );
}
