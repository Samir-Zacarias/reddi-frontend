import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  console.log(
    "[mw] ->",
    request.method,
    request.nextUrl.pathname,
    request.nextUrl.search
  );
  let supabaseResponse = NextResponse.next({
    request,
  });

  // With Fluid compute, don't put this client in a global environment
  // variable. Always create a new one on each request.
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  console.log("[mw] incoming", request.method, request.nextUrl.pathname, {
    hasAnonKey: !!anonKey,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    anonKey!,
    {
      cookies: {
        getAll() {
          const all = request.cookies.getAll();
          const authCookies = all.filter((c) => c.name.includes("auth"));
          console.log(
            "[mw] getAll cookies",
            authCookies.map((c) => c.name)
          );
          return all;
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
          console.log(
            "[mw] setAll cookies",
            cookiesToSet.map((c) => c.name)
          );
        },
      },
    }
  );

  // Do not run code between createServerClient and
  // supabase.auth.getClaims(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // Prefer getUser() for authenticated and verified user data
  const { data: userResult, error: userError } = await supabase.auth.getUser();
  if (userError) console.log("[mw] getUser error", userError.message);
  const authedUser = userResult?.user || null;
  const isAuthed = !!authedUser;
  console.log("[mw] isAuthed?", isAuthed, {
    id: authedUser?.id,
    email: authedUser?.email,
  });

  // Derive role primarily from profiles table (id = user.id). Fallback: app/user metadata or claims.
  let role: string | null = null;
  if (authedUser) {
    try {
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", authedUser.id)
        .single();

      console.log("[mw] fetched profile", { profile, error: !!profileError });

      if (profileError) {
        console.log("[mw] profiles fetch error", profileError.message);
      }

      role = (profile as any)?.role || (profile as any)?.user_role || null;

      if (!role) {
        const am = (authedUser.app_metadata as any) || {};
        const um = (authedUser.user_metadata as any) || {};
        role = am.user_role || am.role || um.user_role || um.role || null;
        if (role) console.log("[mw] role fallback to metadata:", role);
      }
    } catch (e: any) {
      console.log("[mw] profiles exception", e?.message || e);
    }
  } else {
    // Fallback to claims if any (unauthenticated context)
    const { data, error: claimsError } = await supabase.auth.getClaims();
    if (claimsError) console.log("[mw] claims error", claimsError.message);
    const claims = (data?.claims as any) || {};
    role = claims.user_role || claims.role || null;
  }
  console.log("[mw] resolved role (final):", role);

  const path = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  // Redirect authenticated users away from auth pages to their role home
  const isAuthPage =
    path === "/login" || path === "/auth/login" || path.startsWith("/auth/");
  console.log("[mw] flags", { isAuthPage, path, search });
  if (isAuthed && isAuthPage) {
    const url = request.nextUrl.clone();
    const home =
      role === "admin"
        ? "/admin/dashboard"
        : role === "aliado"
        ? "/aliado/dashboard"
        : role === "repartidor"
        ? "/repartidor/home"
        : "/user/home";
    url.pathname = home;
    console.log("[mw] redirecting auth->home", { from: path, to: home });
    return NextResponse.redirect(url);
  }

  // Unauthenticated access control: block protected areas
  const isProtected =
    path.startsWith("/protected") ||
    path.startsWith("/admin") ||
    path.startsWith("/aliado") ||
    path.startsWith("/repartidor") ||
    path.startsWith("/user");
  console.log("[mw] flags", { isProtected, path });
  if (!isAuthed && isProtected) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", path);
    console.log("[mw] anon -> /login", { from: path });
    return NextResponse.redirect(url);
  }

  // Role-based gates for sections
  if (isAuthed) {
    const deny = (reason: string) => {
      const url = request.nextUrl.clone();
      // Send user to their own home if role mismatch
      const home =
        role === "admin"
          ? "/admin/dashboard"
          : role === "aliado"
          ? "/aliado/dashboard"
          : role === "repartidor"
          ? "/repartidor/home"
          : "/user/home";
      url.pathname = home;
      console.log("[mw] role deny:", { reason, role, path, to: home });
      return NextResponse.redirect(url);
    };

    if (path.startsWith("/admin") && role !== "admin") {
      return deny("admin only");
    }
    if (path.startsWith("/aliado") && role !== "aliado") {
      return deny("aliado only");
    }
    if (path.startsWith("/repartidor") && role !== "repartidor") {
      return deny("repartidor only");
    }
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is.
  // If you're creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  console.log("[mw] allow", request.nextUrl.pathname, { role, search });
  return supabaseResponse;
}
