import { Event } from "@/components/EventCard";
import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import LiveIndicator from "./LiveIndicator";

interface LiveEventProps {
  currentEvent: Event;
  onPrevious: any;
  isLive: boolean;
  QRImage: string;
}

const EventSlideshow = (props: LiveEventProps) => {
  return (
    <div className="relative grid grid-cols-7 w-4/5 h-[350px] mx-auto rounded-lg p-10 overflow-hidden max-sm:h-fit max-sm:pr-0 max-sm:pb-0">
      <div className="absolute h-full w-full -z-10 bg-black/40">
        <Image
          src={"/images/icons/notionDefaultImage.jpeg"}
          alt="event background image"
          className="mix-blend-overlay object-cover"
          priority
          fill
        />
      </div>
      {props.isLive && (
        <div className="absolute pt-2 top-0 left-1/2 -translate-x-1/2">
          <LiveIndicator />
        </div>
      )}{" "}
      <div className="col-span-6 flex flex-col gap-10">
        <SubTitle className="text-xl px-2 py-1">
          {props.currentEvent.date}
        </SubTitle>

        <div>
          <SubTitle className="text-4xl leading-tight">
            {props.currentEvent.name}
          </SubTitle>
          <Text className="mt-2">{props.currentEvent.description}</Text>
        </div>

        <Link
          href={props.currentEvent.rsvpLink}
          className="flex justify-between items-center text-black bg-white rounded-2xl p-2 w-52 hover:bg-gray-200"
        >
          <Text className="pl-1">More Info</Text>
          <IoIosArrowForward className="text-lg" />
        </Link>
      </div>
      <div className="col-span-1 justify-self-end flex flex-col items-center gap-5 max-sm:self-end">
        <Link
          href={props.currentEvent.rsvpLink}
          className="bg-white text-black py-1 px-4 rounded ml-auto hover:bg-gray-200"
        >
          Register
        </Link>
        {props.QRImage && (
          <div className="relative h-20 w-20 ">
            <Image
              className="rounded"
              src={props.QRImage}
              alt="QR code"
              fill
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventSlideshow;
