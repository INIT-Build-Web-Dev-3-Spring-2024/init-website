"use client";

import React from "react";
import { Title, AnimatedTitle } from "@/components/Title";
import Text from "@/components/Text";
import Button from "@/components/Button";
import SubTitle from "@/components/SubTitle";

const Insight = () => {
  return (
    <>
      <div className="mx-auto my-12 w-3/5 max-w-screen-xl">
        <SubTitle className="text-3xl font-bold mb-3">Get to know us</SubTitle>
        <Text>
          Our cross-disciplinary team combines strategy, branding, UX design,
          and technology for swift, impactful results. Working as one team with
          our clients, we merge human creativity with AI-driven efficiency to
          consistently exceed expectations.
        </Text>
      </div>
      <Title className="mx-auto mt-20 mb-10 w-3/5 max-w-screen-xl">
        Join <AnimatedTitle>INIT</AnimatedTitle> and get involved in the
        Community
      </Title>
      <Button
        className="mx-auto rounded-xl my-10"
        borderGradient={"always"}
        href="https://airtable.com/appkfpQOssQZfmORj/shrNlrSaT073i6fog"
      >
        Get INIT
      </Button>
    </>
  );
};

export default Insight;
