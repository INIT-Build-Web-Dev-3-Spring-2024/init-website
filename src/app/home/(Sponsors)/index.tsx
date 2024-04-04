import React from "react";
import Sponsor from "./Sponsor";

const Sponsors = () => {
    const sponsors = [
        "/images/placehold-400.svg",
        "/images/placehold-400X380.svg",
        "/images/placehold-500X250.svg",
        "/images/placehold-550X450.svg",
        "/images/placehold.svg",
    ];

    // const [showedSponsers, setShowedSponsers] = useState<string[]>([]);

    return (
        <div>
            <div className="flex">
                {sponsors.map((url) => (
                    <Sponsor key={url} url={url} />
                ))}
            </div>
        </div>
    );
};

export default Sponsors;
