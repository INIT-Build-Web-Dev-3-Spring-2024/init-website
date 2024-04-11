import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import InitLogo from "./InitLogo";
import Text from "./Text";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-4">
      <hr className="border-t border-primary-gray w-[95%] my-8 mx-auto" />
      <div className="text-xs font-bold flex justify-between items-center w-full mb-8">
        <Text className="ml-10">&copy; copyright</Text>
        <InitLogo className="h-5" />
        <div className="flex">
          <Link href="https://discord.gg/init">
            <FaDiscord size="20px" className="mr-[17px]" />
          </Link>
          <Link href="https://www.linkedin.com/company/init-fiu">
            <FaLinkedin size="20px" className="mr-[17px]" />
          </Link>
          <Link href="https://www.instagram.com/init.fiu/">
            <FaInstagram size="20px" className="mr-[40px]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
