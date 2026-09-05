// -----------------------------------------------------------------------------
// Groq provider (initial AI provider)
//
// Groq provides fast inference. This file defines the provider adapter shape
// but does not yet implement the complete() method. When AI functionality is
// added, the adapter will call the Groq REST API from server-side code only.
//
// Required environment variables (server-side only):
//   GROQ_API_KEY
// -----------------------------------------------------------------------------

import type { AiProvider, AiProviderRequest, AiProviderResponse } from "./types";
import { AiProviderError } from "./types";

export class GroqProvider implements AiProvider {
  constructor(private apiKey: string) {}

  async complete(_request: AiProviderRequest): Promise<AiProviderResponse> {
    // Placeholder — no implementation yet.
    // When implemented, this will make a server-side HTTP request to
    // https://api.groq.com/openai/v1/chat/completions using the Groq SDK
    // or a raw fetch, keeping the API key out of the browser.
    throw new Error("Groq provider not yet implemented");
  }
}

// -----------------------------------------------------------------------------
// A small factory that validates the environment at call-time rather than
// at module import time. This keeps failures deterministic and avoids
// crashing server startup with a missing key.
// -----------------------------------------------------------------------------

const missingKeyError = new AiProviderError(
  "GROQ_API_KEY is not configured.",
  "MISSING_API_KEY"
);

export function createGroqProvider(): AiProvider {
  const key = process.env.GROQ_API_KEY;

  if (!key || key.trim().length === 0) {
    throw missingKeyError;
  }

  return new GroqProvider(key);
}
