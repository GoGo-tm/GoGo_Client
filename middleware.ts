import { NextRequest, NextResponse } from "next/server";

// * route match
export const config = {
  matcher: "/",
};

export async function middleware(req: NextRequest) {
  const { geo, nextUrl: url } = req;

  // * default value
  // * ex) 서울역
  const latitude = geo?.latitude || 37.5;
  const longitude = geo?.longitude || 122.123123;

  url.searchParams.set("latitude", JSON.stringify(latitude));
  url.searchParams.set("longitude", JSON.stringify(longitude));

  return NextResponse.rewrite(url);
}
