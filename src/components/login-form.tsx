"use client";

import { cn } from "@/src/lib/utils";
import { createClient } from "@/src/lib/supabase/client";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const hasRedirectedRef = useRef(false);

  // Construir URL base para redirecciones (permite override por env)
  const siteUrl =
    (typeof window !== "undefined" &&
      (process.env.NEXT_PUBLIC_SITE_URL || window.location.origin)) ||
    undefined;

  // Listener de sesión: útil cuando OAuth vuelve y el usuario permanece en la misma vista
  useEffect(() => {
    const supabase = createClient();
    let mounted = true;
    const debug = !!process.env.NEXT_PUBLIC_DEBUG_AUTH;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (debug) console.log("[auth] initial getSession", data.session);
      if (mounted && data.session && !hasRedirectedRef.current) {
        const next = searchParams.get("next") || "/user/home";
        hasRedirectedRef.current = true;
        if (debug) console.log("[auth] redirecting to", next);
        router.replace(next);
      }
    })();
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (process.env.NEXT_PUBLIC_DEBUG_AUTH)
          console.log("[auth] onAuthStateChange", _event, !!session);
        if (session && !hasRedirectedRef.current) {
          const next = searchParams.get("next") || "/user/home";
          hasRedirectedRef.current = true;
          if (process.env.NEXT_PUBLIC_DEBUG_AUTH)
            console.log("[auth] redirecting (event) to", next);
          router.replace(next);
        }
      }
    );
    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, [router, searchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      // Update this route to redirect to an authenticated route. The user already has an active session.
      router.push("/user/home");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const supabase = createClient();
    setIsGoogleLoading(true);
    setError(null);
    try {
      // Redirigimos a una ruta pública (login) con parámetro next para que la sesión se intercambie antes del middleware.
      const redirectPublic = siteUrl
        ? `${siteUrl}/auth/login?next=/user/home`
        : undefined;
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: redirectPublic,
          queryParams: {
            // prompt: 'select_account'
          },
        },
      });
      if (error) throw error;
      // Con OAuth normal habrá un redirect de página completa; data.url puede usarse para forzar navegación.
      if (data?.url) {
        if (process.env.NEXT_PUBLIC_DEBUG_AUTH) {
          console.log("[auth] OAuth data.url", data.url);
        }
        window.location.href = data.url; // full navigation para asegurar intercambio de código
      }
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al iniciar sesión con Google"
      );
      if (process.env.NEXT_PUBLIC_DEBUG_AUTH)
        console.error("[auth] google error", err);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/auth/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
              <div className="relative">
                <div className="my-4 flex items-center">
                  <span className="h-px flex-1 bg-muted" />
                  <span className="px-2 text-xs uppercase text-muted-foreground">
                    o continúa con
                  </span>
                  <span className="h-px flex-1 bg-muted" />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleGoogleLogin}
                  disabled={isLoading || isGoogleLoading}
                >
                  {isGoogleLoading ? "Conectando..." : "Google"}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/sign-up"
                className="underline underline-offset-4"
              >
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
