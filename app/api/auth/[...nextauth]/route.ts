import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import type { NextAuthOptions } from 'next-auth'

const allowedDomains = process.env.ALLOWED_DOMAINS?.split(',') || []

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google' && user?.email) {
        const domain = user.email.split('@')[1]
        if (allowedDomains.length > 0 && !allowedDomains.includes(domain))
          return false
      }
      return true
    },
    async session({ session }) {
      if (session?.user?.email) {
        const domain = session.user.email.split('@')[1]
        session.user = {
          ...session.user,
          domain,
        }
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }