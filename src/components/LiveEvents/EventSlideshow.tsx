import Image from "next/image";
import { Event } from "../EventCard";
import LiveIndicator from "./LiveIndicator";
import { IoIosArrowForward } from "react-icons/io";
import Text from "../Text";
import SubTitle from "../SubTitle";
import Link from "next/link";

interface LiveEventProps {
  currentEvent: Event;
  onPrevious: any;
  isLive: boolean;
  QRImage: string;
}

const EventSlideshow = (props: LiveEventProps) => {
  return (
    <div className="relative mx-auto my-16 w-4/5 h-[350px] overflow-hidden rounded-lg bg-white text-white mb-0">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <Image
        src={
          props.currentEvent.picture || "/images/icons/notionDefaultImage.jpeg"
        }
        alt="event background image"
        layout="fill"
        objectFit="cover"
        className="mix-blend-overlay"
      />
      <div className="absolute flex flex-col justify-between pt-1 p-4">
        <div className="flex items-center space-x-4 pl-16 py-4 justify-between">
          <SubTitle className="text-xl px-2 py-1">
            {props.currentEvent.date}
          </SubTitle>
          {props.isLive && <LiveIndicator />}
          <div className="relative">
            <Link
              href={props.currentEvent.rsvpLink}
              className="bg-white text-black py-1 px-4 rounded ml-auto hover:bg-gray-200"
            >
              Register
            </Link>
            {props.QRImage && (
              <div
                className="absolute top-full left-1/2 mt-2"
                style={{ transform: "translateX(-50%)" }}
              >
                <Image
                  className="rounded"
                  src={props.QRImage}
                  layout="responsive"
                  width={90}
                  height={90}
                  alt="QR code"
                />
              </div>
            )}
          </div>
        </div>
        <div className="px-16 py-4 w-4/5">
          <SubTitle className="text-4xl leading-tight">
            {props.currentEvent.name}
          </SubTitle>
          <Text className="mt-2">{props.currentEvent.description}</Text>
        </div>
        <div className="flex justify-between items-center px-16 py-4">
          <Link
            href={"https://google.com"}
            className="flex justify-between items-center text-black bg-white rounded-2xl p-2 w-52 hover:bg-gray-200"
          >
            <Text className="pl-1">More Info</Text>
            <IoIosArrowForward className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventSlideshow;
