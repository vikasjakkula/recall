import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

export async function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export async function createSession(userId: string): Promise<string> {
  const token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(new TextEncoder().encode(JWT_SECRET))
  
  return token
}

export async function verifySession(token: string): Promise<{ userId: string } | null> {
  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))
    return verified.payload as { userId: string }
  } catch (error) {
    return null
  }
}

export async function setSessionCookie(token: string) {
  cookies().set('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 // 24 hours
  })
}

export async function getSessionToken(): Promise<string | undefined> {
  return cookies().get('session')?.value
}

export async function clearSession() {
  cookies().delete('session')
}

export async function requireAuth() {
  const token = await getSessionToken()
  if (!token) {
    throw new Error('Unauthorized')
  }
  
  const session = await verifySession(token)
  if (!session) {
    throw new Error('Invalid session')
  }
  
  return session
} 