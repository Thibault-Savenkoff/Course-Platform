import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth-token');

  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Optionnel : vérifier la validité du token
  // if (!isValidToken(token)) {
  //   const url = req.nextUrl.clone();
  //   url.pathname = '/login';
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}

// Appliquer le middleware à la route /docs
export const config = {
  matcher: '/docs/:path*',
};