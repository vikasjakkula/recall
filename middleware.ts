import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Add paths that don't require authentication
const publicPaths = [
  '/auth/login',
  '/auth/register',
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/verify-otp'
]

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Check if the path is public
  if (publicPaths.some(p => path.startsWith(p))) {
    return NextResponse.next()
  }

  // Check for static files and API routes that don't need auth
  if (
    path.startsWith('/_next') || // Static files
    path.startsWith('/favicon.ico') ||
    path === '/' // Homepage
  ) {
    return NextResponse.next()
  }

  const token = request.cookies.get('session')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
} 