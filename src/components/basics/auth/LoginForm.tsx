"use client";

import { useEffect, useRef, useState } from "react";
import PasswordInput from "./PasswordInput";
import UserLoginIcon from "@/src/components/icons/UserLoginIcon";
import Link from "next/link";
import { createClient } from "@/src/lib/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";

const recoveryAccountLink = "/auth/forgot-password";

export default function LoginForm({
  title = "Iniciar sesión",
}: {
  title?: string;
}) {
  // --- STATE MANAGEMENT ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const hasRedirectedRef = useRef(false);

  // Redirección si ya hay sesión activa (p. ej., al volver de OAuth)
  useEffect(() => {
    const supabase = createClient();
    let mounted = true;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (mounted && data.session && !hasRedirectedRef.current) {
        const next = searchParams.get("next") || "/user/home";
        hasRedirectedRef.current = true;
        router.replace(next);
      }
    })();
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session && !hasRedirectedRef.current) {
          const next = searchParams.get("next") || "/user/home";
          hasRedirectedRef.current = true;
          router.replace(next);
        }
      }
    );
    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, [router, searchParams]);

  // --- HANDLERS ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    const supabase = createClient();
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      const next = searchParams.get("next") || "/user/home";
      // Recordarme: extiende la persistencia (handled by Supabase via persistence option, default is local)
      // If we needed to switch persistence, we'd recreate the client with different storage.
      router.replace(next);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Ocurrió un error al iniciar sesión"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* --- TÍTULO --- */}
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6 pointer-events-none">
        {title}
      </h1>

      {/* --- FORMULARIO --- */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* --- CAMPO DE NOMBRE/EMAIL --- */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-600 font-roboto"
          >
            Correo electrónico
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <UserLoginIcon className="h-5 w-5 " />
            </span>
            <input
              autoComplete="email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo"
              className="w-full pl-10 pr-4 py-3 border border-gray-400 rounded-xl font-roboto"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        {/* --- CAMPO DE CONTRASEÑA --- */}
        <PasswordInput
          isPasswordDisplayed={showPassword}
          passwordValue={password}
          displayPassword={setShowPassword}
          myOnChange={setPassword}
          label="Contraseña"
          disabled={isLoading}
        />

        {/* --- MENSAJE DE ERROR --- */}
        {error && (
          <p className="text-sm text-red-600 px-2" role="alert">
            {error}
          </p>
        )}

        {/* --- OPCIONES (RECORDARME Y OLVIDÉ CONTRASEÑA) --- */}
        <div className="flex items-center justify-between text-sm px-2 text-center">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-emerald-600 border-gray-300 rounded "
              disabled={isLoading}
            />
            <label htmlFor="remember" className="text-gray-600">
              Recordarme
            </label>
          </div>
          <Link
            href={recoveryAccountLink}
            className="font-medium text-emerald-600 hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        {/* --- BOTÓN DE INICIAR SESIÓN --- */}
        <button
          type="submit"
          className="w-full bg-primary text-white font-medium py-2 px-4 rounded-xl hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-300 disabled:opacity-70"
          disabled={isLoading}
        >
          {isLoading ? "Ingresando..." : "Iniciar Sesión"}
        </button>
      </form>
    </>
  );
}
