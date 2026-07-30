import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Only apply to /admin routes
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const basicAuth = req.headers.get('authorization');

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      // Decode base64 string
      const [user, pwd] = atob(authValue).split(':');

      // Check credentials
      if (user === 'zidani' && pwd === '250603') {
        return NextResponse.next();
      }
    }

    // Require authentication
    return new NextResponse('Autenticación Requerida', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Admin Panel"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
