import { AnimatedTitle, Title } from "@/components/Title";
import JobInfo from "./JobInfo";
import Qualifications from "./Qualifications";
import InputAndFilters from "@/components/InputAndFilters";
import PositionsFilter from "./PositionsFilter";

export default function page() {
  return (
    <>
      <header className="my-20 flex flex-col gap-20">
        <Title className="">
          <AnimatedTitle>Opportunities</AnimatedTitle>
          <br /> for you
        </Title>

        <PositionsFilter />

        <div className="mx-auto w-[70%]">
          <InputAndFilters
            placeholder="Search by name or type"
            filters={[
              {
                name: "Location",
                options: ["Seattle", "Arlington", "Chicago"],
              },
              {
                name: "Type",
                options: ["Full Time", "Part Time", "Internship"],
              },
              {
                name: "Model",
                options: ["In person", "Hybrid", "Remote"],
              },
            ]}
          />
        </div>
      </header>

      <section>
        <JobInfo
          title="Frond-end Software Engineer"
          description="Participate and learn how to do this and that with the web or even building robots and stuff like that. TECH TECH TECH."
          salary="$89k - 100k"
          level="Junior Mid-level"
          modal="Hybrid"
          company={{
            name: "apple",
            tags: ["B2B", "SAAS", "Internal Tools"],
            logo: "/images/jobs/company/Apple.png",
          }}
        />
      </section>

      <section>
        <Qualifications />
      </section>
    </>
  );
}
