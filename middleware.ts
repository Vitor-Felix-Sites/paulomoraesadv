
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');

  if (hostname === 'paulomoraesadv.com.br') {
    const url = request.nextUrl.clone();
    url.hostname = 'www.paulomoraesadv.com.br';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', 
};
