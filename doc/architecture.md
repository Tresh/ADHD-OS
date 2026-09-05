# ADHD OS — Architecture Documentation

**Status:** Placeholder — scaffold only.

## High-level direction

ADHD OS is built so the web app is the first interface, but the core backend,
database, authentication, and AI layers are not tightly coupled to the web UI.
That keeps the architecture open to a future native mobile app.

## Main layers

- **Next.js** is the interface. It renders the web app and hosts server-side
  routes, server actions, and middleware where sensitive work happens.
- **Supabase** is the database and memory layer.
- **Supabase Auth** handles identity and sessions.
- **AI** is a reasoning layer, not the product itself. It sits behind a
  provider abstraction so the app is not locked to a single model backend.
- **Groq** is the initial AI provider for fast inference.
- **OpenRouter** provides the multi-provider/model layer through a single
  gateway.
- **GitHub** manages source control.
- **Vercel** hosts and deploys the web application.

## Where sensitive work lives

API keys and other secrets stay in server-side code only. That means API
routes, server actions, server components that call backend services, and
the service-role Supabase client when it is needed. The browser-side Supabase
client uses the anon key only, and AI providers are initialized from server
code after validating the environment.

## Project structure principles

- `src/app/` holds Next.js routing and UI routes.
- `src/lib/` holds libraries and services, split by domain:
  - `supabase/` for database and auth clients
  - `ai/` for the provider abstraction and provider adapters
- `src/components/` holds UI components, split into primitives and layout.
- `src/types/` holds shared TypeScript types.
- `src/hooks/` holds custom React hooks.
- `doc/` holds product and development context.

## What is not in scope yet

- No V1 features are implemented.
- No database schema or migrations yet.
- No auth UI flows yet.
- No AI functionality yet.

The goal of this document is to describe the intended structure so future
work can fit into it cleanly.
