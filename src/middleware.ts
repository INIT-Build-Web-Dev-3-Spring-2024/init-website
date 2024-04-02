import { NextResponse, type NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.nextUrl.origin);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
