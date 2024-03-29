"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 pb-3">
      <div className="mx-auto w-full space-y-1 rounded bg-primary_yellow p-1.5 pt-2.5 text-primary md:flex md:items-center md:justify-between md:pt-1.5">
        <Link className="order-1 flex justify-center md:ml-4" href="/">
        <Image
            className="w-11"
            src="/assets/images/logo.svg"
            alt="Logo"
            width={300}
            height={120}
          />
        </Link>
        <Link
          className="hover:text-light_yellow order-3 mr-4 flex cursor-pointer items-center justify-center space-x-2 self-center whitespace-nowrap"
          href="mailto:team@weareinit.org"
        >
          <Image
          className="w-6"
          src='/assets/images/mailIcon.svg'
          alt="Mail"
          width={120}
          height={100}
          />
          <span className="md:text-md text-sm ">team@weareinit.org</span>
        </Link>
        <div className="order-2 flex cursor-default justify-center">
          <span className="mr-4 whitespace-nowrap text-sm text-primary">
            Copyright © 2024 INIT
          </span>
        </div>
      </div>
    </footer>
  );
}
