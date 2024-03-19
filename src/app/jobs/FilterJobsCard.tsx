"use client";

import { useState } from "react";

export const jobPostings = [
  {
    image:
      "https://res.cloudinary.com/dh6y8bufo/image/upload/v1700202460/init-dashboard/jobs/netflix-logo.png",
    title: "Software Engineer",
    company: "Netflix",
    jobType: "Fulltime",
    jobPosition: "New-Grad",
    jobLocation: "On-Site",
    date: "10/14/23",
    url: "https://jobs.netflix.com/jobs/291980521",
  },

  {
    image:
      "https://res.cloudinary.com/dh6y8bufo/image/upload/v1700202362/init-dashboard/jobs/google-logo.png",
    title: "Software Engineer",
    company: "Google",
    jobType: "Fulltime",
    jobPosition: "Internship",
    jobLocation: "On-Site",
    date: "10/11/23",
    url: "https://www.google.com/about/careers/applications/jobs/results/?src=Online/Google%20Website/ByF&utm_source=Online%20&utm_medium=careers_site%20&utm_campaign=ByF&company=Fitbit&company=Google&company=YouTube&distance=50&employment_type=INTERN",
  },

  {
    image:
      "https://res.cloudinary.com/dh6y8bufo/image/upload/v1700202587/init-dashboard/jobs/capital-one-logo.svg",
    title: "Software Engineer",
    company: "Capital One",
    jobType: "Fulltime",
    jobPosition: "Internship",
    jobLocation: "Remote",
    date: "10/14/23",
    url: "https://www.capitalonecareers.com/job/mclean/technology-early-internship-program-summer-2024/31238/52660888800?messenger=email",
  },

  {
    image:
      "https://res.cloudinary.com/dh6y8bufo/image/upload/v1700202798/init-dashboard/jobs/104477_amazon_icon_b5cspe.png",
    title: "Software Engineer",
    company: "Amazon",
    jobType: "Fulltime",
    jobPosition: "Internship",
    jobLocation: "On-Site",
    date: "10/14/23",
    url: "https://www.amazon.jobs/en/jobs/2408098/software-development-engineer-internship-2024-us",
  },

  {
    image:
      "https://res.cloudinary.com/dh6y8bufo/image/upload/v1700202362/init-dashboard/jobs/google-logo.png",
    title: "Data Science",
    company: "Google",
    jobType: "Fulltime",
    jobPosition: "Internship",
    jobLocation: "On-Site",
    date: "10/11/23",
    url: "https://www.google.com/about/careers/applications/jobs/results/?src=Online/Google%20Website/ByF&utm_source=Online%20&utm_medium=careers_site%20&utm_campaign=ByF&company=Fitbit&company=Google&company=YouTube&distance=50&employment_type=INTERN",
  },

  {
    image:
      "https://res.cloudinary.com/dh6y8bufo/image/upload/v1700202460/init-dashboard/jobs/netflix-logo.png",
    title: "Machine Learning",
    company: "Netflix",
    jobType: "Partime",
    jobPosition: "New-Grad",
    jobLocation: "On-Site",
    date: "10/14/23",
    url: "https://jobs.netflix.com/jobs/291980521",
  },
];

type FilterCategories = "jobType" | "positionType" | "jobLocation";

interface Filters {
  jobType: ("full-time" | "part-time")[];
  positionType: ("New-Grad" | "Internship")[];
}

export default function FilterCard() {
  const [filteredJobs, setFilteredJobs] = useState(jobPostings);
  const [filters, setFilters] = useState<Record<FilterCategories, Set<string>>>(
    {
      jobType: new Set(),
      positionType: new Set(),
      jobLocation: new Set(),
    }
  );

  function handleFilter(category: FilterCategories, filter: string) {
    // see which filters the user has applied
    const newFilters = structuredClone(filters);

    if (newFilters[category].has(filter)) {
      newFilters[category].delete(filter);
    } else {
      newFilters[category].add(filter);
    }

    setFilters(newFilters);

    // only display the jobs based on the filters the user applied
    const newFilteredJobs = structuredClone(jobPostings);

    setFilteredJobs(structuredClone(newFilteredJobs));
  }
  
  return (
    <div className="mx-10">
      <div className="mb-10">
        <div className="">
          <input
            type="checkbox"
            checked={filters.jobType.has("Partime")}
            onChange={() => handleFilter("jobType", "Partime")}
          />
          <label htmlFor="part-time">Part Time</label>
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={filters.jobType.has("Fulltime")}
            onChange={() => handleFilter("jobType", "Fulltime")}
          />
          <label htmlFor="part-time">Fulltime</label>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {filteredJobs.map(({ title, company, jobType }, index) => (
          <div key={index} className="bg-gray-200 w-56 p-5">
            <h1>{title}</h1>
            <h2>{company}</h2>
            <p>{jobType}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
