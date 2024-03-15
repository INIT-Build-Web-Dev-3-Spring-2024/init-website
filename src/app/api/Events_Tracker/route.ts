import { NextRequest } from "next/server";
import { jobPostings } from "./jobPostings";
import { companyPostings } from "./companyPosting";

export async function POST(request: NextRequest) {
  return new Response(JSON.stringify(""), { status: 200 });
}

export async function GET(request: NextRequest) {
  return new Response(JSON.stringify({ companyPostings, jobPostings }), {
    status: 200,
  });
}
