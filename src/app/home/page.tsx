import GradientBorder from "@/components/GradientBorder";
import { Title, AnimatedTitle } from "@/components/Title";
import Link from "next/link";
import fetchEvents from "../lib/fetchEvents";
import LiveEventsParent from "./(LiveEvents)";
import Mission from "./(Mission)";
import Sponsors from "./(Sponsors)";
import Testimonials from "./(Testimonials)";
import Blurb from "./Blurb";
import Carousel from "./Carousel";
import Numbers from "./Numbers";
import Image from "next/image";

const page = async () => {
  const events = await fetchEvents("", true);

  console.log(events);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 my-20">
        <Title>
          Your <AnimatedTitle>Tech</AnimatedTitle> Journey <br />
          is about to start
        </Title>

        <GradientBorder
          className="px-3 py-1 rounded-3xl cursor-pointer"
          animatedOnHover
        >
          <Link
            href="https://airtable.com/appkfpQOssQZfmORj/shrNlrSaT073i6fog"
            className="p-0"
          >
            Get INIT
          </Link>
        </GradientBorder>
      </div>

      <LiveEventsParent events={events} />

      <Sponsors />
      <Mission />
      <Testimonials />
      <Numbers />

      <Carousel />
      <Blurb />
    </>
  );
};

export default page;
