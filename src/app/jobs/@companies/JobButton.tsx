"use client";
import Link from "next/link";
import Router, { useRouter } from "next/router";

export default function JobButton() {
  return (
    <div>
      <Link href="/jobs">
        <div className="hover:bg-light-yellow inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary_yellow px-3 py-2 text-sm font-semibold text-black transition-all hover:bg-light_yellow focus:outline-none focus:ring-2 focus:ring-light_yellow md:w-auto lg:px-4 lg:py-3">
          Group by company
        </div>
      </Link>
    </div>
  );
}
