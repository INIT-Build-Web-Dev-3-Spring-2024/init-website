import Image from 'next/image';
import { Event } from './EventCard';
import { useState } from 'react';

const EventSlideshow = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  // isLive boolean ?

  // dummy data for tsting
  const slides: Event[] = [
    {
      id: '1',
      name: 'Artificial Intelligence + Machine Learning workshop',
      rsvpLink: '',
      date: '03/28/2024',
      time: '3:00pm',
      picture: '/assets/images/notionDefaultImage.jpeg',

      location: 'GC',
      program: 'Build',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },

    {
      id: '2',
      name: 'Python Programming Crash Course',
      rsvpLink: '',
      date: '04/15/2024',
      time: '10:00 AM - 3:00 PM',
      picture: '/assets/images/default2notion.avif',
      location: 'Virtual',
      program: 'Reach',
      description:
        "Join us for a crash course on Python programming. Whether you're a beginner or looking to brush up your skills, this workshop will cover the fundamentals of Python programming language.",
    },
    {
      id: '3',
      name: 'UI/UX Design Workshop: Creating Engaging User Experiences',
      rsvpLink: '/assets/images/ui_ux_design_workshop_image.jpeg',
      date: '06/10/2024',
      time: '9:00 AM - 12:00 PM',
      picture: '',
      location: 'Design Studio',
      program: 'Build',
      description:
        'Learn the principles and techniques of UI/UX design in this hands-on workshop. From wireframing to prototyping, discover how to create engaging user experiences for your digital projects.',
    },
    {
      id: '4',
      name: 'Cybersecurity Awareness Seminar: Protecting Your Digital Identity',
      rsvpLink: '',
      date: '07/20/2024',
      time: '2:00 PM - 4:00 PM',
      picture: '',
      location: 'Conference Room A',
      program: 'Explore',
      description:
        'Join cybersecurity experts for a seminar on protecting your digital identity. Learn about common threats, best practices for online security, and how to safeguard your personal and professional information.',
    },
  ];

  const handleNextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % slides.length);
  };

  const handlePreviousEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Check if the event is live
  // dont know how the date look from the notion
  const isEventLive = (eventDate: string, eventTime: string) => {
    const currentDate = new Date().toLocaleDateString('en-CA');
    const currentTime = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return eventDate === currentDate && eventTime === currentTime;
  };

  return (
    <div className="relative mx-auto my-16 w-4/5 h-[346px] overflow-hidden rounded-lg text-white">
      {/* overlay gradient */}
      <div className="absolute inset-0 bg-black opacity-45"></div>
      {/* background img */}
      <Image
        src={
          slides[currentEvent].picture ||
          '/assets/images/notionDefaultImage.jpeg'
        }
        alt="event background image"
        layout="fill"
        objectFit="cover"
        className="mix-blend-overlay"
      />

      {/* container */}
      <div className="absolute inset-0 flex flex-col justify-between pt-1 p-4">
        {/* top of container */}

        <div className="flex items-center space-x-4 pl-16 py-4 justify-between">
          {/* convert time to words ?  */}
          <h3 className="text-xl text-white px-2 py-1">
            {slides[currentEvent].date}
          </h3>
          {slides[currentEvent].isLive && (
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
          <h2 className="text-4xl leading-tight">
            {slides[currentEvent].name}
          </h2>
          <p className="mt-2 leading-none ">
            {slides[currentEvent].description}
          </p>
        </div>

        {/* bottom section */}
        <div className="flex justify-between items-center px-16 py-4">
          <button className="text-black  bg-white rounded p-2">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventSlideshow;
