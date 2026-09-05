# ADHD OS

An adaptive personal assistant built for ADHD students.

ADHD OS helps students manage the things they’re trying to do, remember, and become, without making them constantly manage another productivity system.

## The Idea

Most productivity tools expect you to organize everything, keep up with routines, and maintain the system consistently.

ADHD OS takes a different approach:

> **You dump things in. The system helps make sense of them.**

It can ask for missing context, help decide what matters now, remember things for you, and give small, timely nudges without overwhelming you.

You can still see and organize everything whenever you want.

## V1

The first version focuses on one experience:

**Capture → Clarify → Plan → Focus → Nudge → Act → Recover**

The goal isn't perfect productivity.

It's helping an ADHD student make meaningful progress, remember things they normally forget, and get back on track after rough days.

## Status

🚧 **Early development**

This project is being built as part of a beginner vibe-coding course, with the product evolving through real experimentation and user feedback.

## Philosophy

**Simple by default. Powerful when needed.**

The system should adapt to the person, not force the person to adapt to the system.

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
