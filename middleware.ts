import { NextRequest, NextResponse } from 'next/server';

// * route match
export const config = {
  matcher: '/',
};

export async function middleware(req: NextRequest) {
  const { geo, nextUrl: url } = req;

  const latitude = geo?.latitude || 37.579871128849;
  const longitude = geo?.longitude || 126.98935225645;
  const city = geo?.city || '서울시';

  url.searchParams.set('latitude', JSON.stringify(latitude));
  url.searchParams.set('longitude', JSON.stringify(longitude));
  url.searchParams.set('city', city);

  return NextResponse.rewrite(url);
}
