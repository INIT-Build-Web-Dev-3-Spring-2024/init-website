import { AnimatedTitle, Title } from "@/components/Title";
import JobInfo from "./JobInfo";
import InputAndFilters from "@/components/InputAndFilters";
import PositionsFilter from "./PositionsFilter";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Job } from "./JobInfo";
import { Suspense } from "react";

interface PageProps {
  searchParams?: {
    position?: string[];
    location?: string;
    type?: string;
    model?: string;
  };
}

const availablePositions = [
  "DevOps Engineer",
  "UI/UX Engineer",
  "Software Engineer (SWE)",
  "Back-end Developer",
  "Full-Stack Developer",
  "Product Manager",
  "Product Designer",
  "Marketing Coordinator",
  "Social Media Marketer",
];

const jobsArray: Job[] = [
  {
    id: 32423452,
    title: "Front-end Software Engineer",
    description:
      "Participate and learn how to do this and that with the web or even building robots and stuff like that. TECH TECH TECH.",
    roleDescription: `
      2+ years of experience working with IT systems, networks, and related technologies
      Excellent ability to install, administer and troubleshoot computer hardware, software
      Solid understanding of G-suite/Microsoft Office 365
      Experience with Okta
      Working knowledge of A/V conferencing systems (Zoom, Crestron)
      Customer service oriented, strong communication skills and ability to work in fact paced environment
      Excellent analytical and problem solving skills with attention to details
      Advanced troubleshooting and multi-tasking skills
      Knowledge in JAMF - advantage
      Exceptional organizational and time management skills`,
    salary: "$89k - 100k",
    level: "Junior Mid-level",
    modal: "Hybrid",
    company: {
      name: "Apple",
      tags: ["B2B", "SAAS", "Internal Tools"],
      logo: "/images/jobs/company/apple.svg",
    },
    startDate: "08/17/2024",
  },
  {
    id: 435343453423,
    title: "Back-end Software Engineer",
    description:
      "Join our team to develop and maintain the server-side logic of our web applications. TECH TECH TECH.",
    roleDescription: `
      3+ years of experience in backend development
      Strong understanding of server-side programming languages such as Node.js, Python, or Java
      Proficient in database management systems (SQL, NoSQL)
      Experience with cloud platforms such as AWS, Azure, or Google Cloud
      Familiarity with RESTful API design and development
      Ability to work collaboratively in a team environment
      Excellent problem-solving and debugging skills
      Good communication skills and ability to work under pressure
      Experience with containerization technologies (Docker, Kubernetes) is a plus
    `,
    salary: "$95k - 110k",
    level: "Mid-level",
    modal: "Remote",
    company: {
      name: "Google",
      tags: ["Tech Giant", "Cloud Services"],
      logo: "/images/jobs/company/google.svg",
    },
  },
  {
    id: 4325455426435234,
    title: "UX/UI Designer",
    description:
      "Design user interfaces for our web and mobile applications, ensuring a seamless and intuitive user experience.",
    roleDescription: `
      2+ years of experience in UI/UX design
      Proficient in design tools such as Adobe XD, Sketch, or Figma
      Strong understanding of user-centered design principles
      Ability to create wireframes, prototypes, and visual design components
      Collaborate with cross-functional teams including product managers, developers, and other designers
      Conduct user research and usability testing to gather feedback and iterate designs
      Stay updated on industry trends and best practices in UI/UX design
      Excellent communication and presentation skills
    `,
    salary: "$80k - 95k",
    level: "Junior Mid-level",
    modal: "On-site",
    company: {
      name: "Facebook",
      tags: ["Social Media", "Tech"],
      logo: "/images/jobs/company/facebook.svg",
    },
  },
];

export default function page({ searchParams }: PageProps) {
  console.log(searchParams);

  return (
    <>
      <div
        className={twMerge(
          "absolute w-screen h-screen -top-1/2 left-[40%] -translate-x-1/2 -z-50",
          "bg-gradient-radial from-primary-yellow/10 to-transparent to-55%"
        )}
      />

      <header className="mb-32 gap-20">
        <div className="relative py-20 mb-10 flex flex-col gap-10">
          <Image
            alt="background image"
            className="object-cover -z-10 opacity-20"
            src="/images/jobs/bg-image.png"
            fill
            priority
          />
          <Title>
            <AnimatedTitle>Opportunities</AnimatedTitle>
            <br /> for you
          </Title>

          <Suspense>
            <PositionsFilter positions={availablePositions} />
          </Suspense>
        </div>

        <div className="mx-auto w-[70%]">
          <Suspense>
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
          </Suspense>
        </div>
      </header>
      <section>
        <JobInfo jobs={jobsArray} />
      </section>
    </>
  );
}
