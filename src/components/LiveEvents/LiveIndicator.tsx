import React from 'react';
import { IoMdRadioButtonOn } from 'react-icons/io'; // Import the icon

const LiveIndicator = () => {
  return (
    <div className="m-0 flex items-center">
      <IoMdRadioButtonOn className="text-red-500" size="1em" />
      <span className="ml-1 text-white">Live</span>
    </div>
  );
};

export default LiveIndicator;
