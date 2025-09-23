import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!;
  if (process.env.NEXT_PUBLIC_DEBUG_AUTH) {
    // Avoid logging actual values; just indicate presence
    console.log("[supabase/client] init", {
      hasUrl: !!url,
      hasKey: !!key,
    });
  }
  return createBrowserClient(url, key);
}
