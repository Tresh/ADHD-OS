// -----------------------------------------------------------------------------
// OpenRouter provider (AI gateway / multi-provider layer)
//
// OpenRouter sits on top of multiple model providers and lets ADHD OS route
// prompts through a single gateway. This file defines the adapter shape but
// does not yet implement the complete() method. When implemented, requests
// will be made from server-side code only.
//
// Required environment variables (server-side only):
//   OPENROUTER_API_KEY
//   OPENROUTER_BASE_URL  (defaults to https://openrouter.ai/api/v1 if empty)
// -----------------------------------------------------------------------------

import type { AiProvider, AiProviderRequest, AiProviderResponse } from "./types";
import { AiProviderError } from "./types";

export interface OpenRouterConfig {
  /** Base URL for the OpenRouter API. */
  baseUrl: string;
  /** API key used for authentication. */
  apiKey: string;
}

export class OpenRouterProvider implements AiProvider {
  constructor(private config: OpenRouterConfig) {}

  async complete(_request: AiProviderRequest): Promise<AiProviderResponse> {
    // Placeholder — no implementation yet.
    // When implemented, this will make a server-side HTTP request to
    // the OpenRouter chat completions endpoint, keeping the API key out
    // of the browser.
    throw new Error("OpenRouter provider not yet implemented");
  }
}

// -----------------------------------------------------------------------------
// Factory with environment validation at call-time.
// -----------------------------------------------------------------------------

const missingKeyError = new AiProviderError(
  "OPENROUTER_API_KEY is not configured.",
  "MISSING_API_KEY"
);

export function createOpenRouterProvider(): AiProvider {
  const key = process.env.OPENROUTER_API_KEY;

  if (!key || key.trim().length === 0) {
    throw missingKeyError;
  }

  const baseUrl =
    process.env.OPENROUTER_BASE_URL?.trim() ||
    "https://openrouter.ai/api/v1";

  return new OpenRouterProvider({ baseUrl, apiKey: key });
}
