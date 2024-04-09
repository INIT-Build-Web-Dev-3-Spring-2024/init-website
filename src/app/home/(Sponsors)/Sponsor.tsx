"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface SponsorProp {
    id: number;
    sponsors: string[];
    updateSponsors: (
        setUrl: React.Dispatch<React.SetStateAction<string>>,
        id: number
    ) => void;
    imageOrder: number[];
    changeSponsor: number;
}

const Sponsor = ({
    id,
    sponsors,
    imageOrder,
    updateSponsors,
    changeSponsor,
}: SponsorProp) => {
    const [url, setUrl] = useState(sponsors[imageOrder[id]]);

    useEffect(() => {
        if (imageOrder[changeSponsor] !== id) {
            return;
        }
        updateSponsors(setUrl, id);
    }, [changeSponsor, updateSponsors, id, imageOrder]);

    return (
        <div className="w-52 h-52 relative">
            <Image
                className={`${
                    imageOrder[changeSponsor] == id
                        ? "blur-3xl opacity-0"
                        : "opacity-100"
                } transition-all duration-1000 ease-linear object-contain`}
                src={url}
                alt="placeholder image"
                fill
            />
        </div>
    );
};

export default Sponsor;
