import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Runs on every matched request to keep Supabase Auth sessions fresh.
 *
 * This file uses the `proxy` convention (Next.js 16+), which replaces the
 * older `middleware` convention. No route protection is implemented yet —
 * this is the session-refresh foundation for auth work that follows.
 */
export async function proxy(request: NextRequest) {
  const response = NextResponse.next({ request });

  // Scaffold mode: without Supabase credentials there is no session to
  // refresh. Skip quietly so the app runs before Supabase is connected.
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return response;
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(
          cookiesToSet: { name: string; value: string; options: CookieOptions }[]
        ) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Refresh the session — keep this in place so auth state stays fresh.
  await supabase.auth.getUser();

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except API routes, Next.js internals, and
     * static files, so session refresh does not interfere with tooling.
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
