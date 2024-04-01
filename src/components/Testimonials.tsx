import { MouseEventHandler, useState } from "react";
import Image from "next/image";
import GradientBorder from "./GradientBorder";
import { twMerge } from "tailwind-merge";

interface Person {
  index: number;
  name: string;
  avatarSrc: string;
  company: string;
  companyLogoSrc: string;
  position: string;
  review: string;
}

function ReviewAvatar({
  className,
  person,
  selectedIndex,
  onClick,
}: {
  className: string;
  person: Person;
  selectedIndex: number;
  onClick: MouseEventHandler;
}) {
  return (
    <GradientBorder className={twMerge(className, "p-1 rounded-full")} disabled={person.index !== selectedIndex}>
      <Image
        className="w-28 h-28 rounded-full"
        src={person.avatarSrc}
        alt={person.name}
        width="96"
        height="96"
        onClick={onClick}
      />
    </GradientBorder>
  );
}

function Review({ person }: { person: Person }) {
  return (
    <>
      <h1>{person.review}</h1>
    </>
  );
}

export default function Testimonials() {
  // if using links for images, make sure to add hostname to `next.config.js`
  const reviews = [
    {
      index: 0,
      name: "Person One",
      avatarSrc: "/images/reviews/personOne/personOneAvatar.svg",
      company: "TechGenius",
      companyLogoSrc: "/images/reviews/personOne/personOneCompany.svg",
      position: "Senior Innovation Strategist",
      review:
        "TechGenius provides an incredibly dynamic environment where I've grown more in a year than I did in five years at my previous job.",
    },
    {
      index: 1,
      name: "Person Two",
      avatarSrc: "/images/reviews/personTwo/personTwoAvatar.svg",
      company: "EcoSolutions",
      companyLogoSrc: "/images/reviews/personTwo/personTwoCompany.svg",
      position: "Chief Sustainability Officer",
      review:
        "Working at EcoSolutions has allowed me to make a real impact on the planet, driving meaningful changes in the industry.",
    },
    {
      index: 2,
      name: "Person Three",
      avatarSrc: "/images/reviews/personThree/personThreeAvatar.svg",
      company: "FinTech Global",
      companyLogoSrc: "/images/reviews/personThree/personThreeCompany.svg",
      position: "Blockchain Analyst",
      review:
        "FinTech Global is at the cutting edge of blockchain technology, offering unparalleled opportunities for personal and professional growth.",
    },
    {
      index: 3,
      name: "Person Four",
      avatarSrc: "/images/reviews/personFour/personFourAvatar.svg",
      company: "HealthVanguard",
      companyLogoSrc: "/images/reviews/personFour/personFourCompany.svg",
      position: "Digital Health Specialist",
      review:
        "At HealthVanguard, I'm part of a team that's revolutionizing healthcare through technology, improving patient outcomes worldwide.",
    },
    {
      index: 4,
      name: "Person Five",
      avatarSrc: "/images/reviews/personFive/personFiveAvatar.svg",
      company: "EdInnovate",
      companyLogoSrc: "/images/reviews/personFive/personFiveCompany.svg",
      position: "Learning Experience Designer",
      review:
        "Creating cutting-edge educational programs at EdInnovate has been a profoundly rewarding experience, shaping the future of learning.",
    },
    {
      index: 5,
      name: "Person Six",
      avatarSrc: "/images/reviews/personSix/personSixAvatar.svg",
      company: "CyberSecure",
      companyLogoSrc: "/images/reviews/personSix/personSixCompany.svg",
      position: "Cybersecurity Consultant",
      review:
        "CyberSecure is at the forefront of defending against digital threats, and I'm constantly challenged and engaged in my role here.",
    },
    {
      index: 6,
      name: "Person Seven",
      avatarSrc: "/images/reviews/personSeven/personSevenAvatar.svg",
      company: "GlobalLogistics",
      companyLogoSrc: "/images/reviews/personSeven/personSevenCompany.svg",
      position: "Supply Chain Analyst",
      review:
        "GlobalLogistics is transforming the supply chain industry, and I'm thrilled to contribute to such groundbreaking work.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleSelectedIndex(desiredIndex: number) {
    setSelectedIndex(desiredIndex);
  }

  // Review component, takes in the object at selectedIndex and loads in that review

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-5 grid-rows-3 justify-items-center gap-10">
        <ReviewAvatar
          person={reviews[0]}
          selectedIndex={selectedIndex}
          className="translate-x-0 translate-y-2 col-start-1 col-end-2"
          onClick={() => handleSelectedIndex(0)}
        />
        <ReviewAvatar
          person={reviews[1]}
          selectedIndex={selectedIndex}
          className="translate-x-0 translate-y-0 col-start-3 col-end-4"
          onClick={() => handleSelectedIndex(1)}
        />
        <ReviewAvatar
          person={reviews[2]}
          selectedIndex={selectedIndex}
          className="translate-x-0 translate-y-1 col-start-5 col-end-6"
          onClick={() => handleSelectedIndex(2)}
        />
        <ReviewAvatar
          person={reviews[3]}
          selectedIndex={selectedIndex}
          className="translate-x-0 translate-y-1 col-start-2 col-end-3"
          onClick={() => handleSelectedIndex(3)}
        />
        <ReviewAvatar
          person={reviews[4]}
          selectedIndex={selectedIndex}
          className="translate-x-0 translate-y-3 col-start-4 col-end-5"
          onClick={() => handleSelectedIndex(4)}
        />
        <ReviewAvatar
          person={reviews[5]}
          selectedIndex={selectedIndex}
          className="-translate-x-5 translate-y-0 col-start-1 col-end-2"
          onClick={() => handleSelectedIndex(5)}
        />
        <ReviewAvatar
          person={reviews[6]}
          selectedIndex={selectedIndex}
          className="translate-x-10 translate-y-0 col-start-5 col-end-6"
          onClick={() => handleSelectedIndex(6)}
        />
      </div>
      <div>
        <Review person={reviews[selectedIndex]}>hi</Review>
      </div>
    </div>
  );
}
