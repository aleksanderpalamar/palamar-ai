# Build a Palamar-AI Plataform with Next.js 14, Typescript, TailwindCSS, Prisma, Stripe and Clerk.

This is a repository to build a Palamar-AI Plataform with Next.js 14, Typescript, TailwindCSS, Prisma, Stripe and Clerk. FullStack Application.

## Features:

- [x] Tailwind design
- [x] Tailwind animations and effects
- [x] Full Responsive Design
- [x] Clerk authentication (Google, Github, Email, ...)
- [x] Client form validation and handling using react-hook-form
- [x] Server error handling using react-toast
- [x] Image Generation Tool (Open AI)
- [x] Video Generation Tool (Replicate AI)
- [x] Conversation Generation Tool (Open AI)
- [x] Music Generation Tool (Replicate AI)
- [x] Page loading state
- [x] Stripe monthly subscription
- [x] Free tier with API limiting
- [x] How to write POST, DELETE, and GET routes in route handlers (app/api)
- [x] How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- [x] How to handle relations between Server and Child components!
- [x] How to reuse layouts
- [x] Folder structure in Next 14 App Router

## How to use:

```bash
  npm i
```

## Setup environment variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Setup Prisma:

Add MySQL Database (I used PlanetScale)

```bash
npx prisma db push
```

## Start the app:

```bash
npm run dev
```
