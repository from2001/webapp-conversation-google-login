# Google Authentication Setup

This application now includes Google authentication with domain-based access restriction. To complete the setup:

## 1. Google Cloud Console Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API or Google Identity API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set the application type to "Web application"
6. Add authorized redirect URIs:
   - For development: `http://localhost:3000/api/auth/callback/google`
   - For production: `https://yourdomain.com/api/auth/callback/google`
7. Copy the Client ID and Client Secret

## 2. Environment Variables

Create a `.env.local` file with the following variables:

```bash
# APP Configuration (existing)
NEXT_PUBLIC_APP_ID=your-app-id
NEXT_PUBLIC_APP_KEY=your-app-key
NEXT_PUBLIC_API_URL=https://api.dify.ai/v1

# Google OAuth Configuration (new)
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
NEXTAUTH_SECRET=a-random-secret-string-32-chars-min
NEXTAUTH_URL=http://localhost:3000

# Allowed domains (new)
ALLOWED_DOMAINS=example.com,anotherdomain.org
```

## 3. Domain Configuration

Update the `ALLOWED_DOMAINS` environment variable with the comma-separated list of domains you want to allow access. Only users with Google accounts from these domains will be able to sign in.

## 4. NextAuth Secret

Generate a random secret for `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

## Features Implemented

- ✅ Google OAuth authentication only
- ✅ Domain-based access restriction
- ✅ Clear error messages for unauthorized domains
- ✅ Display of allowed domains on login screen
- ✅ User menu with logout functionality
- ✅ Session management integrated with existing chat system
- ✅ Middleware protection for all routes except auth pages

## Usage

1. Users will be redirected to the login page when accessing the application
2. They can only sign in with Google accounts
3. If their domain is not in the allowed list, they'll see an error message
4. Successfully authenticated users can use all existing chat features
5. Users can logout using the user menu in the header