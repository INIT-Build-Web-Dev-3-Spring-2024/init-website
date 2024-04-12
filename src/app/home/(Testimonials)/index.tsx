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
      name: "David Ulloa",
      avatarSrc: "/images/reviews/personOne/personOneAvatar.jpg",
      company: "Google",
      companyLogoSrc: "/images/reviews/personOne/personOneCompany.svg",
      position: "Incoming Google SWE Intern",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu urna gravida sem tempor efficitur vel nec tortor. Duis dictum.",
    },
    {
      index: 1,
      name: "Wissam Hassani",
      avatarSrc: "/images/reviews/personTwo/personTwoAvatar.jpg",
      company: "Salesforce",
      companyLogoSrc: "/images/reviews/personTwo/personTwoCompany.png",
      position: "Returning SWE Intern",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere, quam id tempor cursus, dui purus vehicula nulla, vitae rhoncus.",
    },
    {
      index: 2,
      name: "Robert Velasquez",
      avatarSrc: "/images/reviews/personThree/personThreeAvatar.jpg",
      company: "Netflix ",
      companyLogoSrc: "/images/reviews/personThree/personThreeCompany.svg",
      position: "Incoming SWE Intern",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget ligula bibendum, eleifend eros ut, accumsan purus. Sed at tellus.",
    },
    {
      index: 3,
      name: "Gian Pena",
      avatarSrc: "/images/reviews/personFour/personFourAvatar.jpg",
      company: "Capital One",
      companyLogoSrc: "/images/reviews/personFour/personFourCompany.svg",
      position: "TEIP intern",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, eros quis pretium hendrerit, ex urna fringilla metus, in blandit.",
    },
    {
      index: 4,
      name: "Dabian Garnica",
      avatarSrc: "/images/reviews/personFive/personFiveAvatar.jpg",
      company: "Blackstone",
      companyLogoSrc: "/images/reviews/personFive/personFiveCompany.svg",
      position: "Incoming Sprintern",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec ornare odio, ac dictum metus. Phasellus aliquam pretium finibus. Curabitur.",
    },
    {
      index: 5,
      name: "Ruth Velasquez",
      avatarSrc: "/images/reviews/personSix/personSixAvatar.jpg",
      company: "American Express",
      companyLogoSrc: "/images/reviews/personSix/personSixCompany.svg",
      position: "Incoming Sprintern",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at eros laoreet, vulputate urna in, finibus orci. Proin fermentum sodales.",
    },
    {
      index: 6,
      name: "Anncarolyne Power",
      avatarSrc: "/images/reviews/personSeven/personSevenAvatar.jpg",
      company: "TelevisaUnivision",
      companyLogoSrc: "/images/reviews/personSeven/personSevenCompany.svg",
      position: "Incoming sprintern",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam dignissim est quis ultrices. Fusce tristique congue vulputate. Nam eget.",
    },
    {
      index: 7,
      name: " Gabriel Pedroza",
      avatarSrc: "/images/reviews/personEight/personEightAvatar.jpg",
      company: "Meta",
      companyLogoSrc: "/images/reviews/personEight/personEightCompany.svg",
      position: "Returning SWE Intern",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in justo nec risus fringilla efficitur. Cras quis dolor elementum, hendrerit. ",
    },
    {
      index: 8,
      name: "Mridul Pahwa",
      avatarSrc: "/images/reviews/personNine/personNineAvatar.jpg",
      company: "Google",
      companyLogoSrc: "/images/reviews/personNine/personNineCompany.svg",
      position: "Incoming STEP Intern",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim felis, sodales dignissim tellus at, convallis fringilla ligula. Etiam vitae.",
    },
    {
      index: 9,
      name: "Gabriel Lucchesi",
      avatarSrc: "/images/reviews/personTen/personTenAvatar.jpg",
      company: "NVIDIA",
      companyLogoSrc: "/images/reviews/personTen/personTenCompany.svg",
      position: "Incoming SWE Intern",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem tortor, vulputate quis tempor sed, condimentum quis sem. Nunc in.",
    },
  ];

  const REVIEWS_LEN = reviews.length;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currRevs, setCurrRevs] = useState(reviews.slice(0, 7));
  const [unusedRevs, setUnusedRevs] = useState(
    reviews.slice(7, reviews.length)
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
