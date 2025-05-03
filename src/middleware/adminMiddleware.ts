import { NextRequest, NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';

export async function middleware(req: NextRequest) {
  const session = await getSession({ req });

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next();
}

export const config = { matcher: ['/dashboard/admin/:path*'] };
