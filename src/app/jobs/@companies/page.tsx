import { headers } from "next/headers";
import { CompanyPosting } from "../../api/Events_Tracker/companyPosting";
import { JobPosting } from "../../api/Events_Tracker/jobPostings";
import CompanyCard from "./CompanyCard";
import JobButton from "./JobButton";

export default async function page() {
  const headersList = headers();

  const eventsRequest = await fetch(`${headersList.get("x-url")}/api/Events_Tracker/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = await eventsRequest.json();

  const companyPostings: CompanyPosting[] = res.companyPostings ?? [];

  console.log(companyPostings);

  return (
    <>
      <main className="min-h-screen">
        {/* Container to keep everything in line */}
        <div>
          {/* Filter Card and Jobs container */}
          {/* <div className="flex flex-col md:flex-row"> */}
          {/* Dropdown for small Screen sizes */}
          {/* <div className="mx-auto mb-8 md:hidden"></div> */}

          {/* Normal Screen Sizes */}
          {/* <div className="mr-[5%] hidden md:block"></div> */}

          {/* <div className="w-full"> */}
          <div className={`grid grid-cols-1 place-items-center min-[980px]:grid-cols-2 min-[1320px]:grid-cols-3  `}>
            {companyPostings.length === 0 ? (
              <p> No company postings available </p>
            ) : (
              companyPostings.map((company) => <CompanyCard key={company.id} {...company} />)
            )}
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
      </main>
    </>
  );
}
