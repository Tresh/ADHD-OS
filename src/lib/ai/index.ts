// -----------------------------------------------------------------------------
// AI provider barrel
//
// Server-side entry point for the AI provider abstraction. Importing from
// here keeps provider selection in one place and away from the UI layer.
//
// Nothing in this folder is implemented yet — AI functionality comes later.
// -----------------------------------------------------------------------------

import type { AiProvider } from "./types";
import { createGroqProvider } from "./groq";
import { createOpenRouterProvider } from "./openrouter";

export type {
  AiProvider,
  AiProviderRequest,
  AiProviderResponse,
  AiProviderConfig,
  AiMessage,
  AiToolCall,
} from "./types";
export { AiProviderError, ProviderException } from "./types";
export { GroqProvider, createGroqProvider } from "./groq";
export { OpenRouterProvider, createOpenRouterProvider, type OpenRouterConfig } from "./openrouter";

export type ProviderName = "groq" | "openrouter";

/**
 * Resolve a provider by name. Fails fast with a descriptive error when the
 * provider's environment configuration is missing.
 */
export function createProvider(name: ProviderName): AiProvider {
  switch (name) {
    case "groq":
      return createGroqProvider();
    case "openrouter":
      return createOpenRouterProvider();
    default: {
      const exhaustive: never = name;
      throw new Error(`Unknown AI provider: ${String(exhaustive)}`);
    }
  }
}
