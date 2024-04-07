import Image from "next/image";
import { type User } from "./Avatar";

export default function HighlightedCard({ person }: { person: User }) {
  return (
    <section className="flex flex-col items-center">
      <Image
        width="166"
        height="166"
        src={person.avatarSrc}
        alt={person.name}
        className="translate-y-7"
      />
      <div className="flex flex-col items-center p-10 pb-20 gap-2 rounded-[3rem] min-h-[450px] bg-[#100820]">
        <Image
          width="116"
          height="116"
          src={person.companyLogoSrc}
          alt={`${person.companyLogoSrc} logo`}
        />
        <h1 className="font-bold text-lg pb-3">{`${person.position} at ${person.company}`}</h1>
        <h1 className="font-extralight text-3xl text-center max-w-4xl">{`"${person.review}"`}</h1>
        <h1 className="font-semibold text-lg">{`- ${person.name}`}</h1>
      </div>
    </section>
  );
}
