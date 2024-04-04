import Image from "next/image";
import React from "react";

interface SponsorProp {
    url: string;
}

const Sponsor = ({ url }: SponsorProp) => {
    return (
        <div className="w-72 h-80 relative">
            <Image
                src={url}
                alt="placeholder image"
                fill
                // width={"100"}
                // height={"100"}
            />
        </div>
    );
};

export default Sponsor;
