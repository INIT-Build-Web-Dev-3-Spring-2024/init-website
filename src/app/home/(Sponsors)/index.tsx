'use client'
import { useEffect, useState } from 'react'
import Sponsor from './Sponsor'

const Sponsors = () => {
  const sponsors = [
    '/images/sponsors/Assurant.svg',
    '/images/sponsors/Bloomberg.svg',
    '/images/sponsors/CapitalOne.svg',
    '/images/sponsors/Codepath.svg',
    '/images/sponsors/Figma.svg',
    '/images/sponsors/Google.svg',
    '/images/sponsors/HPCC.svg',
    '/images/sponsors/Lyft.svg',
    '/images/sponsors/Meta.svg',
    '/images/sponsors/Microsoft.svg',
    '/images/sponsors/nvidia.svg',
    '/images/sponsors/StateFarm.svg',
  ]
  const howMuchSponsorsToShow = 8

  const [nextPos, setNextPos] = useState<number>(howMuchSponsorsToShow % sponsors.length)

  const [changeSponsor, setChangeSponsor] = useState<number>(-1)

  function shuffleArray(array: any[]) {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  let [imageOrder, setImageOrder] = useState<number[]>(Array.from({ length: howMuchSponsorsToShow }, (_, index) => index))

  // On mount shuffle the array and
  useEffect(() => {
    shuffleArray(imageOrder)
    setImageOrder(imageOrder)
    // Delay for when the sponsor swap should start
    setTimeout(() => {
      setChangeSponsor(0)
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getNextUrl = () => {
    if (!sponsors) {
      return ''
    }
    const res = sponsors[nextPos % sponsors.length]
    setNextPos(nextPos + 1)
    return res
  }

  const updateSponsors = (setUrl: React.Dispatch<React.SetStateAction<string>>, id: number) => {
    // Delay for when the current image gets swapped out on the screen, should be longer than the transition duration of the image
    setTimeout(() => {
      setUrl(getNextUrl())
      setChangeSponsor(-1)
      // Delay for when the process of the next image getting swapped out begins
      setTimeout(() => setChangeSponsor((id + 1) % howMuchSponsorsToShow), 5000)
    }, 1200)
  }

  return (
    <div className="mt-20 px-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {[...Array(howMuchSponsorsToShow)].map((_, index) => (
          <Sponsor
            key={index}
            id={index}
            updateSponsors={updateSponsors}
            imageOrder={imageOrder}
            sponsors={sponsors}
            changeSponsor={changeSponsor}
          />
        ))}
      </div>
      <button
        className="mt-10 mx-auto block bg-[#e2e2e2] text-black py-1 px-3 rounded-md"
        onClick={() => {
          alert('Figure out url')
          console.log('Figure out url')
        }}
      >
        <div className="mx-auto">Partner With Us</div>
      </button>
    </div>
  )
}

export default Sponsors
