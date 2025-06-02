import { type NextRequest } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { ChatClient } from 'dify-client'
import { v4 } from 'uuid'
import { API_KEY, API_URL, APP_ID } from '@/config'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const userPrefix = `user_${APP_ID}:`

export const getInfo = async (request: NextRequest) => {
  const session = await getServerSession(authOptions)

  // If user is authenticated, use their email as identifier
  if (session?.user?.email) {
    const sessionId = `auth_${session.user.email}`
    const user = userPrefix + sessionId
    return {
      sessionId,
      user,
      isAuthenticated: true,
      userEmail: session.user.email,
    }
  }

  // Fallback for non-authenticated users (should not happen with middleware)
  const sessionId = request.cookies.get('session_id')?.value || v4()
  const user = userPrefix + sessionId
  return {
    sessionId,
    user,
    isAuthenticated: false,
  }
}

export const setSession = (sessionId: string) => {
  return { 'Set-Cookie': `session_id=${sessionId}` }
}

export const client = new ChatClient(API_KEY, API_URL || undefined)
