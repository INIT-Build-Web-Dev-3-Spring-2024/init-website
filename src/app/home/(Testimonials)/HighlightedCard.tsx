import Image from "next/image";
import { type User } from "./Avatar";
import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";
import { twMerge } from "tailwind-merge";

interface HighLightedCardProps {
  user: User;
}

export default function HighlightedCard({ user }: HighLightedCardProps) {
  return (
    <section className="flex flex-col items-center w-full">
      <Image
        width="166"
        height="166"
        src={user.avatarSrc}
        alt={user.name}
        className="translate-y-7"
      />
      <div
        className={twMerge(
          "flex flex-col items-center p-10 gap-5 rounded-3xl h-fit border border-secondary-gray w-[90%]",
          "bg-gradient-to-b from-page to-page-dark/50",
        )}
      >
        <div className="relative w-16 h-16">
          <Image
            src={user.companyLogoSrc}
            alt={`${user.companyLogoSrc} logo`}
            className="object-cover"
            fill
          />
        </div>

        <SubTitle className="font-bold text-lg">{`${user.position} at ${user.company}`}</SubTitle>
        <Text className="text-center leading-8 opacity-60">
          &ldquo;{user.review} Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Blanditiis, deleniti qui! Alias sapiente fugiat at
          est explicabo optio, vero ipsa dolores necessitatibus nulla maxime
          itaque tempore beatae voluptates cumque accusamus?&rdquo;
        </Text>
        <SubTitle className="font-semibold text-lg">- {user.name}</SubTitle>
      </div>
    </section>
  );
}
