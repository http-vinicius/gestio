import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('nextauth.token');

  const protectedRoutes = [
    '/dashboard',
    '/dashboard/agenda',
    '/dashboard/clientes',
    '/dashboard/historico',
    '/dashboard/configuracoes',
  ];

  const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);

  if (isProtectedRoute && !token) {
    const url = new URL('/', request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
