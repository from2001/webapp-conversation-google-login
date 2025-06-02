# DevContainer Configuration

This directory contains the DevContainer configuration for the Webapp Conversation project.

## What's Included

- **Base Image**: TypeScript Node.js container with Node.js 18
- **Extensions**: 
  - Tailwind CSS IntelliSense
  - ESLint
  - TypeScript support
  - i18n Ally for internationalization
  - Code spell checker
- **Features**: Git and GitHub CLI
- **Port Forwarding**: Port 3000 for the Next.js development server
- **Auto Setup**: Runs `npm install` when container is created

## Usage

1. Open the project in VS Code
2. Install the Dev Containers extension
3. Click "Reopen in Container" when prompted, or use Command Palette -> "Dev Containers: Reopen in Container"
4. Wait for the container to build and dependencies to install
5. Run `npm run dev` to start the development server

The container will automatically forward port 3000, so you can access the app at http://localhost:3000.