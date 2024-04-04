"use client"

import InputAndFilters from "@/components/InputAndFilters";
import { AnimatedTitle, Title } from "@/components/Title";
import { ChangeEvent, ReactNode, useState } from "react";
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

  function handleFilter(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.name, e.target.value);
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Title>
          <AnimatedTitle>Opportunities</AnimatedTitle><br/> for you
        </Title>


            <FilterCard/>
            <div className="mx-auto w-[600px] my-5 ">
              <InputAndFilters
                placeholder="Search by name or type"
                filters={[
                  {
                    name: "Location",
                    options: ["Seattle", "Arlington", "Chicago"],
                    onChange: handleFilter,
                  },
                  {
                    name: "Type",
                    options: ["Full Time", "Part Time", "Internship"],
                    onChange: handleFilter,
                  },
                  {
                    name: "Program",
                    options: ["Expolore", "Build", "Reach"],
                  },
                ]}
              />
          {/* <div className="flex items-center gap-6 h-24">
            {showCompanies || <SearchInput searchType="job" />}
            <Button onClick={() => setShowCompanies(!showCompanies)}>
              Group By {showCompanies ? "Jobs" : "Companies"}
            </Button>
            <Button onClick={() => alert("clicked add job button")}>Add Jobs</Button>
          </div> */}
          
        </div>

        {showCompanies ? companies : jobs}

        {children}
      </div>
    </>
  );
}