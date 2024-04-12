"use client";

import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import HighlightedCard from "./HighlightedCard";

function getRandomNum(max: number) {
  return Math.floor(Math.random() * max);
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
    {
      index: 7,
      name: "Person Eight",
      avatarSrc: "/images/reviews/personEight/personEightAvatar.svg",
      company: "QuantumLeap",
      companyLogoSrc: "/images/reviews/personEight/personEightCompany.svg",
      position: "Quantum Computing Engineer",
      review:
        "At QuantumLeap, I'm working with some of the brightest minds to solve complex problems using quantum computing.",
    },
    {
      index: 8,
      name: "Person Nine",
      avatarSrc: "/images/reviews/personNine/personNineAvatar.svg",
      company: "GreenArchitects",
      companyLogoSrc: "/images/reviews/personNine/personNineCompany.svg",
      position: "Sustainable Design Architect",
      review:
        "GreenArchitects is pioneering in sustainable building designs, and it's inspiring to contribute to eco-friendly architecture.",
    },
    {
      index: 9,
      name: "Person Ten",
      avatarSrc: "/images/reviews/personTen/personTenAvatar.svg",
      company: "DataDive",
      companyLogoSrc: "/images/reviews/personTen/personTenCompany.svg",
      position: "Data Science Lead",
      review:
        "DataDive is a data enthusiast's paradise, offering endless opportunities to uncover insights and drive innovation.",
    },
    {
      index: 10,
      name: "Person Eleven",
      avatarSrc: "/images/reviews/personEleven/personElevenAvatar.svg",
      company: "NutriGrow",
      companyLogoSrc: "/images/reviews/personEleven/personElevenCompany.svg",
      position: "Agricultural Biotechnologist",
      review:
        "NutriGrow is revolutionizing agriculture with biotech, and I'm proud to be part of creating sustainable food solutions.",
    },
    {
      index: 11,
      name: "Person Twelve",
      avatarSrc: "/images/reviews/personTwelve/personTwelveAvatar.svg",
      company: "MindMesh",
      companyLogoSrc: "/images/reviews/personTwelve/personTwelveCompany.svg",
      position: "AI Psychologist",
      review:
        "Working at MindMesh to develop empathetic AI is an exciting blend of technology and psychology, offering fresh challenges daily.",
    },
    {
      index: 12,
      name: "Person Thirteen",
      avatarSrc: "/images/reviews/personThirteen/personThirteenAvatar.svg",
      company: "CleanOcean",
      companyLogoSrc:
        "/images/reviews/personThirteen/personThirteenCompany.svg",
      position: "Marine Conservation Strategist",
      review:
        "At CleanOcean, my work on marine conservation projects is deeply fulfilling and contributes to vital environmental protection.",
    },
    {
      index: 13,
      name: "Person Fourteen",
      avatarSrc: "/images/reviews/personFourteen/personFourteenAvatar.svg",
      company: "SkyInnovations",
      companyLogoSrc:
        "/images/reviews/personFourteen/personFourteenCompany.svg",
      position: "Aerospace Design Engineer",
      review:
        "SkyInnovations is pushing the boundaries of aerospace technology, and I'm thrilled to be part of such an ambitious team.",
    },
    {
      index: 14,
      name: "Person Fifteen",
      avatarSrc: "/images/reviews/personFifteen/personFifteenAvatar.svg",
      company: "UrbanEco",
      companyLogoSrc: "/images/reviews/personFifteen/personFifteenCompany.svg",
      position: "Urban Planner",
      review:
        "UrbanEco's commitment to sustainable urban development is unmatched, and I'm learning and contributing to real change.",
    },
    {
      index: 15,
      name: "Person Sixteen",
      avatarSrc: "/images/reviews/personSixteen/personSixteenAvatar.svg",
      company: "GeneEdit",
      companyLogoSrc: "/images/reviews/personSixteen/personSixteenCompany.svg",
      position: "Genetic Engineer",
      review:
        "GeneEdit is at the cutting edge of genetic engineering, offering unparalleled opportunities to be at the forefront of medical innovation.",
    },
    {
      index: 16,
      name: "Person Seventeen",
      avatarSrc: "/images/reviews/personSeventeen/personSeventeenAvatar.svg",
      company: "FutureFinance",
      companyLogoSrc:
        "/images/reviews/personSeventeen/personSeventeenCompany.svg",
      position: "Cryptocurrency Analyst",
      review:
        "At FutureFinance, delving into the world of cryptocurrencies offers an exciting and ever-evolving financial landscape to explore.",
    },
    {
      index: 17,
      name: "Person Eighteen",
      avatarSrc: "/images/reviews/personEighteen/personEighteenAvatar.svg",
      company: "VRVisions",
      companyLogoSrc:
        "/images/reviews/personEighteen/personEighteenCompany.svg",
      position: "Virtual Reality Developer",
      review:
        "Creating immersive virtual worlds at VRVisions is as thrilling as it is technically challenging.",
    },
    {
      index: 18,
      name: "Person Nineteen",
      avatarSrc: "/images/reviews/personNineteen/personNineteenAvatar.svg",
      company: "RoboCraft",
      companyLogoSrc:
        "/images/reviews/personNineteen/personNineteenCompany.svg",
      position: "Robotics Engineer",
      review:
        "RoboCraft is defining the future of robotics, and being part of this journey is incredibly rewarding and exciting.",
    },
    {
      index: 19,
      name: "Person Twenty",
      avatarSrc: "/images/reviews/personTwenty/personTwentyAvatar.svg",
      company: "NextGenEdu",
      companyLogoSrc: "/images/reviews/personTwenty/personTwentyCompany.svg",
      position: "Educational Technologist",
      review:
        "At NextGenEdu, I'm part of a team that's reimagining how technology can transform education, making it more accessible and engaging for everyone.",
    },
  ];

  const REVIEWS_LEN = reviews.length;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currRevs, setCurrRevs] = useState(reviews.slice(0, 7));
  const [unusedRevs, setUnusedRevs] = useState(
    reviews.slice(7, reviews.length),
  );
  const [animationState, setAnimationState] = useState({
    fadeInIndex: REVIEWS_LEN,
    fadeOutIndex: REVIEWS_LEN,
  });

  function handleSelectedIndex(desiredIndex: number) {
    setSelectedIndex(desiredIndex);
  }

  // Every 10 seconds, change a review to one not currently shown
  useEffect(() => {
    const switchReview = setInterval(() => {
      let currRan = getRandomNum(6);
      const unusedRan = getRandomNum(REVIEWS_LEN - 8);

      // if currRan is currently the index that's selected, increment or decrement it
      if (currRan === selectedIndex) {
        if (selectedIndex > 0) {
          currRan -= 1;
        } else {
          currRan += 1;
        }
      }

      // Fade out current avatar
      setAnimationState((prev) => ({
        ...prev,
        fadeInIndex: REVIEWS_LEN,
        fadeOutIndex: currRan,
      }));

      // Wait for fade out animation to complete
      setTimeout(() => {
        // Swap reviews
        const currRevsCopy = [...currRevs];
        const unusedRevsCopy = [...unusedRevs];

        const temp = currRevsCopy[currRan];
        currRevsCopy[currRan] = unusedRevsCopy[unusedRan];
        unusedRevsCopy[unusedRan] = temp;

        // Fade in current avatar and update reviews
        setAnimationState((prev) => ({
          ...prev,
          fadeInIndex: currRan,
          fadeOutIndex: REVIEWS_LEN,
        }));
        setCurrRevs(currRevsCopy);
        setUnusedRevs(unusedRevsCopy);
      }, 1000); // Make sure this is as long as fadeOut animation
    }, 10000);

    return () => {
      clearInterval(switchReview);
    };
  }, [selectedIndex, REVIEWS_LEN, currRevs, unusedRevs]);

  const styles = [
    "translate-x-0 translate-y-3 col-start-1 col-end-2 max-sm:col-start-1 max-sm:col-end-2 max-sm:translate-y-0",
    "translate-x-0 translate-y-0 col-start-3 col-end-4 max-sm:col-start-2 max-sm:col-end-3",
    "translate-x-0 translate-y-1 col-start-5 col-end-6  max-sm:col-start-1 max-sm:col-end-2 max-sm:translate-y-0",
    "translate-x-0 translate-y-1 col-start-2 col-end-3  max-sm:col-start-2 max-sm:col-end-3 max-sm:translate-y-0",
    "translate-x-0 translate-y-6 col-start-4 col-end-5  max-sm:col-start-1 max-sm:col-end-2 max-sm:translate-y-0",
    "-translate-x-5 translate-y-0 col-start-1 col-end-2  max-sm:col-start-2 max-sm:col-end-3 max-sm:translate-x-0",
    "translate-x-10 translate-y-0 col-start-5 col-end-6  max-sm:col-start-1 max-sm:col-end-2 max-sm:translate-x-20",
  ];

  // make sure to add a translate property, even if it's 0, so it fills out nicely
  return (
    <div className="flex flex-col justify-center items-center mb-44">
      <div className="grid grid-cols-5 grid-rows-3 justify-items-center gap-x-12 max-sm:grid-cols-2 max-sm:grid-rows-5 max-sm:gap-y-12">
        {styles.map((style, index) => (
          <Avatar
            key={style}
            user={currRevs[index]}
            avatarIndex={index}
            selectedIndex={selectedIndex}
            animationState={animationState}
            className={style}
            onClick={() => handleSelectedIndex(index)}
          />
        ))}
      </div>
      <HighlightedCard user={currRevs[selectedIndex]} />
    </div>
  );
}