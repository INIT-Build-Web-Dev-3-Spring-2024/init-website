'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface SponsorProp {
  id: number
  sponsors: string[]
  updateSponsors: (setUrl: React.Dispatch<React.SetStateAction<string>>, id: number) => void
  imageOrder: number[]
  changeSponsor: number
}

const Sponsor = ({ id, sponsors, imageOrder, updateSponsors, changeSponsor }: SponsorProp) => {
  const [url, setUrl] = useState(sponsors[imageOrder[id]])
  const [isBlurred, setIsBlurred] = useState(false)

  useEffect(() => {
    if (imageOrder[changeSponsor] !== id) {
      return
    }
    setIsBlurred(true)
    setTimeout(() => {
      updateSponsors(setUrl, id)
      setTimeout(() => {
        setIsBlurred(false)
      }, 100) // Adjust the delay for the blur-in effect
    }, 1000) // Adjust the delay for the blur-out effect
  }, [changeSponsor, updateSponsors, id, imageOrder])

  return (
    <div className="w-auto h-28 relative">
      <Image
        className={`${
          imageOrder[changeSponsor] == id ? 'blur-xl opacity-0' : 'blur-0 opacity-100'
        } transition-all duration-1000 ease-linear object-contain filter brightness-0 invert`}

        src={url}
        alt="placeholder image"
        fill
      />
    </div>
  );
};

export default Sponsor;
