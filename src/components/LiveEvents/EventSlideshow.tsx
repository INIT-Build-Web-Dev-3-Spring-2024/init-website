import Image from 'next/image';
import { Event } from '../EventCard';
import LiveIndicator from './LiveIndicator';
import { IoIosArrowForward } from 'react-icons/io';

interface LiveEventProps {
  currentEvent: Event;
  onPrevious: any;
  isLive: boolean;
  QRImage: string;
}

const EventSlideshow = (props: LiveEventProps) => {
  return (
    <div className="relative mx-auto my-16 w-4/5 h-[350px] overflow-hidden rounded-lg bg-white text-white mb-0">
      {/* overlay gradient */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* background img */}
      <Image
        src={
          props.currentEvent.picture || '/assets/images/notionDefaultImage.jpeg'
        }
        alt="event background image"
        layout="fill"
        objectFit="cover"
        className="mix-blend-overlay"
      />
      {/* container */}
      <div className="absolute flex flex-col justify-between pt-1 p-4">
        {/* top of container */}
        <div className="flex items-center space-x-4 pl-16 py-4 justify-between">
          <h3 className="text-xl text-white px-2 py-1">
            {props.currentEvent.date}
          </h3>
          {props.isLive && <LiveIndicator />}
          {/* Register button and QR code container */}
          <div className="relative">
            <a
              href={props.currentEvent.rsvpLink}
              className="bg-white text-black py-1 px-4 rounded ml-auto hover:bg-gray-200"
            >
              Register
            </a>
            {/* QR code */}
            {props.QRImage && (
              <div
                className="absolute top-full left-1/2 mt-2"
                style={{ transform: 'translateX(-50%)' }}
              >
                <Image
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

        {/* midsection */}
        <div className="px-16 py-4 w-4/5">
          <h2 className="text-4xl leading-tight">{props.currentEvent.name}</h2>
          <p className="mt-2 leading-none ">{props.currentEvent.description}</p>
        </div>

        {/* bottom section */}
        <div className="flex justify-between items-center px-16 py-4">
          <button className="flex justify-between items-center text-black bg-white rounded-2xl p-2 w-52 hover:bg-gray-200">
            <p className="pl-1">More Info</p>

            <IoIosArrowForward className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventSlideshow;