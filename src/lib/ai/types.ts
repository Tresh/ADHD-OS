// -----------------------------------------------------------------------------
// AI provider abstraction
//
// The core idea: ADHD OS talks to a provider interface, not directly to
// Groq or OpenRouter. This keeps the web app decoupled from any single
// model provider and makes it possible to swap providers without touching
// the UI layer.
//
// At this stage the interface is defined but not implemented. AI is a
// reasoning layer, not the product itself.
// -----------------------------------------------------------------------------

export interface AiProviderRequest {
  messages: AiMessage[];
  /** Optional system prompt override for this request. */
  system?: string;
}

export interface AiMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  /** Optional tool calls for assistant messages. */
  toolCalls?: AiToolCall[];
}

export interface AiToolCall {
  id: string;
  name: string;
  /** Arguments as a JSON string — providers differ in how they serialize these. */
  arguments: string;
}

export interface AiProviderResponse {
  /** The assistant's text response. */
  content: string;
  /** Optional tool results returned by the model. */
  toolCalls?: AiToolCall[];
  /** Provider-specific metadata (model name, token usage, etc.). */
  metadata?: Record<string, unknown>;
}

/**
 * Error thrown by AI providers on network, auth, rate-limit, or config
 * failures. A class (not just a type) so server code can throw and catch it.
 */
export class AiProviderError extends Error {
  constructor(
    message: string,
    /** Machine-readable error code (e.g. "MISSING_API_KEY"). */
    public readonly code?: string,
    /** The raw upstream response body, where available. */
    public readonly body?: string
  ) {
    super(message);
    this.name = "AiProviderError";
  }
}

/** Core interface every AI provider must implement. */
export interface AiProvider {
  /**
   * Complete a chat conversation.
   *
   * @throws {AiProviderError} on network, auth, or rate-limit failures.
   */
  complete(request: AiProviderRequest): Promise<AiProviderResponse>;
}

/**
 * Provider configuration stored in environment variables and config.
 * This is the contract for future config lookups, not the implementation.
 */
export interface AiProviderConfig {
  /** Human-readable provider name (e.g. "groq", "openrouter"). */
  name: string;
  /** Default model identifier. */
  model: string;
  /** Maximum tokens the model should generate, when applicable. */
  maxTokens?: number;
  /** Temperature for sampling, when supported. */
  temperature?: number;
}

// -----------------------------------------------------------------------------
// Shared ProviderException for typed error handling in server routes and
// Server Actions.
// -----------------------------------------------------------------------------

export class ProviderException extends Error {
  constructor(
    message: string,
    public readonly code?: string,
    public readonly cause?: unknown
  ) {
    super(message);
    this.name = "ProviderException";
  }
}
