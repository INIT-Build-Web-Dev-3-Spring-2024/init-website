import { NextRequest } from "next/server";
import { companyPostings } from "./companyPosting";
import { PrismaClient } from "@prisma/client";

export async function POST(request: NextRequest) {
  return new Response(JSON.stringify(""), { status: 200 });
}

export async function GET(request: NextRequest) {
  const prisma = new PrismaClient();
  try {
    const allJobPostings = await prisma.jobPosting.findMany();
    return new Response(JSON.stringify({ companyPostings, jobPostings: allJobPostings }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
