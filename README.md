# ADHD OS

ADHD OS is a mobile-first web app for ADHD students.

The goal is an adaptive personal assistant that helps users capture, organize,
plan, focus, remember, act, and recover without requiring them to constantly
manage a productivity system.

## Current stage

This repository is at the scaffold stage only.

The project exists to establish a clean, scalable foundation. No V1 features
are built yet. There is no universal capture system, no tasks, no goals, no
reminders, no planning, no focus mode, no notifications, no recovery flows,
no AI conversations, no onboarding survey, no advanced personalization, and
no gamification yet.

## What the scaffold gives us right now

- A Next.js project using the App Router and TypeScript
- A folder structure that separates UI, libraries, database/auth, and AI
- Supabase integration scaffolding for database, authentication, and
  server-side logic
- A server-side AI provider abstraction prepared for Groq and OpenRouter
- Environment variable configuration for services that will be added later
- A `doc/` directory for product and development context
- A basic placeholder page so the app can be run and checked

## Technology stack

- Next.js with the App Router
- TypeScript
- Supabase
- Supabase Auth
- Tailwind CSS
- GitHub for version control
- Vercel for deployment
- Groq as the initial AI provider
- OpenRouter as the AI gateway/multi-provider layer

## Architecture principles

- Next.js is the interface.
- Supabase is the database and memory layer.
- Supabase Auth handles identity and sessions.
- AI is a reasoning layer, not the product itself.
- Groq is the initial AI provider.
- OpenRouter provides the multi-provider/model layer.
- Sensitive work and API keys stay in server-side code only.
- GitHub manages source control.
- Vercel hosts and deploys the web application.
- The `doc/` folder stores the product context that will guide future
  development.

## Project structure at a glance

- `src/app/` — Next.js App Router pages and layouts
- `src/lib/` — libraries and services
  - `src/lib/supabase/` — Supabase clients and auth helpers
  - `src/lib/ai/` — AI provider abstraction and provider adapters
- `src/components/` — UI components
- `src/types/` — shared TypeScript types
- `src/hooks/` — custom React hooks
- `doc/` — product and development context
- `.env.example` — environment variable template

## Getting started

1. Copy `.env.example` to `.env.local`.
2. Fill in the environment variables for the services you want to use.
3. Install dependencies:
   - `npm install`
4. Run the development server:
   - `npm run dev`

Open the app in a browser. The placeholder page confirms that the project
runs.

## What this is not yet

This is not yet a usable ADHD OS product. It is a foundation prepared for the
work that comes next.
