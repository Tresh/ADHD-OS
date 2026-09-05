# ADHD OS — V1 Scope and Constraints

**Status:** Placeholder — no V1 features are built yet.

## Current stage

This project is currently a scaffold. The goal right now is to establish a
clean, scalable foundation for ADHD OS, not to ship any V1 features.

## What V1 is intended to be

ADHD OS is a mobile-first web app for ADHD students. In V1 it is intended to
act as an adaptive personal assistant that helps users capture, organize,
plan, focus, remember, act, and recover without requiring them to constantly
manage a productivity system.

This document will define the boundaries of that first version once the
product direction is clearer.

## Likely constraints

- V1 is a web app first, with an architecture that can later support a native
  mobile app.
- Supabase will be the database and memory layer.
- Supabase Auth will handle identity and sessions.
- AI will be a reasoning layer behind a provider abstraction.
- Groq is the initial AI provider.
- OpenRouter is the AI gateway/multi-provider layer.
- Sensitive work and API keys live in server-side code only.

## What is not in scope for the scaffold

- No universal capture system.
- No tasks, goals, reminders, planning, focus mode, notifications, recovery
  flows, or AI conversations.
- No onboarding survey.
- No advanced personalization or gamification.
- No mock functionality that pretends V1 features already exist.

## What will go here later

- The specific V1 features and their priority order
- Hard cuts for what is explicitly out of scope in V1
- Constraints that affect how V1 is built
- Acceptance criteria for V1 completion
