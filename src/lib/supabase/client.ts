"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

// -----------------------------------------------------------------------------
// Browser-side Supabase client
//
// Uses the anon key only. All privileged work (service role, AI providers,
// secrets) happens server-side — see lib/supabase/admin.ts and lib/ai/.
// -----------------------------------------------------------------------------

export function createClient(): SupabaseClient {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
