'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ALLOWED_DOMAINS, APP_INFO } from '@/config'

export default function AuthError() {
  const searchParams = useSearchParams()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Authentication Error
          </h2>
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Access Denied
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  Your Google account domain is not authorized to access {APP_INFO.title}.
                </p>
                <p className="mt-2">
                  Please use a Google account from one of the following authorized domains:
                </p>
                <ul className="mt-2 list-disc list-inside">
                  {(ALLOWED_DOMAINS.length > 0 ? ALLOWED_DOMAINS : ['example.com', 'anotherdomain.org']).map((domain) => (
                    <li key={domain}>{domain}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/auth/signin"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  )
}