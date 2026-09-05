# ADHD OS — AI / Assistant Behavior Documentation

**Status:** Placeholder — not yet defined.

## Purpose

This document will describe how the AI/assistant layer is expected to behave
inside ADHD OS: what it is allowed to do, what it should not do, how it is
expected to reason, and where the line is drawn between AI support and the
core product.

## Guiding principle

AI is a reasoning layer, not the product itself. ADHD OS should use AI to
support the user's goals and reduce friction, not to become the thing the
user has to manage.

## What will go here

- Roles the assistant may play
- Behavior constraints and guardrails
- How AI responses should fit ADHD-specific needs
- Provider routing thoughts (Groq as initial provider, OpenRouter as the
  multi-provider layer)
- How behavior should remain predictable even as providers and models change

This document will be written alongside the first AI features, not before.
