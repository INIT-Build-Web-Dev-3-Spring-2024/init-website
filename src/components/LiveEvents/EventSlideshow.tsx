import Image from 'next/image';
import { Event } from '../EventCard';

interface LiveEventProps {
  currentEvent: Event;
  onNext: any;
  onPrevious: any;
  isLive: boolean;
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
          {/* convert time to words ?  */}
          <h3 className="text-xl text-white px-2 py-1">
            {props.currentEvent.date}
          </h3>
          {/* boolean or function to check if curr event is live  */}

          {props.isLive && (
            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
              Live
            </span>
          )}

          {/* <div className="justify-self-end" id="far right"> */}
          {/* register button */}
          <button className="bg-white text-black py-1 px-4 rounded ml-auto">
            Register
          </button>
          {/* </div> */}
        </div>

        {/* midsection */}
        <div className="px-16 py-4 w-4/5">
          <h2 className="text-4xl leading-tight">{props.currentEvent.name}</h2>
          <p className="mt-2 leading-none ">{props.currentEvent.description}</p>
        </div>

        {/* bottom section */}
        <div className="flex justify-between items-center px-16 py-4">
          <button className="text-black bg-white rounded p-2">More info</button>
        </div>
      </div>
    </div>
  );
};

export default EventSlideshow;
