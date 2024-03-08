import { NextRequest } from "next/server";
import { jobPostings } from "./jobPostings";

export async function POST(request: NextRequest) {
  return new Response(JSON.stringify(""), { status: 200 });
}

export async function GET(request: NextRequest) {
  return new Response(JSON.stringify(jobPostings), { status: 200 });
}
